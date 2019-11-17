// This file is part of Webina, released under the Apache 2.0 License. See
// LICENSE.md or go to https://opensource.org/licenses/Apache-2.0 for full
// details. Copyright 2019 Jacob D. Durrant.


// There are a few variables and functions from vina.js that I want to easily
// access from here.

let VERSION = "XXXXXXXXXXXXX.X"  // Replaced by compile script.
console.log("Webina JavaScript Library " + VERSION);

var WEBINA_Module: any

interface IVinaParams {
    receptor?: string;
    ligand?: string;
    center_x: number;
    center_y: number;
    center_z: number;
    size_x: number;
    size_y: number;
    size_z: number;
    local_only?: boolean;
    score_only?: boolean;
    randomize_only?: boolean;
    cpu?: number;
    exhaustiveness?: number;
    seed?: number;
    num_modes?: number;
    energy_range?: number;
    weight_gauss1?: number;
    weight_gauss2?: number;
    weight_repulsion?: number;
    weight_hydrophobic?: number;
    weight_hydrogen?: number;
    weight_rot?: number;
}

// A shiv for decodeBase64.
var decodeBase64 = "function" == typeof atob ? atob : function(r) {
    var e, t, a, i, n, o, f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        m = "",
        s = 0;
    for (r = r.replace(/[^A-Za-z0-9\+\/\=]/g, ""); e = f.indexOf(r.charAt(s++)) << 2 | (i = f.indexOf(r.charAt(s++))) >> 4, t = (15 & i) << 4 | (n = f.indexOf(r.charAt(s++))) >> 2, a = (3 & n) << 6 | (o = f.indexOf(r.charAt(s++))), m += String.fromCharCode(e), 64 !== n && (m += String.fromCharCode(t)), 64 !== o && (m += String.fromCharCode(a)), s < r.length;)
    return m
};

// Make Webina global namespace.
let Webina = (function() {
    return {
        WEBINA_ENVIRONMENT_IS_NODE: window["WEBINA_ENVIRONMENT_IS_NODE"],
        WEBINA_lengthBytesUTF8: window["WEBINA_lengthBytesUTF8"],
        WEBINA_stringToUTF8Array: window["WEBINA_stringToUTF8Array"],
        WEBINA_assert: window["WEBINA_assert"],
        WEBINA_ASSERTIONS: 1,
        WEBINA_DATA_URI_PREFIX: "data:application/octet-stream;base64,",
        WEBINA_BASE_URL: "./",
        FS: window["FS"],

        start: function start(vinaParams: IVinaParams, receptorPDBQTTxt: string, ligandPDBQTTxt: string, onDone?: any, onError?: any, baseUrl?: string): void {

            if (baseUrl !== undefined) {
                if (baseUrl.slice(baseUrl.length - 1) !== "/") {
                    baseUrl += "/";
                }
                this.WEBINA_BASE_URL = baseUrl;
                console.log("Webina: Using baseUrl = " + baseUrl);
            } else {
                console.warn("Webina: No baseUrl specified, so using the main directory ./")
            }

            if (onError === undefined) {
                onError = () => {
                    console.log("Webina encountered an error! Does your browser support WebAssembly?");
                }
            }

            // Create a module object for WASM.
            WEBINA_Module = {
                "preRun": [],
                "postRun": [],
                "stdOut": "",
                "stdErr": "",
                "print": function() {
                    return function(e) {
                            1 < arguments.length && (
                                e = Array.prototype.slice.call(arguments).join(" ")
                            ),
                            window["WEBINA_Module"]["stdOut"] += e + "\n"
                        }
                }(),
                "printErr": function(e) {
                    // 1 < arguments.length && (e = Array.prototype.slice.call(arguments).join(" ")), console.error(e)
                    1 < arguments.length && (
                        e = Array.prototype.slice.call(arguments).join(" ")
                    ),
                    window["WEBINA_Module"]["stdErr"] += e + "\n"
                },
                "setStatus": (e) => {
                    if (e === "") {
                        // This happens when it is done running.
                        if (onDone !== undefined) {
                            let outTxt: string = new TextDecoder("utf-8").decode(
                                window["FS"]["readFile"]('ligand_out.pdbqt')
                            );
                            let stdOut: string = window["WEBINA_Module"]["stdOut"];
                            let stdErr: string = window["WEBINA_Module"]["stdErr"];
                            onDone(outTxt, stdOut, stdErr);
                        }
                    }
                },
                "onError": onError,
                "catchError": (n) => {
                    onError(n);
                    // throw n;  // Don't throw the errr. You're catching it now.
                },
                "receptorPDBQTTxt": receptorPDBQTTxt,
                "ligandPDBQTTxt": ligandPDBQTTxt
            };

            // Initialize the memory
            let memoryInitializer = this.WEBINA_BASE_URL + "vina.html.mem";
            memoryInitializer = WEBINA_Module["locateFile"] ? WEBINA_Module["locateFile"](memoryInitializer, "") : memoryInitializer, WEBINA_Module["memoryInitializerRequestURL"] = memoryInitializer;

            let meminitXHR = WEBINA_Module["memoryInitializerRequest"] = new XMLHttpRequest;
            meminitXHR.open("GET", memoryInitializer, !0), meminitXHR.responseType = "arraybuffer", meminitXHR.send(null);

            if (vinaParams["receptor"] !== undefined) {
                console.warn("Webina does not support Vina's --receptor parameter. Instead, pass the content of the receptor file as a string to the webina.start() function.");
            }

            if (vinaParams["receptor"] !== undefined) {
                console.warn("Webina does not support Vina's --ligand parameter. Instead, pass the content of the ligand file as a string to the webina.start() function.");
            }

            // Receptor and ligand files are always the same.
            WEBINA_Module['arguments'] = [
                '--receptor', '/receptor.pdbqt',
                '--ligand', '/ligand.pdbqt',
            ];

            // For some reason, WebAssembly always uses one more processor
            // than specified. Compensate for that here. But sometimes it
            // doesn't, so commenting out... Confusing.
            // if ((vinaParams["cpu"] !== undefined) && (vinaParams["cpu"] > 1)) {
            //     vinaParams["cpu"] = vinaParams["cpu"] - 1;
            // }

            // Add in the remaining values. Note that there is no validation here.
            const paramNames = Object.keys(vinaParams);
            const paramNamesLen = paramNames.length;
            for (let i = 0; i < paramNamesLen; i++) {
                const key = paramNames[i];
                const val = vinaParams[key];
                WEBINA_Module['arguments'].push('--' + key);

                if (typeof(val) !== "boolean") {
                    WEBINA_Module['arguments'].push(String(val));
                }
            }

            window["WEBINA_Module"] = WEBINA_Module;

            var script = document.createElement("script");
            script.src = this.WEBINA_BASE_URL + "vina.js";
            document.body.appendChild(script)
        },

        isDataURI: function(r) {
            return String.prototype.startsWith ? r.startsWith(this.WEBINA_DATA_URI_PREFIX) : 0 === r.indexOf(this.WEBINA_DATA_URI_PREFIX)
        },

        intArrayFromBase64: function (e) {
            if ("boolean" == typeof this.WEBINA_ENVIRONMENT_IS_NODE && this.WEBINA_ENVIRONMENT_IS_NODE) {
                var t;
                try {
                    t = Buffer.from(e, "base64")
                } catch (r) {
                    t = new Buffer(e, "base64")
                }
                return new Uint8Array(t.buffer, t.byteOffset, t.byteLength)
            }
            try {
                for (var r = decodeBase64(e), a = new Uint8Array(r.length), i = 0; i < r.length; ++i) a[i] = r.charCodeAt(i);
                return a
            } catch (r) {
                throw new Error("Converting base64 string to bytes failed.")
            }
        },

        // Not used?
        tryParseAsDataURI: function (r) {
            if (this.isDataURI(r)) return this.intArrayFromBase64(r.slice(this.WEBINA_DATA_URI_PREFIX.length))
        },

        // Not used?
        intArrayFromString: function (r, e, t) {
            var a = 0 < t ? t : this.WEBINA_lengthBytesUTF8(r) + 1,
                i = new Array(a),
                n = this.WEBINA_stringToUTF8Array(r, i, 0, i.length);
            return e && (i.length = n), i
        },

        // Not used?
        intArrayToString: function (r) {
            for (var e = [], t = 0; t < r.length; t++) {
                var a = r[t];
                255 < a && (this.WEBINA_ASSERTIONS && this.WEBINA_assert(!1, "Character code " + a + " (" + String.fromCharCode(a) + ")  at offset " + t + " not in 0x00-0xFF."), a &= 255), e.push(String.fromCharCode(a))
            }
            return e.join("")
        }
    };
})();
