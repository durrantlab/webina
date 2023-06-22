// This file is part of Webina, released under the Apache 2.0 License. See
// LICENSE.md or go to https://opensource.org/licenses/Apache-2.0 for full
// details. Copyright 2020 Jacob D. Durrant.


declare let Vue: any;

/**
 * Setup the vina-running Vue commponent.
 * @returns void
 */
export function setup(): void {
    Vue.component('vina-running', {
        "template": `
            <div class="text-center">
                <b-spinner style="width: 4rem; height: 4rem;" label="Working"></b-spinner>
                <br /><br />
                <p>Running Webina in your browser. Docking may take some minutes.</p>
                <p>This page may become unresponsive while performing calculations.
                   Need to stop Webina but can't close this tab? Use your browser or
                   operating-system Task Manager.</p>
            </div>
        `,
        "props": {},
        "computed": {},

        /**
         * Get the data associated with this component.
         * @returns any  The data.
         */
        "data"() {
            return {
                "msg": "",
                msgIdx: 0
            }
        },
        "methods": {}
    })
}
