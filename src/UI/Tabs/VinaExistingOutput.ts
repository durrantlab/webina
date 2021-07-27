// This file is part of Webina, released under the Apache 2.0 License. See
// LICENSE.md or go to https://opensource.org/licenses/Apache-2.0 for full
// details. Copyright 2020 Jacob D. Durrant.


declare var Vue;

/** An object containing the vue-component methods functions. */
let methodsFunctions = {
    /**
     * Runs when the user indicates he or she wants to use example
     * output files rather than provide their own.
     * @returns void
     */
    "useExampleOutputFiles"(): void {
        // These values should now validate.
        let validateVars = ["receptor", "output"];
        const validateVarsLen = validateVars.length;
        for (let i = 0; i < validateVarsLen; i++) {
            const validateVar = validateVars[i];
            this.$store.commit("setValidationParam", {
                name: validateVar,
                val: true
            });
        }

        let promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                this.$store.commit("setVar", {
                    name: "receptorContents",
                    val: this.$store.state["receptorContentsExample"]
                });
                this.$store.commit("setVar", {
                    name: "outputContents",
                    val: this.$store.state["outputContentsExample"]
                });
                this.$store.commit("setVar", {
                    name: "crystalContents",
                    val: this.$store.state["crystalContentsExample"]
                });

                resolve(undefined);
            }, 100);
        })

        this["onSubmitClick"](null, promise);
    },

    /**
     * Runs when the user clicks the submit button.
     * @param  {any}                    e        Not sure what this
     *                                           is.
     * @param  {Promise<any>=undefined} promise  A promise to continue
     *                                           from.
     * @returns void
     */
    "onSubmitClick"(e: any, promise: Promise<any>=undefined): void {
        if (this["validate"]() === true) {
            // Disable some tabs
            this.$store.commit("disableTabs", {
                "parametersTabDisabled": true,
                "runningTabDisabled": true,
                "existingVinaOutputTabDisabled": true,
                "outputTabDisabled": false,
                "startOverTabDisabled": false
            });

            // Switch to that tab.
            Vue.nextTick(() => {
                this.$store.commit("setVar", {
                    name: "tabIdx",
                    val: 3
                });

                if (promise !== undefined) {
                    promise.then(() => {
                        this.$store.commit("outputToData");
                    });
                } else {
                    this.$store.commit("outputToData");
                }
            });
        }
    },

    /**
     * Determines whether valid parameters have been provided.
     * Otherwise, cannot display the mock Vina output.
     * @returns boolean  True if everything is valid, false otherwise.
     */
    "validate"(): boolean {
        let validations = this.$store.state["validation"];

        let badParams = [];
        if (validations["receptor"] === false) {
            badParams.push("receptor");
        }
        if (validations["output"] === false) {
            badParams.push("output");
        }

        let validate = badParams.length === 0;

        if (validate === false) {
            this.$store.commit("openModal", {
                title: "Invalid Parameters!",
                body: "<p>Please correct the following parameter(s) before continuing: <code>" + badParams.join(" ") + "</code></p>"
            });
        }

        return validate;
    },
}

/**
 * Setup the vina-existing-output Vue commponent.
 * @returns void
 */
export function setup(): void {
    Vue.component('vina-existing-output', {
        "template": `
            <b-form>
                <b-card
                    class="mb-2 text-center"
                    style="margin-bottom:1.4rem !important;"
                >
                    <b-card-text>
                        Use this tab if you've already run Webina or Vina and
                        have an existing docked-ligand PDBQT output file.
                    </b-card-text>
                </b-card>

                <sub-section title="Existing Output Files">
                    <file-input
                        label="Receptor"
                        id="receptor"
                        description="The rigid part of the receptor (PDBQT or PDB)."
                        accept=".pdbqt, .pdb"
                    ></file-input>

                    <file-input
                        label="Docked Output"
                        id="output"
                        description="The Webina/Vina output file (PDBQT, OUT, VINA, or TXT) containing docked ligand poses."
                        accept=".pdbqt, .out, .vina, .txt"
                    ></file-input>

                    <file-input
                        label="Correct Pose"
                        id="crystal"
                        :required="false"
                        description="The correct ligand pose, if known from experiment. This PDBQT or PDB file is optional."
                        accept=".pdbqt, .pdb"
                    ></file-input>
                </sub-section>

                <form-button cls="float-right mb-4" @click.native="onSubmitClick" variant="primary">Load Files</form-button>
                <form-button @click.native="useExampleOutputFiles" cls="float-right mr-2">Use Example Files</form-button>
            </b-form>
        `,
        "props": {},
        "computed": {},

        /**
         * Get the data associated with this component.
         * @returns any  The data.
         */
        "data"(): any {
            return {}
        },
        "methods": methodsFunctions
    })
}
