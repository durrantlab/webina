// This file is part of Webina, released under the Apache 2.0 License. See
// LICENSE.md or go to https://opensource.org/licenses/Apache-2.0 for full
// details. Copyright 2020 Jacob D. Durrant.


import * as Utils from "../../Utils";

declare var Vue;
declare var Webina;

/**
 * Setup the vina-params Vue commponent.
 * @returns void
 */
export function setup(): void {
    Vue.component('vina-params', {
        "template": `
            <div>
                <b-form v-if="webAssemblyAvaialble">
                    <b-card
                        class="mb-2 text-center"
                        style="margin-bottom:1.4rem !important;"
                    >
                        <b-card-text>
                            Use this tab to setup a Webina job in your browser.
                            Specify the input files and Vina parameters below.
                        </b-card-text>
                    </b-card>

                    <sub-section title="Input (PDBQT) Files" v-if="showFileInputs">
                        <file-input
                            label="Receptor"
                            id="receptor"
                            description="Formats: PDBQT (best), PDB, ENT, XYZ, PQR, MCIF, MMCIF. Be sure to add polar hydrogen atoms."
                            accept=".pdbqt" convert=".pdb, .ent, .xyz, .pqr, .mcif, .mmcif"
                        ></file-input>

                        <file-input
                            label="Ligand"
                            id="ligand"
                            description="Formats: PDBQT (best), CAN, MDL, MOL, MOL2, PDB, SD, SDF, SMI, SMILES, XYZ. Add hydrogens with <a target='_blank' href='https://git.durrantlab.pitt.edu/jdurrant/gypsum_dl'>Gypsum-DL</a>."
                            accept=".pdbqt" convert=".can, .mdl, .mol, .mol2, .pdb, .sd, .sdf, .smi, .smiles, .xyz"
                        >
                            <template v-slot:extraDescription>Or <a href='' @click="onDrawLigClick($event);">draw your ligand</a>.</template>
                        </file-input>

                        <file-input
                            label="Correct Pose"
                            id="crystal"
                            :required="false"
                            description="The correct ligand pose, if known from experiment. This PDBQT or PDB file is optional."
                            accept=".pdbqt, .pdb"
                        ></file-input>

                        <form-button @click.native="useExampleVinaInputFiles" cls="float-right">Use Example Files</form-button>  <!-- variant="default" -->
                    </sub-section>

                    <sub-section title="Docking Box">
                        <form-group
                            label=""
                            id="input-group-receptor-3dmol"
                            description=""
                        >
                            <div class="bv-example-row container-fluid">
                                <b-row>
                                    <b-col style="padding-left: 0; padding-right: 10px;">
                                        <threedmol type="receptor"></threedmol>
                                    </b-col>
                                    <b-col style="padding-right: 0; padding-left: 10px;">
                                        <threedmol type="ligand"></threedmol>
                                    </b-col>
                                </b-row>
                            </div>
                        </form-group>

                        <triple-numeric-input
                            :hide="hideDockingBoxParams"
                            label="Box Center"
                            id1="center_x"
                            id2="center_y"
                            id3="center_z"
                            description="X, Y, and Z coordinates of the docking-box center."
                        ></triple-numeric-input>

                        <triple-numeric-input
                            :hide="hideDockingBoxParams"
                            label="Box Size"
                            id1="size_x"
                            id2="size_y"
                            id3="size_z"
                            description="Size of docking box in the X, Y, and Z dimensions (Angstroms)."
                            :min="0"
                        ></triple-numeric-input>
                    </sub-section>

                    <sub-section title="Other Critical Parameters">
                        <numeric-input
                            label="CPU(s)" id="cpu"
                            description="The number of CPUs to use. Leave a few CPUs free to maintain computer responsiveness."
                            placeholder="${navigator.hardwareConcurrency <= 2 ? 1 : 2}"
                            :default="${navigator.hardwareConcurrency <= 2 ? 1 : 2}"
                            :min="1"
                            :max="${navigator.hardwareConcurrency == 1 ? 1 : navigator.hardwareConcurrency - 1}"
                        ></numeric-input>

                        <numeric-input
                            label="Exhaustiveness" id="exhaustiveness"
                            description="Exhaustiveness of the global search (roughly proportional to time). Webina defaults to 4 to speed execution in the browser, but the Vina default is 8. Use 8 when accuracy is critical."
                            placeholder="8"
                            :default="8"
                            :min="1"
                        ></numeric-input>
                    </sub-section>

                    <sub-section title="Advanced Parameters">
                        <div role="tablist">
                            <b-card no-body class="mb-1">
                                <b-card-header header-tag="header" class="p-1" role="tab">
                                    <b-button block href="#" v-b-toggle.accordion-2 variant="default">Output  Parameters (Optional)</b-button>
                                </b-card-header>
                                <b-collapse id="accordion-2" role="tabpanel">
                                    <b-card-body>
                                        <b-card
                                            class="mb-2 text-center"
                                            style="margin-bottom:1.4rem !important;"
                                        >
                                            <b-card-text>
                                                Optional parameters to control Webina output.
                                            </b-card-text>
                                        </b-card>

                                        <check-box
                                            label="Perform a local search only." id="local_only"
                                        ></check-box>
                                        <check-box
                                            label="Score only, without docking. Docking-box center and size will be ignored."
                                            id="score_only"
                                        ></check-box>
                                        <check-box
                                            label="Randomize input, attempting to avoid clashes."
                                            id="randomize_only"
                                        ></check-box>
                                    </b-card-body>
                                </b-collapse>
                            </b-card>

                            <b-card no-body class="mb-1">
                                <b-card-header header-tag="header" class="p-1" role="tab">
                                    <b-button block href="#" v-b-toggle.accordion-3 variant="default">Misc Parameters (Optional)</b-button>
                                </b-card-header>
                                <b-collapse id="accordion-3" role="tabpanel">
                                    <b-card-body>
                                        <b-card
                                            class="mb-2 text-center"
                                            style="margin-bottom:1.4rem !important;"
                                        >
                                            <b-card-text>
                                                Advanced parameters that are best left unmodified.
                                            </b-card-text>
                                        </b-card>
                                        <numeric-input
                                            label="Random Seed" id="seed"
                                            description="The explicit random seed."
                                            placeholder="${new Date().getTime()}"
                                            :min="1"
                                        ></numeric-input>

                                        <numeric-input
                                            label="Number of Modes" id="num_modes"
                                            description="Maximum number of binding modes to generate."
                                            placeholder="9"
                                            :min="1"
                                        ></numeric-input>

                                        <numeric-input
                                            label="Energy Range" id="energy_range"
                                            description="Maximum energy difference between the best binding mode and the worst one displayed (kcal/mol)."
                                            placeholder="3"
                                            :min="0"
                                        ></numeric-input>

                                        <numeric-input
                                            label="Gauss_1 Weight" id="weight_gauss1"
                                            description="Gauss_1 weight."
                                            placeholder="-0.035579"
                                        ></numeric-input>

                                        <numeric-input
                                            label="Gauss2 Weight" id="weight_gauss2"
                                            description="Gauss_1 weight term."
                                            placeholder="-0.005156"
                                        ></numeric-input>

                                        <numeric-input
                                            label="Repulsion Weight"
                                            id="weight_repulsion"
                                            description="Repulsion weight term."
                                            placeholder="0.84024500000000002"
                                        ></numeric-input>

                                        <numeric-input
                                            label="Hydrophobic Weight"
                                            id="weight_hydrophobic"
                                            description="Hydrophobic weight term."
                                            placeholder="-0.035069000000000003"
                                        ></numeric-input>

                                        <numeric-input
                                            label="Hydrogen Weight"
                                            id="weight_hydrogen"
                                            description="Hydrogen bond weight term."
                                            placeholder="-0.58743900000000004"
                                        ></numeric-input>

                                        <numeric-input
                                            label="Rot Weight" id="weight_rot"
                                            description="N_rot weight term."
                                            placeholder="0.058459999999999998"
                                        ></numeric-input>
                                    </b-card-body>
                                </b-collapse>
                            </b-card>
                        </div>
                    </sub-section>

                    <vina-commandline></vina-commandline>

                    <span style="display:none;">{{validate(false)}}</span>  <!-- Hackish. Just to make reactive. -->
                    <form-button @click.native="onSubmitClick" variant="primary" cls="float-right mb-4">Start Webina</form-button>

                </b-form>
                <div v-else>
                    <p>Unfortunately, your browser does not support WebAssembly.
                    Please <a href='https://developer.mozilla.org/en-US/docs/WebAssembly#Browser_compatibility'
                    target='_blank'>switch to a browser that does</a> (e.g., Google Chrome).</p>

                    <p>Note that you can still use the "Existing Vina Output" option
                    (see menu on the left) even without WebAssembly.</p>
                </div>
            </div>
        `,
        "props": {},
        "computed": {
            /**
             *
             * Whether to hide the vina docking-box parameters.
             * @returns boolean  True if they should be hidden, false
             *                   otherwise.
             */
            "hideDockingBoxParams"(): boolean {
                return this.$store.state.hideDockingBoxParams;
            }
        },

        /**
         * Get the data associated with this component.
         * @returns any  The data.
         */
        "data"() {
            return {
                "showFileInputs": true,
                "webAssemblyAvaialble": true,
            }
        },
        "methods": {
            /**
             * Runs when user indicates theye want to use example vina input
             * files, rather than provide their own.
             * @returns void
             */
            "useExampleVinaInputFiles"(): void {
                this["showFileInputs"] = false;

                setTimeout(() => {  // Vue.nextTick doesn't work...
                    // Update some values.
                    this.$store.commit("setVar", {
                        name: "receptorContents",
                        val: this.$store.state["receptorContentsExample"]
                    });

                    this.$store.commit("setVar", {
                        name: "ligandContents",
                        val: this.$store.state["ligandContentsExample"]
                    });
                    this.$store.commit("setVar", {
                        name: "crystalContents",
                        val: this.$store.state["crystalContentsExample"]
                    });
                    this.$store.commit("setVinaParam", {
                        name: "center_x",
                        val: 41.03
                    });
                    this.$store.commit("setVinaParam", {
                        name: "center_y",
                        val: 18.98
                    });
                    this.$store.commit("setVinaParam", {
                        name: "center_z",
                        val: 14.03
                    });
                    this.$store.commit("setVinaParam", {
                        name: "size_x",
                        val: 20.00
                    });
                    this.$store.commit("setVinaParam", {
                        name: "size_y",
                        val: 20.00
                    });
                    this.$store.commit("setVinaParam", {
                        name: "size_z",
                        val: 20.00
                    });

                    // These values should now validate.
                    let validateVars = [
                        "receptor", "ligand", "center_x", "center_y", "center_z",
                        "size_x", "size_y", "size_z"
                    ];
                    const validateVarsLen = validateVars.length;
                    for (let i = 0; i < validateVarsLen; i++) {
                        const validateVar = validateVars[i];
                        this.$store.commit("setValidationParam", {
                            name: validateVar,
                            val: true
                        });
                    }
                }, 100);
            },

            /**
             * Runs when the user presses the submit button.
             * @returns void
             */
            "onSubmitClick"(): void {
                if (this["validate"]() === true) {
                    this.$store.commit("disableTabs", {
                        "parametersTabDisabled": true,
                        "existingVinaOutputTabDisabled": true,
                        "runningTabDisabled": false,
                    });

                    jQuery("body").addClass("waiting");

                    Vue.nextTick(() => {
                        this.$store.commit("setVar", {
                            name: "tabIdx",
                            val: 2
                        });

                        Vue.nextTick(() => {
                            // setTimeout(() => {
                            //     this.afterWASM(this["testVinaOut"], this["testStdOut"]);
                            // }, 1000);

                            // Keep track of start time
                            this.$store.commit("setVar", {
                                name: "time",
                                val: new Date().getTime()
                            });

                            Webina.start(
                                this.$store.state["vinaParams"],
                                this.$store.state["receptorContents"],
                                this.$store.state["ligandContents"],

                                // onDone
                                (outPdbqtFileTxt: string, stdOut: string, stdErr: string) => {
                                    this.$store.commit("setVar", {
                                        name: "time",
                                        val: Math.round((new Date().getTime() - this.$store.state["time"]) / 100) / 10
                                    });

                                    this.afterWASM(outPdbqtFileTxt, stdOut, stdErr);
                                },

                                // onError
                                (errObj: any) => {
                                    // Disable some tabs
                                    this.$store.commit("disableTabs", {
                                        "parametersTabDisabled": true,
                                        "existingVinaOutputTabDisabled": true,
                                        "runningTabDisabled": true,
                                        "outputTabDisabled": true,
                                        "startOverTabDisabled": false
                                    });

                                    this.showWebinaError(errObj["message"]);
                                },
                                Utils.curPath() + "Webina/"
                            )
                        });
                    });
                }
            },

            /**
             * Opens the draw ligand modal.
             * @param  {*} e  A click event so you can stop the propagation.
             * @returns void
             */
            "onDrawLigClick"(e: any): void {
                this.$store.commit("drawSmilesModal");
                e.preventDefault();
                e.stopPropagation();
            },

            /**
             * Determines whether all form values are valid.
             * @param  {boolean=true} modalWarning  Whether to show a modal if
             *                                      they are not valid.
             * @returns boolean  True if they are valid, false otherwise.
             */
            "validate"(modalWarning: boolean=true): boolean {
                let validations = this.$store.state["validation"];

                let pass = true;

                const paramName = Object.keys(validations);
                const paramNameLen = paramName.length;
                let badParams: string[] = [];
                for (let i = 0; i < paramNameLen; i++) {
                    const name = paramName[i];

                    if (name === "output") {
                        // This one isn't part of the validation.
                        continue;
                    }

                    const valid = validations[name];
                    if (valid === false) {
                        pass = false;
                        badParams.push(name);
                    }
                }

                if (pass === false) {
                    if (modalWarning === true) {
                        this.$store.commit("openModal", {
                            title: "Invalid Parameters!",
                            body: "<p>Please correct the following parameter(s) before continuing: <code>" + badParams.join(" ") + "</code></p>"
                        });
                    }
                }

                this.$store.commit("setVar", {
                    name: "vinaParamsValidates",
                    val: pass
                })

                return pass;
            },

            /**
             * Runs after the Vina WASM file is complete.
             * @param  {string} outPdbqtFileTxt  The contents of the Vina output pdbqt file.
             * @param  {string} stdOut           The contents of the Vina standard output.
             * @param  {string} stdErr           The contents of the Vina standard error.
             * @returns void
             */
            afterWASM(outPdbqtFileTxt: string, stdOut: string, stdErr: string): void {
                // Disable some tabs
                this.$store.commit("disableTabs", {
                    "parametersTabDisabled": true,
                    "existingVinaOutputTabDisabled": true,
                    "runningTabDisabled": true,
                    "outputTabDisabled": false,
                    "startOverTabDisabled": false
                });

                // Switch to output tab.
                this.$store.commit("setVar", {
                    name: "tabIdx",
                    val: 3
                });

                this.$store.commit("setVar", {
                    name: "stdOut",
                    val: stdOut
                });
                this.$store.commit("setVar", {
                    name: "outputContents",
                    val: outPdbqtFileTxt
                });

                if (stdErr !== "") {
                    this.showWebinaError(stdErr);
                }

                // Process the standard output (extract scores and rmsds) and
                // frames.
                this.$store.commit("outputToData");

                jQuery("body").removeClass("waiting");
            },

            /**
             * Shows a Webina error.
             * @param  {string} message  The error message.
             * @returns void
             */
            showWebinaError(message: string): void {
                this.$store.commit("openModal", {
                    title: "Webina Error!",
                    body: "<p>Webina returned the following error: <code>" + message + "</code></p>"
                });
            }
        },

        /**
         * Runs when the vue component is mounted.
         * @returns void
         */
        "mounted"() {
            this["webAssemblyAvaialble"] = Utils.webAssemblySupported();
        }
    })
}
