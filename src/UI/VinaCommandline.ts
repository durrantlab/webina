// This file is part of Webina, released under the Apache 2.0 License. See
// LICENSE.md or go to https://opensource.org/licenses/Apache-2.0 for full
// details. Copyright 2020 Jacob D. Durrant.

import { store } from "../Vue/Store";

declare let Vue: any;
declare let FileSaver: any;

/** An object containing the vue-component computed functions. */
let computedFunctions = {
    /**
     * Determines whether the provided vina parameters validate.
     * @returns boolean  True if the validate, false otherwise.
     */
    "vinaParamsValidate"(): boolean {
        return store.state["vinaParamsValidates"];
    },

    /**
     * Generates a mock vina command line.
     * @returns string  The mock command line.
     */
    "commandlineStr"(): string {
        // @ts-ignore
        if (this.vinaParamsValidate === false) {
            return "First fix parameter problems above..."
        } else {
            let params = store.state["vinaParams"];

            const paramNames = Object.keys(params);
            const paramNamesLen = paramNames.length;
            const keyValPairs: string[][] = [];
            for (let i = 0; i < paramNamesLen; i++) {
                const paramName = paramNames[i];
                const val = params[paramName];
                if ((val !== false) && (val !== null) && (val !== undefined)) {
                    let keyValPair = [paramName];
                    if (typeof(val) !== "boolean") {
                        keyValPair.push(val.toString())
                    } else {
                        keyValPair.push("")
                    }
                    keyValPairs.push(keyValPair);
                }
            }
            keyValPairs.sort();

            let cmdStr = "";
            const keyValPairsLen = keyValPairs.length;
            for (let i = 0; i < keyValPairsLen; i++) {
                const keyValPair = keyValPairs[i];
                const paramName = keyValPair[0];
                const val = keyValPair[1];
                cmdStr = cmdStr + " --" + paramName;
                if (val !== "") {
                    cmdStr = cmdStr + " " + val.toString();
                }
            }

            return "/path/to/vina " +
                    "--receptor " + store.state["receptorFileName"] + " " +
                    "--ligand " + store.state["ligandFileName"] +
                    cmdStr;
        }
    },

    /**
     * Gets the receptor file name from the VueX store.
     * @returns string  The receptor file name.
     */
    "receptorFileName"(): string {
        return store.state["receptorFileName"];
    },

    /**
     * Gets the ligand file name from the VueX store.
     * @returns string  The ligand file name.
     */
    "ligandFileName"(): string {
        return store.state["ligandFileName"];
    }
}

/** An object containing the vue-component methods functions. */
let methodsFunctions = {

    /**
     * Downloads either the receptor or ligand files.
     * @param  {*}      e     The click event.
     * @param  {string} type  The type of file, either "receptor" or "ligand".
     * @returns void
     */
    "downloadFile"(e: any, type: string): void {
        let blob = new Blob([store.state[type + "Contents"]], {
            type: "text/plain;charset=utf-8"
        });
        FileSaver.saveAs(blob, store.state[type + "FileName"]);

        e.preventDefault();
        e.stopPropagation();
    }
}

/**
 * Setup the vina-commandline Vue commponent.
 * @returns void
 */
export function setup(): void {
    Vue.component('vina-commandline', {
        /**
         * Get the data associated with this component.
         * @returns any  The data.
         */
        "data"() {
            return {}
        },
        "computed": computedFunctions,
        "methods": methodsFunctions,
        "template": `
            <sub-section v-if="vinaParamsValidate" title="Run Vina from the Command Line">
                <p>
                    Webina is convenient but slower than stand-alone Vina.
                    You may wish to <a href="http://vina.scripps.edu/download.html"
                    target="_blank">download a binary copy</a>
                    of Vina to run from the command line instead.
                </p>
                <form-group
                    id="input-group-commandline"
                    description="Type this into the command line (replacing the path) to run command-line Vina with your specified parameters."
                >
                    <b-form-input
                        name="commandline"
                        v-model="commandlineStr"
                        type="text"
                        readonly
                    ></b-form-input>

                    <template v-slot:extraDescription>
                        Click to download the <a href="" @click="downloadFile($event, 'receptor');">receptor</a>
                        and <a href="" @click="downloadFile($event, 'ligand');">ligand</a> PDBQT files.
                    </template>
                </form-group>
            </sub-section>
        `,
        "props": {}
    })
}
