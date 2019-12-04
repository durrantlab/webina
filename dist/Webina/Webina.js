/**
 * Webina Copyright 2019 Jacob Durrant
 *
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// This file is part of Webina, released under the Apache 2.0 License. See
// LICENSE.md or go to https://opensource.org/licenses/Apache-2.0 for full
// details. Copyright 2019 Jacob D. Durrant.
// There are a few variables and functions from vina.js that I want to easily
// access from here.
var VERSION = "1.0.0"; // Replaced by compile script.
console.log("Webina Library " + VERSION);
console.log("    Compiled from Vina 1.1.2 codebase:");
console.log("    http://vina.scripps.edu/");
var WEBINA_Module;
// A shiv for decodeBase64.
var decodeBase64 = "function" == typeof atob ? atob : function (r) {
    var e, t, a, i, n, o, f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", m = "", s = 0;
    for (r = r.replace(/[^A-Za-z0-9\+\/\=]/g, ""); e = f.indexOf(r.charAt(s++)) << 2 | (i = f.indexOf(r.charAt(s++))) >> 4, t = (15 & i) << 4 | (n = f.indexOf(r.charAt(s++))) >> 2, a = (3 & n) << 6 | (o = f.indexOf(r.charAt(s++))), m += String.fromCharCode(e), 64 !== n && (m += String.fromCharCode(t)), 64 !== o && (m += String.fromCharCode(a)), s < r.length;)
        return m;
};
// Make Webina global namespace.
var Webina = (function () {
    return {
        WEBINA_ENVIRONMENT_IS_NODE: window["WEBINA_ENVIRONMENT_IS_NODE"],
        WEBINA_lengthBytesUTF8: window["WEBINA_lengthBytesUTF8"],
        WEBINA_stringToUTF8Array: window["WEBINA_stringToUTF8Array"],
        WEBINA_assert: window["WEBINA_assert"],
        WEBINA_ASSERTIONS: 1,
        WEBINA_DATA_URI_PREFIX: "data:application/octet-stream;base64,",
        WEBINA_BASE_URL: "./",
        FS: window["FS"],
        start: function start(vinaParams, receptorPDBQTTxt, ligandPDBQTTxt, onDone, onError, baseUrl) {
            var _this = this;
            // baseUrl = undefined;  // For debugging.
            var baseUrlMsg = "\nWEBINA\n======\n\n";
            if (baseUrl !== undefined) {
                if (baseUrl.slice(baseUrl.length - 1) !== "/") {
                    baseUrl += "/";
                }
                this.WEBINA_BASE_URL = baseUrl;
                baseUrlMsg += "User specified baseUrl: " + baseUrl + "\n";
            }
            else {
                baseUrlMsg += "No baseUrl specified, so using ./\n\n";
                baseUrlMsg += "Use Webina.start() to specify the baseUrl:\n";
                baseUrlMsg += "    function start(vinaParams, receptorPDBQTTxt, \n";
                baseUrlMsg += "                   ligandPDBQTTxt, onDone, \n";
                baseUrlMsg += "                   onError, baseUrl)\n";
            }
            baseUrlMsg += "\nExpecting files at the following locations:\n";
            for (var i = 0; i < 5; i++) {
                var fileName = ["Webina.min.js", "vina.html.mem",
                    "vina.min.js", "vina.worker.min.js",
                    "vina.wasm"][i];
                baseUrlMsg += "    " + (baseUrl === undefined ? "./" : baseUrl) + fileName + "\n";
            }
            baseUrlMsg += "\n";
            if (baseUrl !== undefined) {
                console.log(baseUrlMsg);
            }
            else {
                console.warn(baseUrlMsg);
            }
            if (onError === undefined) {
                onError = function () {
                    console.log("Webina encountered an error! Does your browser support WebAssembly?");
                };
            }
            // Create a module object for WASM.
            WEBINA_Module = {
                "preRun": [],
                "postRun": [],
                "stdOut": "",
                "stdErr": "",
                "print": function () {
                    return function (e) {
                        1 < arguments.length && (e = Array.prototype.slice.call(arguments).join(" ")),
                            window["WEBINA_Module"]["stdOut"] += e + "\n";
                    };
                }(),
                "printErr": function (e) {
                    // 1 < arguments.length && (e = Array.prototype.slice.call(arguments).join(" ")), console.error(e)
                    1 < arguments.length && (e = Array.prototype.slice.call(arguments).join(" ")),
                        window["WEBINA_Module"]["stdErr"] += e + "\n";
                },
                "setStatus": function (e) {
                    if (e === "") {
                        // This happens when it is done running.
                        if (onDone !== undefined) {
                            var outTxt = new TextDecoder("utf-8").decode(window["FS"]["readFile"]('ligand_out.pdbqt'));
                            var stdOut = window["WEBINA_Module"]["stdOut"];
                            var stdErr = window["WEBINA_Module"]["stdErr"];
                            onDone(outTxt, stdOut, stdErr);
                        }
                    }
                },
                "onError": onError,
                "catchError": function (n) {
                    onError(n);
                    // throw n;  // Don't throw the errr. You're catching it now.
                },
                "receptorPDBQTTxt": receptorPDBQTTxt,
                "ligandPDBQTTxt": ligandPDBQTTxt
            };
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
            var paramNames = Object.keys(vinaParams);
            var paramNamesLen = paramNames.length;
            for (var i = 0; i < paramNamesLen; i++) {
                var key = paramNames[i];
                var val = vinaParams[key];
                WEBINA_Module['arguments'].push('--' + key);
                if (typeof (val) !== "boolean") {
                    WEBINA_Module['arguments'].push(String(val));
                }
            }
            window["WEBINA_Module"] = WEBINA_Module;
            // Initialize the memory
            var memoryInitializer = this.WEBINA_BASE_URL + "vina.html.mem";
            memoryInitializer = WEBINA_Module["locateFile"] ? WEBINA_Module["locateFile"](memoryInitializer, "") : memoryInitializer, WEBINA_Module["memoryInitializerRequestURL"] = memoryInitializer;
            var meminitXHR = WEBINA_Module["memoryInitializerRequest"] = new XMLHttpRequest;
            meminitXHR.onloadend = function () {
                if (meminitXHR.status === 404) {
                    var msg = "Unable to access " + memoryInitializer + ". See JavaScript console for warnings. The \"baseUrl\" variable passed to Webina is likely incorrect.";
                    WEBINA_Module["catchError"]({ "message": msg });
                    console.warn(msg);
                }
                else {
                    var script = document.createElement("script");
                    script.src = _this.WEBINA_BASE_URL + "vina.js";
                    document.body.appendChild(script);
                }
            };
            meminitXHR.open("GET", memoryInitializer, !0);
            meminitXHR.responseType = "arraybuffer";
            meminitXHR.send(null);
        },
        isDataURI: function (r) {
            return String.prototype.startsWith ? r.startsWith(this.WEBINA_DATA_URI_PREFIX) : 0 === r.indexOf(this.WEBINA_DATA_URI_PREFIX);
        },
        intArrayFromBase64: function (e) {
            if ("boolean" == typeof this.WEBINA_ENVIRONMENT_IS_NODE && this.WEBINA_ENVIRONMENT_IS_NODE) {
                var t;
                try {
                    t = Buffer.from(e, "base64");
                }
                catch (r) {
                    t = new Buffer(e, "base64");
                }
                return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
            }
            try {
                for (var r = decodeBase64(e), a = new Uint8Array(r.length), i = 0; i < r.length; ++i)
                    a[i] = r.charCodeAt(i);
                return a;
            }
            catch (r) {
                throw new Error("Converting base64 string to bytes failed.");
            }
        },
        // Not used?
        tryParseAsDataURI: function (r) {
            if (this.isDataURI(r))
                return this.intArrayFromBase64(r.slice(this.WEBINA_DATA_URI_PREFIX.length));
        },
        // Not used?
        intArrayFromString: function (r, e, t) {
            var a = 0 < t ? t : this.WEBINA_lengthBytesUTF8(r) + 1, i = new Array(a), n = this.WEBINA_stringToUTF8Array(r, i, 0, i.length);
            return e && (i.length = n), i;
        },
        // Not used?
        intArrayToString: function (r) {
            for (var e = [], t = 0; t < r.length; t++) {
                var a = r[t];
                255 < a && (this.WEBINA_ASSERTIONS && this.WEBINA_assert(!1, "Character code " + a + " (" + String.fromCharCode(a) + ")  at offset " + t + " not in 0x00-0xFF."), a &= 255), e.push(String.fromCharCode(a));
            }
            return e.join("");
        }
    };
})();
