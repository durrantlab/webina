// This file is part of Webina, released under the Apache 2.0 License. See
// LICENSE.md or go to https://opensource.org/licenses/Apache-2.0 for full
// details. Copyright 2019 Jacob D. Durrant.


import * as Store from "../Vue/Store";
import * as Utils from "../Utils";

declare var Vue;

export function setup(): void {
    new Vue({
        "el": '#app',
        "store": Store.store,
        "template": `
            <div class="container-fluid">
                <open-modal></open-modal>
                <div id="no-mobile">
                    <b-jumbotron class="jumbo" header="Webina" lead="AutoDock Vina Ported to WebAssembly">
                        <p>Webina is not designed to work on mobile phones. Please use a device with a larger screen.</p>
                    </b-jumbotron>
                </div>

                <b-jumbotron class="jumbo" style="background-image:url(${Utils.curPath()}webina_logo.jpg);" header="Webina" lead="AutoDock Vina Ported to WebAssembly">
                    <p>Brought to you by the Durrant Lab.</p>
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
        "data"() {
            return {
                "receptorFile": false,
                "ligandFile": false
            }
        },
        "computed": {
            "tabIdx": {
                get() {
                    return this.$store.state["tabIdx"];
                },
                set(val: number) {
                    this.$store.commit("setVar", {
                        name: "tabIdx",
                        val: val
                    });
                }
            },
            "parametersTabDisabled"(): boolean {
                return this.$store.state["parametersTabDisabled"];
            },
            "runningTabDisabled"(): boolean {
                return this.$store.state["runningTabDisabled"];
            },
            "outputTabDisabled"(): boolean {
                return this.$store.state["outputTabDisabled"];
            },
            "existingVinaOutputTabDisabled"(): boolean {
                return this.$store.state["existingVinaOutputTabDisabled"];
            },
            "startOverTabDisabled"(): boolean {
                return this.$store.state["startOverTabDisabled"];
            }
        },

        "methods": {},
        "mounted"() {
            // Also add image to the jumbotron. Doing it here instead of in css
            // because otherwise doesn't work when you put webina in a subdirectory.
            // let t = jQuery(".jumbo");
            // t.css("color", "red");
            // console.log(t.css("color"))
            // // debugger;
            // jQuery(".jumbo").css("background-image", "webina_logo.jpg");


            window["$store"] = this.$store;  // For debugging
        }
    })
}

// <b-tab title="Convert to PDBQT"> <!--  :disabled="tabIdxForDisable < 1"> -->
// <b-card-text>
//     <p>Open Babel convert to PDBQT if necessary here? Or maybe a modal...?</p>
// </b-card-text>
// </b-tab>
