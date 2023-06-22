// This file is part of Webina, released under the Apache 2.0 License. See
// LICENSE.md or go to https://opensource.org/licenses/Apache-2.0 for full
// details. Copyright 2020 Jacob D. Durrant.

import { store } from "../../Vue/Store";


declare let Vue: any;

/** An object containing the vue-component computed functions. */
let computedFunctions = {
    /** The visibility (boolean, open/closed) of the draw smiles modal. Can
     * both get and set. */
    "drawSmilesModalShow": {
        get(): boolean {
            // @ts-ignore
            return store.state["drawSmilesModalShow"];
        },

        set(val: boolean): void {
            // @ts-ignore
            store.commit("setVar", {
                name: "drawSmilesModalShow",
                val
            });
        }
    },
}

/** An object containing the vue-component methods functions. */
let methodsFunctions = {
    "startConversion"() {
        // Get smiles from widget
        let frameWindow = (document.getElementById("draw-widget") as HTMLIFrameElement)["contentWindow"];
        // @ts-ignore
        let smiles = (<Window>frameWindow)["getSmiles"]();

        store.commit("setVar", {
            name: "convertFileExt",
            val: "smi"
        });
        store.commit("setVar", {
            name: "convertFileType",
            val: "ligand"
        });
        store.commit("setVar", {
            name: "convertFile",
            val: smiles
        });
        store.commit("setVar", {
            name: "convertFileModalShow",
            val: true
        });
        store.commit("setVar", {
            name: "ligandFileName",
            val: "drawn_ligand.pdbqt"
        });
    }
}

/**
 * Setup the draw-smiles-modal Vue commponent.
 * @returns void
 */
export function setup(): void {
    /** Test */
    Vue.component('draw-smiles-modal', {
        /** Computed */
        "computed": computedFunctions,
        "methods": methodsFunctions,
        "data"(): any {
            return {}
        },
        "template": `
            <b-modal
              size="xl" ok-title="Convert to PDBQT" v-model="drawSmilesModalShow"
              id="draw-structure-modal" title="Draw Ligand Structure"
              @ok="startConversion">
                <p class="my-4">
                    <iframe id="draw-widget" style="border:0; width:100%; height:350px; margin-left:auto; margin-right:auto; display:block;" src="mol_editor/index.html"></iframe>
                </p>
            </b-modal>`,
        "props": {}
    })
}
