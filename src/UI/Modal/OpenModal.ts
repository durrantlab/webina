// This file is part of Webina, released under the Apache 2.0 License. See
// LICENSE.md or go to https://opensource.org/licenses/Apache-2.0 for full
// details. Copyright 2023 Jacob D. Durrant.


declare let Vue: any;

/** An object containing the vue-component computed functions. */
let computedFunctions = {
    /** The visibility (boolean, open/closed) of the modal. Can both get and
     * set. */
    "modalShow": {
        get(): boolean {
            // @ts-ignore
            return store.state["modalShow"];
        },

        set(val: boolean): void {
            // @ts-ignore
            store.commit("setVar", {
                name: "modalShow",
                val
            });
        }
    },

    /**
     * Gets the modal title.
     * @returns string  The title.
     */
    "title"(): string {
        // @ts-ignore
        return store.state["modalTitle"];
    },

    /**
     * Get's the modal body.
     * @returns string  The body.
     */
    "body"(): string {
        // @ts-ignore
        return store.state["modalBody"];
    }
}

/**
 * Setup the open-modal Vue commponent.
 * @returns void
 */
export function setup(): void {
    Vue.component('open-modal', {
        /**
         * Get the data associated with this component.
         * @returns any  The data.
         */
        "data": function() {
            return {}
        },
        "computed": computedFunctions,
        "template": `
            <b-modal ok-only :size="size" ok-title="Close" v-model="modalShow" id="msg-modal" :title="title">
                <p class="my-4" v-html="body"><slot></slot></p>
            </b-modal>
        `,
        "props": {
            "size": {
                "type": String,
                "default": "lg"  // could also be xl and sm
            }
        }
    })
}
