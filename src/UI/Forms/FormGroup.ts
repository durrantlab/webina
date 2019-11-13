declare var Vue;

export function setup(): void {
    Vue.component('form-group', {
        "data": function() {
            return {}
        },
        "computed": {
            hasLabel(): boolean {
                return this["label"] !== "" && this["label"] !== undefined;
            },
            "labelCols"(): number {
                return ((this.hasLabel === true)  && (this["labelToLeft"] === true)) ? 3 : 0;
            },
            "labelColsLg"(): number {
                return ((this.hasLabel === true)  && (this["labelToLeft"] === true)) ? 2 : 0;
            }
        },
        "template": `
            <span>
                <b-form-group
                    v-if="formGroupWrapper"
                    :label-cols="labelCols" :label-cols-lg="labelColsLg"
                    :label="label"
                    :label-for="id"
                    :id="'input-group-' + id"
                    :style="styl"
                >
                    <slot></slot>
                    <small
                        tabindex="-1"
                        :id="'input-group-input-group-' + id + '__BV_description_'"
                        class="form-text text-muted"
                        v-html="description">
                    </small>
                </b-form-group>
                <div v-else>
                    <slot></slot>
                </div>
            </span>
        `,
        "props": {
            "label": String,
            "id": String,
            "styl": String,
            "description": String,
            "formGroupWrapper": {
                "type": Boolean,
                "default": true
            },
            "labelToLeft": {
                "type": Boolean,
                "default": true
            }
        },
        "methods": {}
    })
}
