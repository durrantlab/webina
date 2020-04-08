// This file is part of Webina, released under the Apache 2.0 License. See
// LICENSE.md or go to https://opensource.org/licenses/Apache-2.0 for full
// details. Copyright 2020 Jacob D. Durrant.


declare var Vue;

/**
 * Setup the draw-smiles-modal Vue commponent.
 * @returns void
 */
export function setup(): void {
    Vue.component('draw-smiles-modal', {
        "computed": {
            "drawSmilesModalShow": {
                /**
                 * Get the drawSmilesModalShow value..
                 * @returns boolean
                 */
                get(): boolean {
                    return this.$store.state["drawSmilesModalShow"];
                },

                /**
                 * Set the drawSmilesModalShow value.
                 * @param  {boolean} val  The new value.
                 * @returns void
                 */
                set(val: boolean): void {
                    this.$store.commit("setVar", {
                        name: "drawSmilesModalShow",
                        val
                    });
                }
            },
        },
        "methods": {
            "startConversion"() {
                this.$store.commit("setVar", {
                    name: "convertFileExt",
                    val: "smi"
                });
                this.$store.commit("setVar", {
                    name: "convertFileType",
                    val: "ligand"
                });
                this.$store.commit("setVar", {
                    name: "convertFile",
                    val: this["smiles"]
                });
                this.$store.commit("setVar", {
                    name: "convertFileModalShow",
                    val: true
                });
            },
            "cancelPressed"() {
                alert("cancel");
            }
        },
        "data"(): any {
            return {
                "smiles": ""
            }
        },
        "template": `
            <b-modal
              ok-title="Convert to PDBQT" v-model="drawSmilesModalShow"
              id="draw-structure-modal" title="Draw Ligand Structure"
              @ok="startConversion" @cancel="cancelPressed">
                <p class="my-4">
                    <!-- <h4>Step 1: Draw Your Ligand</h4>
                    <p>
                        Draw your small-molecule ligand using <a href="https://pubchem.ncbi.nlm.nih.gov/edit3/index.html" target="_blank">PubChem Sketcher</a>, provided by the U.S. National Institute of Health:
                    </p> -->
                        <iframe style="border:0; width:100%; height:450px; margin-left:auto; margin-right:auto; display:block;" src="mol_editor/index.html"></iframe>

                    <!--
                    <br />

                    <h4>Step 2: Paste the SMILES String</h4>
                    <p>
                        Paste the SMILES string displayed at the top of the editor into this text field:
                    </p>

                    <form-group
                        id="smiles-string-group"
                    >
                        <b-form-input
                            id="smiles-string"
                            name="smiles-string"
                            v-model="smiles"
                            type="text"
                            :required="true"
                            placeholder="Paste SMILES string here (e.g., C1CCCCC1)..."
                        ></b-form-input>
                        <!-- <small v-if="!isValid" alert tabindex="-1" class="text-danger form-text" v-html="invalidMsg"></small> -->
                    </form-group>

                    <h4>Step 3: Convert Your Ligand to PDBQT</h4>
                    <p>
                        Click the "Convert to PDBQT" button to open the convert-molecule dialog.
                    </p>-->

                </p>
            </b-modal>`,
        "props": {}
    })
}
