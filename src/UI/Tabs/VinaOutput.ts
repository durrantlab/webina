// This file is part of Webina, released under the Apache 2.0 License. See
// LICENSE.md or go to https://opensource.org/licenses/Apache-2.0 for full
// details. Copyright 2019 Jacob D. Durrant.


declare var Vue;
declare var FileSaver;

export function setup(): void {
    Vue.component('vina-output', {
        "template": `
            <div>
                <sub-section title="Visualization">
                    <form-group
                        label=""
                        id="input-group-receptor-3dmol"
                        description=""
                    >
                        <threedmol :autoLoad="true" type="docked" :proteinSurface="true"></threedmol>
                    </form-group>
                    <results-table></results-table>
                    <p class="text-center mb-0">Execution time: {{time}} seconds</p>
                </sub-section>

                <sub-section title="Output Files">
                    <form-group v-if="stdOut !== ''"
                        label="Standard Output"
                        id="input-group-standard-output"
                        description="Webina's standard output, including the docking scores and RMSD values."
                        :labelToLeft="false"
                    >
                        <b-form-textarea
                            readonly
                            id="textarea"
                            v-model="stdOut"
                            placeholder="Standard Output"
                            rows="3"
                            max-rows="6"
                            style="white-space: pre;"
                            class="text-monospace"
                            size="sm"
                        ></b-form-textarea>
                        <form-button :small="true" @click.native="stdOutDownload">Download</form-button>
                    </form-group>

                    <form-group
                        label="Output PDBQT File"
                        id="input-group-standard-output"
                        description="Webina's output file with the docked ligand poses."
                        :labelToLeft="false"
                    >
                        <b-form-textarea
                            readonly
                            id="textarea"
                            v-model="outputContents"
                            placeholder="Standard Output"
                            rows="3"
                            max-rows="6"
                            style="white-space: pre;"
                            class="text-monospace"
                            size="sm"
                        ></b-form-textarea>
                        <form-button :small="true" @click.native="vinaOutputContentsDownload">Download</form-button>
                    </form-group>
                </sub-section>

                <vina-commandline></vina-commandline>
            </div>
        `,
        "props": {},
        "computed": {
            "stdOut"(): string {
                return this.$store.state["stdOut"];
            },
            "outputContents"(): string {
                return this.$store.state["outputContents"];
            },
            "time"(): string {
                return this.$store.state["time"].toString();
            }
        },
        "data"() {
            return {}
        },
        "methods": {
            "stdOutDownload"(): void {
                var blob = new Blob([this["stdOut"]], {type: "text/plain;charset=utf-8"});
                FileSaver.saveAs(blob, "stdout.txt");
            },

            "vinaOutputContentsDownload"(): void {
                var blob = new Blob([this["outputContents"]], {type: "text/plain;charset=utf-8"});
                FileSaver.saveAs(blob, "webina_out.pdbqt");
            }
        },
        "mounted"() { return; }
    })
}
