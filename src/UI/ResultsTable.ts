// This file is part of Webina, released under the Apache 2.0 License. See
// LICENSE.md or go to https://opensource.org/licenses/Apache-2.0 for full
// details. Copyright 2019 Jacob D. Durrant.


declare var Vue;

export function setup(): void {
    Vue.component('results-table', {
        "data": function() {
            return {}
        },
        "computed": {
            "items"(): any[] {
                // let data = [[[1,48.4,0,0],"HETATM    1  C"],[[1,48.4,0,0],"HETATM    1  C"],[[1,48.4,0,0],"HETATM    1  C"]];  //this.$store.state["pdbOutputFrames"];
                let data = this.$store.state["pdbOutputFrames"];
                const dataLen = data.length;
                let items = [];
                let errorDetected = false;
                for (let i = 0; i < dataLen; i++) {
                    const dataItem = data[i][0];  // The info about RMSD and such.
                    if (dataItem !== undefined) {
                        items.push({
                            "mode": dataItem[0],
                            "affinity (kcal/mol)": dataItem[1],
                            "dist from rmsd L.B.": dataItem[2],
                            "dist from rmsd U.B.": dataItem[3]
                        });
                    } else {
                        // The pdbqt didn't have this meta information.
                        errorDetected = true;
                        items.push({
                            "mode": "---",
                            "affinity (kcal/mol)": "---",
                            "dist from rmsd L.B.": "---",
                            "dist from rmsd U.B.": "---",
                        });
                    }
                }
                if (errorDetected === true) {
                    this.$store.commit("openModal", {
                        title: "Output File Invalid!",
                        body: "<p>The output PDBQT file does not appear to be properly formatted.</p>"
                    });
                }
                return items;
            },
            "fields"(): any[] {
                return [
                    {
                        "key": "mode"
                    },
                    {
                        "key": "affinity (kcal/mol)"
                    },
                    {
                        "key": "dist from rmsd L.B."
                    },
                    {
                        "key": "dist from rmsd U.B."
                    }
                ];
            }
        },
        "template": `
            <b-table
                striped hover small
                :items="items"
                :fields="fields"
                @row-clicked="rowClicked">
            </b-table>
        `,
        "props": {},
        "methods": {
            "rowClicked"(data, idx) {
                let ligPDBTxt = this.$store.state["pdbOutputFrames"][idx][1];
                this.$store.commit("setVar", {
                    name: "dockedContents",
                    val: ligPDBTxt
                })
            }
        }
    })
}
