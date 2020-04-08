// This file is part of Webina, released under the Apache 2.0 License. See
// LICENSE.md or go to https://opensource.org/licenses/Apache-2.0 for full
// details. Copyright 2020 Jacob D. Durrant.


import * as Store from "../Vue/Store";
import * as Utils from "../Utils";
import { VERSION } from "../Version";

declare var Vue;

/**
 * Setup the main Vue app.
 * @returns void
 */
export function setup(): void {
    new Vue({
        "el": '#app',
        "store": Store.store,
        "template": `
            <div class="container-fluid">
                <open-modal></open-modal>
                <convert-file-modal></convert-file-modal>
                <draw-smiles-modal></draw-smiles-modal>
                <div id="no-mobile">
                    <b-jumbotron class="jumbo" header="Webina ${VERSION}" lead="AutoDock Vina Ported to WebAssembly">
                        <p>Webina ${VERSION} is not designed to work on mobile phones. Please use a device with a larger screen.</p>
                    </b-jumbotron>
                </div>

                <b-jumbotron class="jumbo" style="background-image:url(${Utils.curPath()}webina_logo.jpg);" header="Webina ${VERSION}" lead="AutoDock Vina Ported to WebAssembly">
                    <p>Brought to you by the <a target="_blank" href="http://durrantlab.com">Durrant Lab</a>.</p>
                    <b-button variant="primary" target="_blank" href="http://durrantlab.com">More Info</b-button>
                </b-jumbotron>

                <b-card no-body class="mb-3">
                    <b-tabs v-model="tabIdx" card fill pills vertical content-class="mt-3"> <!-- vertical -->
                        <b-tab title="Input Parameters" active :disabled="parametersTabDisabled">
                            <b-card-text>
                                <vina-params></vina-params>
                            </b-card-text>
                        </b-tab>
                        <b-tab title="Existing Vina Output" :disabled="existingVinaOutputTabDisabled">
                            <b-card-text>
                                <vina-existing-output></vina-existing-output>
                            </b-card-text>
                        </b-tab>
                        <b-tab title="Running Webina" :disabled="runningTabDisabled">
                            <b-card-text>
                                <vina-running></vina-running>
                            </b-card-text>
                        </b-tab>
                        <b-tab title="Output" :disabled="outputTabDisabled">
                            <b-card-text>
                                <vina-output></vina-output>
                            </b-card-text>
                        </b-tab>
                        <b-tab title="Start Over" :disabled="startOverTabDisabled">
                            <b-card-text>
                                <start-over></start-over>
                            </b-card-text>
                        </b-tab>
                    </b-tabs>
                </b-card>
            </div>
        `,

        /**
         * Get the data associated with this component.
         * @returns any  The data.
         */
        "data"() {
            return {
                "receptorFile": false,
                "ligandFile": false
            }
        },
        "computed": {
            "tabIdx": {
                /**
                 * Get the tabIdx.
                 * @returns number
                 */
                get(): number {
                    return this.$store.state["tabIdx"];
                },

                /**
                 * Set the tabIdx value.
                 * @param  {number} val  The new value.
                 * @returns void
                 */
                set(val: number): void {
                    this.$store.commit("setVar", {
                        name: "tabIdx",
                        val: val
                    });
                }
            },

            /**
             * Determine whether the parameters tab is disabled.
             * @returns boolean  True if it is disabled, false otherwise.
             */
            "parametersTabDisabled"(): boolean {
                return this.$store.state["parametersTabDisabled"];
            },

            /**
             * Determine whether the running tab is disabled.
             * @returns boolean  True if it is disabled, false otherwise.
             */
            "runningTabDisabled"(): boolean {
                return this.$store.state["runningTabDisabled"];
            },

            /**
             * Determine whether the output tab is disabled.
             * @returns boolean  True if it is disabled, false otherwise.
             */
            "outputTabDisabled"(): boolean {
                return this.$store.state["outputTabDisabled"];
            },

            /**
             * Determine whether the existing vina output tab is disabled.
             * @returns boolean  True if it is disabled, false otherwise.
             */
            "existingVinaOutputTabDisabled"(): boolean {
                return this.$store.state["existingVinaOutputTabDisabled"];
            },

            /**
             * Determine whether the start over tab is disabled.
             * @returns boolean  True if it is disabled, false otherwise.
             */
            "startOverTabDisabled"(): boolean {
                return this.$store.state["startOverTabDisabled"];
            }
        },

        "methods": {},

        /**
         * Runs when the vue component is mounted.
         * @returns void
         */
        "mounted"() {
            // window["$store"] = this.$store;  // For debugging
        }
    })
}
