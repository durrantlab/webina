// This file is part of Webina, released under the Apache 2.0 License. See
// LICENSE.md or go to https://opensource.org/licenses/Apache-2.0 for full
// details. Copyright 2019 Jacob D. Durrant.


declare var Vue;

export function setup(): void {
    Vue.component('check-box', {
        "data": function() {
            return {}
        },
        "computed": {
            "val": {
                get() {
                    return this.$store.state["vinaParams"][this["id"]];
                },
                set(val) {
                    this.$store.commit("setVinaParam", {
                        name: this["id"],
                        val: val
                    });
                }
            },
            "desc"() {
                return this["description"] + (this["required"] !== true ? " (Leave blank to use default value.)" : "");
            }
        },
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
