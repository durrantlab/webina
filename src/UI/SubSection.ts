declare var Vue;

export function setup(): void {
    Vue.component('sub-section', {
        "data": function() {
            return {}
        },
        "computed": {},
        "template": `
            <b-card :title="title" class="mb-4">
                <b-card-text style="margin-top: 16px;">
                    <slot></slot>
                </b-card-text>
            </b-card>
        `,
        "props": {
            "title": String
        }
    })
}
