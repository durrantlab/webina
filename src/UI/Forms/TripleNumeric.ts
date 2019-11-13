declare var Vue;

export function setup(): void {
    Vue.component('triple-numeric-input', {
        "data": function() {
            return {}
        },
        "computed": {},
        "template": `
            <form-group
                :label="label"
                :id="'input-group-' + id1 + '-' + id2 + '-' + id3"
                :style="styl"
                :description="description"
                v-if="!hide"
            >
                <div class="bv-example-row container-fluid">
                    <b-row>
                        <b-col style="padding-left: 0;">
                            <numeric-input
                                :id="id1"
                                description=""
                                placeholder="Missing X value..."
                                required
                                :formGroupWrapper="false"
                                :min="min"
                            ></numeric-input>
                        </b-col>

                        <b-col style="">
                            <numeric-input
                                :id="id2"
                                description=""
                                placeholder="Missing Y value..."
                                required
                                :formGroupWrapper="false"
                                :min="min"
                            ></numeric-input>
                        </b-col>

                        <b-col style="padding-right: 0;">
                            <numeric-input
                                :id="id3"
                                description=""
                                placeholder="Missing Z value..."
                                required
                                :formGroupWrapper="false"
                                :min="min"
                            ></numeric-input>
                        </b-col>
                    </b-row>
                </div>

            </form-group>
        `,
        "props": {
            "hide": Boolean,
            "label": String,
            "id1": String,
            "id2": String,
            "id3": String,
            "styl": String,
            "description": String,
            "min": {
                "type": Number,
                "default": undefined
            }
        },
        "methods": {}
    })
}