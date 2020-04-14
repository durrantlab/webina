// This file is part of Webina, released under the Apache 2.0 License. See
// LICENSE.md or go to https://opensource.org/licenses/Apache-2.0 for full
// details. Copyright 2020 Jacob D. Durrant.

declare var Vue;

/** An object containing the vue-component computed functions. */
let computedFunctions = {
    /** The visibility (boolean, open/closed) of the convert file modal. Can
     * both get and set. */
    "convertFileModalShow": {
        get(): boolean {
            return this.$store.state["convertFileModalShow"];
        },

        set(val: boolean): void {
            this.$store.commit("setVar", {
                name: "convertFileModalShow",
                val,
            });
        },
    },

    /**
     * Get the extension of the user-submitted file.
     * @returns string The extension.
     */
    "currentExt"(): string {
        return this.$store.state["convertFileExt"].toUpperCase();
    },

    /**
     * Get the current type of the user-submitted file. "receptor" or
     * "ligand".
     * @returns string The type.
     */
    "currentType"(): string {
        return this.$store.state["convertFileType"];
    },

    /**
     * Determine whether 3D coordinates must be generated, given the file
     * extension. If they are required regardless, don't give the user the
     * option.
     * @returns boolean  True if generating 3D coordinates is required.
     */
    "gen3DRequired"(): boolean {
        if (["CAN", "SMI", "SMILES"].indexOf(this["currentExt"]) !== -1) {
            // It's one of the formats that always required that 3D
            // coordinates be generated.
            this["gen3D"] = true;
            return true;
        }
        return false;
    }
}

/** An object containing the vue-component methods functions. */
let methodsFunctions = {
    "beginConvert"(e) {
        let frameWindow = document.getElementById("convert-frame")["contentWindow"];
        frameWindow["startSpinner"]();
        let content: string = this.$store.state["convertFile"];
        while (content.substr(content.length - 1, 1) === "\n") {
            content = content.substr(0, content.length - 1);
        }

        if (this["currentType"]!=="ligand") {
            // If it's not a ligand, there's no need to generate 3D
            // coordinates.
            this["gen3D"] = false;
        }

        frameWindow["PDBQTConvert"]["convert"](
            content,
            this["currentExt"].toLowerCase(),
            this["currentType"]==="ligand",
            this["addHydrogens"],
            this["gen3D"],
            parseFloat(this["phVal"])
        ).then((out) => {
            this.$store.commit("setVar", {
                name: this["currentType"] + "Contents",
                val: out
            });
            this["$refs"]["convert-modal"].hide();

            // This makes it ook like it validated.
            this.$store.commit("setVar", {
                name: this["currentType"] + "ForceValidate",
                val: true
            });

            // This actually sets the validation.
            this.$store.commit("setValidationParam", {
                name: this["currentType"],
                val: true
            });
        }).catch((msg) => {
            this["$refs"]["convert-modal"].hide();
            this["$bvModal"]["msgBoxOk"]("Could not convert your file. Are you sure it is a properly formatted " + this["currentExt"] + " file?", {
                "title": "Error Converting File!",
            });
            this.$store.commit("setVar", {
                name: this["currentType"] + "ForceValidate",
                val: false
            });
            console.log("ERROR: " + msg);
        });

        e.preventDefault();
    },

    "cancelPressed"() {
        // Not sure the below is really necessary, but let's just make
        // sure.
        this.$store.commit("setVar", {
            name: this["currentType"] + "FileName",
            val: undefined
        });

        this.$store.commit("setValidationParam", {
            name: this["currentType"],
            val: false
        });
    },
    "reloadIFrame"() {
        document.getElementById("convert-frame")["src"] = "./pdbqt_convert/index.html?startBlank";
    }
}

/**
 * Setup the convert-file-modal Vue commponent.
 * @returns void
 */
export function setup(): void {
    Vue.component("convert-file-modal", {
        /**
         * Get the data associated with this component.
         * @returns any  The data.
         */
        "data": function () {
            return {
                "addHydrogens": true,
                "gen3D": false,
                "phVal": 7.4
            };
        },
        "computed": computedFunctions,
        "methods": methodsFunctions,
        "template": `
            <b-modal
              ref="convert-modal"
              @shown="reloadIFrame"
              ok-title="Convert" v-model="convertFileModalShow"
              id="convert-msg-modal" title="Convert File to PDBQT"
              @ok="beginConvert" @cancel="cancelPressed">
                <p class="my-4">
                    Webina works with PDBQT files, not {{currentExt}} files. We suggest you:
                    <span v-if="this['currentType']==='receptor'">
                        <ol>
                            <li>Add hydrogen atoms using <a href="http://www.poissonboltzmann.org/" target="_blank">PDB2PQR</a></li>
                            <li>Convert the resulting PQR file to PDB using <a href="http://openbabel.org/wiki/Main_Page" target="_blank">Open Babel</a></li>
                            <li>Convert the PDB file to PDBQT using <a target='_blank' href='http://mgltools.scripps.edu/'>MGLTools</a></li>
                        </ol>
                    </span>
                    <span v-else-if="this['currentType']==='ligand'">
                        <ol>
                            <li>Add hydrogen atoms to your ligand files (SMILES or SDF format) using <a target='_blank' href='https://git.durrantlab.pitt.edu/jdurrant/gypsum_dl'>Gypsum-DL</a></li>
                            <li>Convert the resulting PDB or SDF file(s) to PDBQT using <a target='_blank' href='http://mgltools.scripps.edu/'>MGLTools</a></li>
                        </ol>
                    </span>
                </p>

                <p>Or click "Convert" below to convert with PDBQTConvert, which should be good enough for most purposes.</p>

                <b-form-checkbox
                    id="babel-add-hydrogens"
                    v-model="addHydrogens"
                    name="babel-add-hydrogens"
                    :value="true"
                    :unchecked-value="false"
                >
                    Add hydrogen atoms at pH
                    <b-form-input
                        id="ph-val"
                        v-model="phVal"
                        type="text"
                        placeholder="7.4"
                        class="form-control-sm"
                        @click.stop.prevent
                        style="width: 45px; height: 23px; text-align: center; margin-left: 2px; display: inline-block;"
                    ></b-form-input>
                </b-form-checkbox>

                <b-form-checkbox
                    v-if="(this['currentType']==='ligand') && (!gen3DRequired)"
                    id="babel-gen-3d"
                    v-model="gen3D"
                    name="babel-gen-3d"
                    :value="true"
                    :unchecked-value="false"
                >
                    Generate 3D coordinates.
                </b-form-checkbox>

                <iframe id="convert-frame" style="border: 0; width: 100%; height: 65px;"></iframe>

                <small class="form-text text-muted">
                    PDBQTConvert is an optional GPL-licensed helper app
                    built on <a
                    href="https://github.com/partridgejiang/cheminfo-to-web/tree/master/OpenBabel/OpenBabel-js" target="_blank">
                    OpenBabel JS</a>. It communicates with Webina at "arms
                    length" via an iframe.
                </small>
            </b-modal>`,
        "props": {}
    });
}
