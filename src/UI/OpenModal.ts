// This file is part of Webina, released under the Apache 2.0 License. See
// LICENSE.md or go to https://opensource.org/licenses/Apache-2.0 for full
// details. Copyright 2019 Jacob D. Durrant.


declare var Vue;

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
        "computed": {
            "modalShow": {
                /**
                 * Get the modalShow value..
                 * @returns boolean
                 */
                get(): boolean {
                    return this.$store.state["modalShow"];
                },

                /**
                 * Set the mmodalShow value.
                 * @param  {boolean} val  The new value.
                 * @returns void
                 */
                set(val: boolean): void {
                    this.$store.commit("setVar", {
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
                return this.$store.state["modalTitle"];
            },

            /**
             * Get's the modal body.
             * @returns string  The body.
             */
            "body"(): string {
                return this.$store.state["modalBody"];
            }
        },
        "template": `
            <b-modal ok-only ok-title="Close" v-model="modalShow" id="msg-modal" :title="title">
                <p class="my-4" v-html="body"></p>
            </b-modal>
        `,
        "props": {}
    })
}
