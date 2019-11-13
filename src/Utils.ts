// For functions that don't really need to be within the Vue framework.

export function getNewObjWithUpdate(obj: any, key: string, val: any): any {
    let newObj = {};
    const keys = Object.keys(obj);
    const keysLen = keys.length;
    for (let i = 0; i < keysLen; i++) {
        const k = keys[i];
        const v = obj[k];
        if ((v !== undefined) && (v !== null) && (!isNaN(v))) {
            newObj[k] = v;
        }
    }
    newObj[key] = val;

    return newObj;
}

export function webAssemblySupported(): boolean {
    // https://stackoverflow.com/questions/47879864/how-can-i-check-if-a-browser-supports-webassembly
    try {
        if (typeof WebAssembly === "object"
            && typeof WebAssembly.instantiate === "function") {
            const module = new WebAssembly.Module(Uint8Array.of(0x0, 0x61, 0x73, 0x6d, 0x01, 0x00, 0x00, 0x00));
            if (module instanceof WebAssembly.Module)
                return new WebAssembly.Instance(module) instanceof WebAssembly.Instance;
        }
    } catch (e) {
    }
    return false;
};

export function isFirefox(): boolean {
    // See https://stackoverflow.com/questions/7000190/detect-all-firefox-versions-in-js
    return navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
}
