// This file is part of Webina, released under the Apache 2.0 License. See
// LICENSE.md or go to https://opensource.org/licenses/Apache-2.0 for full
// details. Copyright 2019 Jacob D. Durrant.


declare var Vue;

export function setup(): void {
    Vue.component('file-input', {
        "data": function() {
            return {
                "file": false
            }
        },
        "methods": {},
        "template": `
            <form-group
                :label="label"
                :id="'input-group-' + id"
                :description="description"
            >
                <b-form-file
                    v-model="val"
                    :state="Boolean(file)"
                    placeholder="Choose a file or drop it here..."
                    drop-placeholder="Drop file here..."
                    :class="id" :accept="accept"
                    :required="required"
                ></b-form-file>
                <small v-if="(!isValid) && (required === true)" alert tabindex="-1" class="text-danger form-text">{{invalidMsg}}</small>
            </form-group>
        `,
        "props": {
            "label": String,
            "id": String,
            "description": String,
            "invalidMsg": {
                "type": String,
                "default": "This field is required!"
            },
            "required": {
                "type": Boolean,
                "default": true
            },
            "accept": {
                "type": String,
                "default": ".pdbqt, .out, .pdb"
            }
        },
        "computed": {
            "val": {
                get() {
                    return this["file"]
                },
                set(val) {
                    if (val === null) {
                        // Reseting the value. Nothing to do here.
                        return;
                    }

                    // Check if the file extension is ok.
                    let namePts = val["name"].toLowerCase().split(/\./g);
                    let ext = namePts[namePts.length - 1];
                    let acceptableExt = this["accept"].toLowerCase()
                                            .split(/,/g)
                                            .map(e => e.replace(/ /g, "")
                                            .replace(/\./, ""));

                    if (acceptableExt.indexOf(ext) === -1) {
                        // It is not one of the acceptable extensions. Need to
                        // cancel.
                        let msg = "The file must end in ";
                        // acceptableExt = acceptableExt.map(e => "\"" + e + ",\"");
                        if (acceptableExt.length > 1) {
                            acceptableExt[acceptableExt.length - 1] = "or " + acceptableExt[acceptableExt.length - 1];
                        }

                        let okFilesString: string;
                        if (acceptableExt.length > 2) {
                            okFilesString = acceptableExt.join(",\" \"");
                        } else {
                            okFilesString = acceptableExt.join("\" \"");
                        }

                        okFilesString = okFilesString.replace(/"or /g, "or \"");
                        msg += "\"" + okFilesString + ".\" Your file ends in \"" + ext + ".\""

                        this.$store.commit("openModal", {
                            title: "Invalid File Extension!",
                            body: "<p>" + msg + "</p>"
                        });
                        this["file"] = null;
                        return;
                    }

                    this["file"] = val;
                    this.$store.commit("setValidationParam", {
                        name: this["id"],
                        val: true
                    });

                    this.$store.commit("setVar", {
                        name: this["id"] + "FileName",
                        val: val.name
                    });

                    var fr = new FileReader();
                    fr.onload = () => {
                        // @ts-ignore: Not sure why this causes Typescript problems.
                        var data = new Uint8Array(fr.result);
                        this.$store.commit("setVar", {
                            name: this["id"] + "Contents",
                            val: new TextDecoder("utf-8").decode(data)
                        })
                    };
                    fr.readAsArrayBuffer(val);
                }
            },
            "isValid"(): boolean {
                return (this["file"] !== false) && (this["file"] !== null);
            }
        },
        "mounted"() {
            // Make default validation entry.
            if (this.$store.state["validation"][this["id"]] === undefined) {
                this.$store.commit("setValidationParam", {
                    name: this["id"],
                    val: false
                });
            }

            // If it's not required, automatically validate.
            if (this["required"] === false) {
                this.$store.commit("setValidationParam", {
                    name: this["id"],
                    val: true
                });

                jQuery("." + this["id"]).find("input").removeClass("is-invalid");
            }
        }
    })
}
