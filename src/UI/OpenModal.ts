declare var Vue;

export function setup(): void {
    Vue.component('open-modal', {
        "data": function() {
            return {}
        },
        "computed": {
            "modalShow": {
                get() {
                    return this.$store.state["modalShow"];
                },
                set(val) {
                    this.$store.commit("setVar", {
                        name: "modalShow",
                        val
                    });
                }
            },
            "title"() {
                return this.$store.state["modalTitle"];
            },
            "body"() {
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
