// This file is part of Webina, released under the Apache 2.0 License. See
// LICENSE.md or go to https://opensource.org/licenses/Apache-2.0 for full
// details. Copyright 2020 Jacob D. Durrant.

// There are a few variables and functions from vina.js that I want to easily
// access from here.

let VERSION = "XXXXXXXXXXXXX.X"; // Replaced by compile script.
console.log("Webina Library " + VERSION);
console.log("    Compiled from Vina 1.2.3 codebase:");
console.log("    http://vina.scripps.edu/");

interface IVinaParams {
    receptor?: string;
    ligand?: string;
    center_x: number;
    center_y: number;
    center_z: number;
    size_x: number;
    size_y: number;
    size_z: number;
    local_only?: boolean;
    score_only?: boolean;
    randomize_only?: boolean;
    cpu?: number;
    exhaustiveness?: number;
    seed?: number;
    num_modes?: number;
    energy_range?: number;
    weight_gauss1?: number;
    weight_gauss2?: number;
    weight_repulsion?: number;
    weight_hydrophobic?: number;
    weight_hydrogen?: number;
    weight_rot?: number;
}

export function start(
    vinaParams: IVinaParams,
    receptorPDBQTTxt: string,
    ligandPDBQTTxt: string,
    onDone?: any,
    onError?: any,
    baseUrl?: string
): void {
    // baseUrl = undefined;  // For debugging.
    let baseUrlMsg = "\nWEBINA\n======\n\n";
    if (baseUrl !== undefined) {
        if (baseUrl.slice(baseUrl.length - 1) !== "/") {
            baseUrl += "/";
        }
        baseUrlMsg += "User specified baseUrl: " + baseUrl + "\n";
    } else {
        baseUrlMsg += "No baseUrl specified, so using ./\n\n";
        baseUrlMsg += "Use Webina.start() to specify the baseUrl:\n";
        baseUrlMsg += "    function start(vinaParams, receptorPDBQTTxt, \n";
        baseUrlMsg += "                   ligandPDBQTTxt, onDone, \n";
        baseUrlMsg += "                   onError, baseUrl)\n";
    }
    baseUrlMsg += "\nExpecting files at the following locations:\n";
    for (let i = 0; i < 5; i++) {
        const fileName = [
            // "Webina.js",
            // "vina.html.mem",
            "vina.js",
            "vina.worker.js",
            "vina.wasm",
        ][i];
        baseUrlMsg +=
            "    " + (baseUrl === undefined ? "./" : baseUrl) + fileName + "\n";
    }
    baseUrlMsg += "\n";

    if (baseUrl !== undefined) {
        console.log(baseUrlMsg);
    } else {
        console.warn(baseUrlMsg);
    }

    if (vinaParams["receptor"] !== undefined) {
        console.warn(
            "Webina does not support Vina's --receptor parameter. Instead, pass the content of the receptor file as a string to the webina.start() function."
        );
    }

    if (vinaParams["receptor"] !== undefined) {
        console.warn(
            "Webina does not support Vina's --ligand parameter. Instead, pass the content of the ligand file as a string to the webina.start() function."
        );
    }

    if (onError === undefined) {
        onError = () => {
            console.log(
                "Webina encountered an error! Does your browser support WebAssembly?"
            );
        };
    }

    let initializedObj: any = undefined;
    let stdOut = "";
    let stdErr = "";

    // @ts-ignore
    import(
        "../Webina/vina.js"
        /* webpackChunkName: "webina" */
        /* webpackMode: "lazy" */
    )
        .then((mod: any) => {
            const WEBINA_Module = mod.default;
            const webinaMod = new WEBINA_Module({
                logReadFiles: true,
                noInitialRun: true,
                locateFile: (path: string) => {
                    // console.log(path);
                    return `Webina/${path}`;
                },
                preRun: [
                    function (This: any) {
                        // Save the pdb file to the file system
                        This.FS.writeFile("/receptor.pdbqt", receptorPDBQTTxt);
                        This.FS.writeFile("/ligand.pdbqt", ligandPDBQTTxt);

                        initializedObj = This;
                    },
                ],
                print: (text: string) => {
                    stdOut += text + "\n";
                },
                printErr: (text: string) => {
                    stdErr += text + "\n";
                },
                onExit: (code: number) => {
                    if (onDone !== undefined) {
                        // Load contents of /ligand_out.pdbqt
                        // @ts-ignore
                        const outTxt = initializedObj.FS.readFile(
                            "/ligand_out.pdbqt",
                            { encoding: "utf8" }
                        );
                        onDone(outTxt, stdOut, stdErr);
                        stdOut = "";
                        stdErr = "";
                    }
                },
                onError: onError,
                catchError: (n) => {
                    onError(n);
                    // throw n;  // Don't throw the errr. You're catching it now.
                },
            });
            return webinaMod;
        })
        .then((webinaMod: any) => {
            return webinaMod.ready;
        })
        .then((webinaMod: any) => {
            let cmdLineParams: any[] = [];
            Object.keys(vinaParams).forEach((key) => {
                const val = vinaParams[key];
                if (val === false) {
                    return;
                } else if (val === true) {
                    cmdLineParams.push(`--${key}`);
                    return;
                }
                cmdLineParams.push(`--${key}`);
                cmdLineParams.push(val.toString());
            });

            // cmdLineParams = ["--help"]
            cmdLineParams.push(
                ...[
                    "--receptor",
                    "/receptor.pdbqt",
                    "--ligand",
                    "/ligand.pdbqt",
                    "--out",
                    "/ligand_out.pdbqt",
                ]
            );

            webinaMod.callMain(cmdLineParams);
        });
}

// For some reason, WebAssembly always uses one more processor
// than specified. Compensate for that here. But sometimes it
// doesn't, so commenting out... Confusing.
// if ((vinaParams["cpu"] !== undefined) && (vinaParams["cpu"] > 1)) {
//     vinaParams["cpu"] = vinaParams["cpu"] - 1;
// }
