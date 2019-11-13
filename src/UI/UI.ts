import * as Store from "../Vue/Store";

declare var Vue;

export function setup(): void {
    new Vue({
        "el": '#app',
        "store": Store.store,
        "template": `
            <div class="container-fluid">
                <open-modal></open-modal>
                <div id="no-mobile">
                    <b-jumbotron header="Webina" lead="AutoDock Vina Ported to WebAssembly">
                        <p>Webina is not designed to work on mobile phones. Please use a device with a larger screen.</p>
                    </b-jumbotron>
                </div>

                <b-jumbotron header="Webina" lead="AutoDock Vina Ported to WebAssembly">
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
            window["$store"] = this.$store;  // For debugging
        }
    })
}

// <b-tab title="Convert to PDBQT"> <!--  :disabled="tabIdxForDisable < 1"> -->
// <b-card-text>
//     <p>Open Babel convert to PDBQT if necessary here? Or maybe a modal...?</p>
// </b-card-text>
// </b-tab>
