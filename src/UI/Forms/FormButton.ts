// This file is part of Webina, released under the Apache 2.0 License. See
// LICENSE.md or go to https://opensource.org/licenses/Apache-2.0 for full
// details. Copyright 2019 Jacob D. Durrant.


declare var Vue;

export function setup(): void {
    Vue.component('form-button', {
        "data": function() {
            return {}
        },
        "computed": {
            "classToUse"(): string {
                let classes = [this["cls"]];
                if (this["small"] === true) {
                    classes.push("download-button float-right ml-1");
                }
                return classes.join(" ");
            },
            "sizeToUse"(): string {
                if (this["small"] === true) {
                    return "sm";
                }
                return "";
            }
        },
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
