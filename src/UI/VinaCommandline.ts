// This file is part of Webina, released under the Apache 2.0 License. See
// LICENSE.md or go to https://opensource.org/licenses/Apache-2.0 for full
// details. Copyright 2020 Jacob D. Durrant.

declare var Vue;

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
        "computed": {
            /**
             * Determines whether the provided vina parameters validate.
             * @returns boolean  True if the validate, false otherwise.
             */
            "vinaParamsValidate"(): boolean {
                return this.$store.state["vinaParamsValidates"];
            },

            /**
             * Generates a mock vina command line.
             * @returns string  The mock command line.
             */
            "commandlineStr"(): string {
                if (this.vinaParamsValidate === false) {
                    return "First fix parameter problems above..."
                } else {
                    let params = this.$store.state["vinaParams"];

                    const paramNames = Object.keys(params);
                    const paramNamesLen = paramNames.length;
                    const keyValPairs = [];
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
                           "--receptor " + this.$store.state["receptorFileName"] + " " +
                           "--ligand " + this.$store.state["ligandFileName"] +
                           cmdStr;
                }
            }
        },
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
                </form-group>
            </sub-section>
        `,
        "props": {}
    })
}
