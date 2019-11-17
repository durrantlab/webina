// This file is part of Webina, released under the Apache 2.0 License. See
// LICENSE.md or go to https://opensource.org/licenses/Apache-2.0 for full
// details. Copyright 2019 Jacob D. Durrant.


declare var Vue;

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
        "data"() {
            return {
                "msg": "",
                msgIdx: 0,
                // msgs: [
                //     "Running Webina...",
                //     "Positioning small molecule...",
                //     "Calculating predicted binding affinity...",
                //     "Generating ligand poses...",
                //     "Docking molecule..."
                // ]
            }
        },
        "methods": {
            // setMsg() {
            //     this.msgIdx = (this.msgIdx + 1) % (this.msgs.length);
            //     this["msg"] = this.msgs[this.msgIdx];
            // }
        },
        "mounted"() {
            // this.setMsg();
            // setInterval(() => {
            //     this.setMsg();
            // }, 3000);
        }
    })
}
