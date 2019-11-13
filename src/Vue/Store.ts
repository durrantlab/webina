import * as Utils from "../Utils";
import * as ThreeDMol from "../UI/ThreeDMol";

// @ts-ignore
import ExampleReceptorPDBQT from "../example/1xdn.pdbqt";

// @ts-ignore
import ExampleLigandPDBQT from "../example/ATP.pdbqt";

// @ts-ignore
import ExampleOutputPDBQT from "../example/webina_out.pdbqt";

declare var Vuex;

interface IVueXStoreSetVar {
    name: string;
    val: any;
}

interface iVueXParam {
    stateVarName?: string;
    name: string;
    val: any;
}

interface IParamAccess {
    stateVarName: string;
    name: string;
}

interface IModal {
    title: string;
    body: string;
}

export const store = new Vuex.Store({
    "state": {
        "vinaParams": {},
        "validation": {},
        hideDockingBoxParams: false,
        "tabIdx": 0,
        "receptorFileName": "",
        "ligandFileName": "",
        "receptorContents": "",
        "receptorContentsExample": ExampleReceptorPDBQT,
        "ligandContents": "",
        "ligandContentsExample": ExampleLigandPDBQT,
        "crystalContents": "",
        "crystalContentsExample": ExampleLigandPDBQT,
        "outputContents": "",
        "outputContentsExample": ExampleOutputPDBQT,
        "dockedContents": "",
        "parametersTabDisabled": false,
        "existingVinaOutputTabDisabled": false,
        "runningTabDisabled": true,
        "startOverTabDisabled": true,
        "outputTabDisabled": true,
        "pdbOutputFrames": [],
        "stdOut": "",
        "modalShow": false,
        "modalTitle": "Title",
        "modalBody": "Some text here...",
        "vinaParamsValidates": false,
        "time": 0  // Used to keep track of execution time.
    },
    "mutations": {
        "setVar"(state: any, payload: IVueXStoreSetVar) {
            state[payload.name] = payload.val;

        },
        "setVinaParam"(state: any, payload: iVueXParam) {
            // By redefining the whole variable, it becomes reactive. Directly
            // changing individual properties is not reactive.
            state["vinaParams"] = Utils.getNewObjWithUpdate(
                state["vinaParams"],
                payload.name,
                payload.val
            );
            state.hideDockingBoxParams = state["vinaParams"]["score_only"] === true
        },

        "setValidationParam"(state: any, payload: iVueXParam) {
            // By redefining the whole variable, it becomes reactive. Directly
            // changing individual properties is not reactive.
            state["validation"] = Utils.getNewObjWithUpdate(
                state["validation"],
                payload.name,
                payload.val
            );
        },

        "disableTabs"(state: any, payload: any) {
            const tabDisableVarNames = Object.keys(payload);
            const tabDisableVarNamesLen = tabDisableVarNames.length;
            for (let i = 0; i < tabDisableVarNamesLen; i++) {
                const tabDisableVarName = tabDisableVarNames[i];
                let val = payload[tabDisableVarName];
                val = val === undefined ? true : val;
                state[tabDisableVarName] = val;
            }

            // If the output tab has been enabled, you should also warn the
            // user about closing the website.
            if (payload["outputTabDisabled"] === false) {
                window.addEventListener("beforeunload", (event) => {
                    event.preventDefault();

                    // No modern browser respects the returnValue anymore. See
                    // https://stackoverflow.com/questions/45088861/whats-the-point-of-beforeunload-returnvalue-if-the-message-does-not-get-set
                    event.returnValue = "";
                });
            }
        },
        "outputToData"(state: any) {
            let data = [];

            let outPdbqtFileTxt = state["outputContents"];

            // Get info like score and rmsd from output file.
            let re = /^REMARK VINA RESULT:\W+?([0-9\.\-]+)\W+?([0-9\.\-]+)\W+?([0-9\.\-]+)$/gm
            let match;
            let i = 1;
            while (match = re.exec(outPdbqtFileTxt)) {
                data.push([
                    i, match[1], match[2], match[3]
                ].map(d => +d));
                i++;
            }

            // Get pdb frames from output pdbqt file.
            let framesPDBQTs = outPdbqtFileTxt.split("ENDMDL");
            let framePDBs = framesPDBQTs
                            .map(t => ThreeDMol.pdbqtToPDB(t, this.$store))
                            .filter(t => t !== "")
                            .map((t, i) => { return [data[i], t]; });
            state["pdbOutputFrames"] = framePDBs;

            // Set the first docked frame as the selected one.
            state["dockedContents"] = framePDBs[0][1];
        },
        "openModal"(state: any, payload: IModal): void {
            state["modalTitle"] = payload.title;
            state["modalBody"] = payload.body;
            state["modalShow"] = true;
            jQuery("body").removeClass("waiting");
        }
    },
    "getters": {}
});
