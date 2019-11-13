declare var Vue;

export function setup(): void {
    Vue.component('numeric-input', {
        "data": function() {
            return {
                "invalidMsg": "This field is required."
            }
        },
        "computed": {
            "val": {
                get() {
                    return this.$store.state["vinaParams"][this["id"]];
                },
                set(val) {
                    // Save the value to the store
                    val = (val === "") ? undefined : +val;
                    if (isNaN(val)) {
                        val = undefined;
                    }
                    this.$store.commit("setVinaParam", {
                        name: this["id"],
                        val: val
                    });

                    // Determine if it is valid. First, make sure there's
                    // something here if its required.
                    let valid = true;
                    let scoreOnly = this.$store.state["vinaParams"]["score_only"];
                    if ((this["required"] === true) && (scoreOnly !== true)) {
                        this["invalidMsg"] = "This field is required.";
                        valid = val !== undefined;
                    }

                    // Check if min or max requirements met.
                    if ((valid === true) && (this["min"] !== undefined) && (this["min"] > val)) {
                        this["invalidMsg"] = "Value must be &ge; " + this["min"].toString() + ".";
                        valid = false;
                    }

                    if ((valid === true) && (this["max"] !== undefined) && (this["max"] < val)) {
                        this["invalidMsg"] = "Value must be &le; " + this["max"].toString() + ".";
                        valid = false;
                    }

                    this.$store.commit("setValidationParam", {
                        name: this["id"],
                        val: valid
                    });
                }
            },
            "desc"(): string {
                let toAdd = "";
                if ((this["required"] !== true) && (this["default"] === undefined)) {
                    toAdd = " (Leave blank to use default value.)";
                }
                return this["description"] + toAdd;
            },
            "isValid"(): boolean {
                let val = this.$store.state["validation"][this["id"]];
                return val;
            }
        },
        "template": `
            <form-group
                :label="label"
                :id="'input-group-' + id"
                :style="styl"
                :description="desc"
                :formGroupWrapper="formGroupWrapper"
            >
                <b-form-input
                    :id="id"
                    :name="id"
                    v-model="val"
                    type="number"
                    :required="required"
                    :placeholder="placeholder"
                    :class="{ 'is-invalid': !isValid }"
                    :min="min" :max="max"
                ></b-form-input>
                <small v-if="!isValid" alert tabindex="-1" class="text-danger form-text" v-html="invalidMsg"></small>
            </form-group>
        `,
        "props": {
            "label": String,
            "id": String,
            "description": String,
            "placeholder": String,
            "required": Boolean,
            "styl": String,
            "default": Number,
            "formGroupWrapper": {
                "type": Boolean,
                "default": true
            },
            "min": {
                "type": Number,
                "default": undefined
            },
            "max": {
                "type": Number,
                "default": undefined
            }
        },
        "mounted"() {
            // Always start by assuming it validates fine.
            if (this.$store.state["validation"][this["id"]] === undefined) {
                this.$store.commit("setValidationParam", {
                    name: this["id"],
                    val: !this["required"]
                });
            }

            // Set value if it is given.
            if (this["default"] !== undefined) {
                this.$store.commit("setVinaParam", {
                    name: this["id"],
                    val: this["default"]
                });
            }
        }
    })
}
