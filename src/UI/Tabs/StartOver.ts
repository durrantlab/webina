// This file is part of Webina, released under the Apache 2.0 License. See
// LICENSE.md or go to https://opensource.org/licenses/Apache-2.0 for full
// details. Copyright 2019 Jacob D. Durrant.


declare var Vue;

export function setup(): void {
    Vue.component('start-over', {
        "template": `
            <div class="text-center">
                <b-alert show variant="warning">If you start over, your existing data will be deleted. Proceed only if you have already saved your data using the "Download" button(s) in the "Output" tab.</b-alert>
                <form-button @click.native="onSubmitClick" variant="primary">Start Over</form-button>
            </div>
        `,
        "props": {},
        "computed": {},
        "data"() {
            return {}
        },
        "methods": {
            "onSubmitClick"(): void {
                jQuery("body").addClass("waiting");
                location.reload();
            }
        },
        "mounted"() {}
    })
}
