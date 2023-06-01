// This file is part of Webina, released under the Apache 2.0 License. See
// LICENSE.md or go to https://opensource.org/licenses/Apache-2.0 for full
// details. Copyright 2020 Jacob D. Durrant.


declare let Vue: any;

/** An object containing the vue-component computed functions. */
let computedFunctions = {
    /**
     * Determine which class to add to this button.
     * @returns string  The classes.
     */
    "classToUse"(): string {
        let classes = [this["cls"]];
        // @ts-ignore
        if (this["small"] === true) {
            classes.push("download-button float-right ml-1");
        }
        return classes.join(" ");
    },

    /**
     * Determine which button size to use.
     * @returns string  The size.
     */
    "sizeToUse"(): string {
        // @ts-ignore
        if (this["small"] === true) {
            return "sm";
        }
        return "";
    }
}

/**
 * Setup the form-button Vue commponent.
 * @returns void
 */
export function setup(): void {
    Vue.component('form-button', {
        /**
         * Get the data associated with this component.
         * @returns any  The data.
         */
        "data": function() {
            return {}
        },
        "computed": computedFunctions,
        "template": `
            <b-button :pill="small" :size="sizeToUse" :class="classToUse" :variant="variant"><slot></slot></b-button>
        `,
        "props": {
            "variant": String,
            "cls": String,
            "small": {
                type: Boolean,
                default: false
            }
        }
    })
}
