// This file is part of Webina, released under the Apache 2.0 License. See
// LICENSE.md or go to https://opensource.org/licenses/Apache-2.0 for full
// details. Copyright 2020 Jacob D. Durrant.

import { store } from "../../Vue/Store";


declare let Vue: any;

/** An object containing the vue-component computed functions. */
let computedFunctions = {
    /** Gets and sets the vinaParams object. */
    "val": {
        get(): any {
            return store.state["vinaParams"][this["id"]];
        },

        set(val: any): void {
            store.commit("setVinaParam", {
                name: this["id"],
                val: val
            });
        }
    },

    /**
     * Generates a description string.
     * @returns string  The description.
     */
    "desc"(): string {
        return this["description"] + (this["required"] !== true ? " (Leave blank to use default value.)" : "");
    }
}

/**
 * Setup the check-box Vue commponent.
 * @returns void
 */
export function setup(): void {
    Vue.component('check-box', {
        /**
         * Get the data associated with this component.
         * @returns any  The data.
         */
        "data": function() {
            return {}
        },
        "computed": computedFunctions,
        "template": `
            <b-form-checkbox
                :id="id"
                v-model="val"
                :name="id"
                :value="true"
                :unchecked-value="false"
            >
                {{label}}
            </b-form-checkbox>
        `,
        "props": {
            "label": String,
            "id": String,
        }
    })
}
