// This file is part of Webina, released under the Apache 2.0 License. See
// LICENSE.md or go to https://opensource.org/licenses/Apache-2.0 for full
// details. Copyright 2020 Jacob D. Durrant.


declare var $3Dmol;

declare var Vue;

let bigMolAlreadyModalDisplayed = false;

/** An object containing the vue-component computed functions. */
let computedFunctions = {
    /**
     * Get the value of the receptorContents variable.
     * @returns string  The value.
     */
    "receptorContents"(): string {
        return this.$store.state["receptorContents"];
    },

    /**
     * Get the value of the ligandContents variable.
     * @returns string  The value.
     */
    "ligandContents"(): string {
        return this.$store.state["ligandContents"];
    },

    /**
     * Get the value of the dockedContents variable.
     * @returns string  The value.
     */
    "dockedContents"(): string {
        return this.$store.state["dockedContents"];
    },

    /**
     * Get the value of the crystalContents variable.
     * @returns string  The value.
     */
    "crystalContents"(): string {
        return this.$store.state["crystalContents"];
    },

    /**
     * Get the value of the vinaParams variable.
     * @returns string  The value.
     */
    vinaParams(): string {
        return this.$store.state["vinaParams"];
    },

    /**
     * Get the value of the surfBtnVariant variable.
     * @returns string|boolean  The value.
     */
    "surfBtnVariant"(): string|boolean {
        return (this["renderProteinSurface"] === true) ? undefined : "default";
    },

    /**
     * Get the value of the allAtmBtnVariant variable.
     * @returns string|boolean  The value.
     */
    "allAtmBtnVariant"(): string|boolean {
        return (this["renderProteinSticks"] === true) ? undefined : "default";
    },

    /**
     * Get the value of the crystalBtnVariant variable.
     * @returns string|boolean  The value.
     */
    "crystalBtnVariant"(): string|boolean {
        return (this["renderCrystal"] === true) ? undefined : "default";
    },

    /**
     * Determines whether the appropriate PDB content has been loaded.
     * @returns boolean  True if it has been loaded, false otherwise.
     */
    "appropriatePdbLoaded"(): boolean {
        switch (this["type"]) {
            case "receptor":
                return this.appropriateReceptorPdbLoaded;
            case "ligand":
                return this.appropriateLigandPdbLoaded;
            case "docked":
                return this.appropriateDockedPdbLoaded;
        }
    },

    /**
     * Determines whether the appropriate receptor PDB content has
     * been loaded.
     * @returns boolean  True if it has been loaded, false otherwise.
     */
    appropriateReceptorPdbLoaded(): boolean {
        return this.$store.state["receptorContents"] !== "" || this.$store.state["crystalContents"] !== "";
    },

    /**
     * Determines whether the appropriate ligand PDB content has been
     * loaded.
     * @returns boolean  True if it has been loaded, false otherwise.
     */
    appropriateLigandPdbLoaded(): boolean {
        return this.$store.state["ligandContents"] !== "";
    },

    /**
     * Determines whether the appropriate docked PDB content has been
     * loaded.
     * @returns boolean  True if it has been loaded, false otherwise.
     */
    appropriateDockedPdbLoaded(): boolean {
        return (this.$store.state["receptorContents"] !== "") && (this.$store.state["dockedContents"] !== "")
    }
}

/** An object containing the vue-component methods functions. */
let methodsFunctions = {
    /**
     * Runs when a new model has been added.
     * @param  {number} duration  How long to wait before adding that
     *                            model to 3dmol.js widget.
     * @returns void
     */
    modelAdded(duration: number): void {
        // First, check to make sure the added model is relevant to
        // this 3dmoljs instance.
        if (this["appropriatePdbLoaded"] === false) {
            return;
        }

        // Put app into waiting state.
        jQuery("body").addClass("waiting");
        this["msg"] = "Loading...";

        setTimeout(() => {
            // Initialize the viewer if necessary.
            if (this["viewer"] === undefined) {
                let element = jQuery("#" + this["type"] + "-3dmol");
                let config = {
                    backgroundColor: "white"
                };
                this["viewer"] = $3Dmol.createViewer(element, config);
            }

            let loadPDBTxt = (typeStr: string, callBack: any) => {
                let origPDBContent = this[typeStr + "Contents"];
                let pdb = pdbqtToPDB(origPDBContent, this.$store);
                if (pdb !== "") {
                    if (this[typeStr + "PdbOfLoaded"] !== pdb) {
                        // console.log(this["type"], "Adding " + typeStr, pdb.length);
                        this[typeStr + "PdbOfLoaded"] = pdb;

                        let prevModel = this[typeStr + "Mol"];
                        if (prevModel !== undefined) {
                            this["viewer"].removeModel(prevModel);
                        }
                        this["viewer"].resize();

                        this[typeStr + "Mol"] = this["viewer"].addModel(pdb, "pdb", {"keepH": true});
                        modelForZooming = this[typeStr + "Mol"];

                        callBack(modelForZooming);
                    }
                } else if (origPDBContent !== "") {
                    // It's empty, but shouldn't be. Probably not
                    // properly formed.

                    // this["viewer"].removeModel(this[typeStr + "Mol"]);
                    // this["viewer"].removeAllShapes();
                    // this["viewer"].resize();

                    this.$store.commit("openModal", {
                        title: "Invalid Input File!",
                        body: "<p>The selected input file is not properly formatted. The molecular viewer has not been updated. Please select a properly formatted PDBQT or PDB file, as appropriate.</p>"
                    });
                }
            }

            // Convert pdbqt to pdb
            let modelForZooming: any;
            if (["receptor", "docked"].indexOf(this["type"]) !== -1) {

                let somethingChanged;
                loadPDBTxt("receptor", (mol) => {
                    somethingChanged = true;
                    this["viewer"].removeAllSurfaces();
                    this["surfaceObj"] = undefined;

                    // this["renderProteinSurface"] = false;

                    this.receptorAdded(mol);
                });

                loadPDBTxt("crystal", (mol) => {
                    somethingChanged = true;
                    this.ligandAdded(mol, true);
                });

                loadPDBTxt("docked", (mol) => {
                    somethingChanged = true;
                    this.ligandAdded(mol);
                });

                if (somethingChanged === true) {
                    // this["viewer"].resize();  // To make sure. Had some problems in testing.
                    this["viewer"].render();
                    this["viewer"].zoomTo({"model": modelForZooming}, duration);
                    this["viewer"].zoom(0.8, duration);
                }
            }

            if (["ligand"].indexOf(this["type"]) !== -1) {

                loadPDBTxt("ligand", (mol) => {
                    this.ligandAdded(mol);
                });

                // this["viewer"].resize();  // To make sure. Had some problems in testing.
                this["viewer"].render();
                this["viewer"].zoomTo({"model": modelForZooming}, duration);
                this["viewer"].zoom(0.8, duration);
            }

            // Stop waiting state.
            jQuery("body").removeClass("waiting");
        }, 50);

    },

    /**
     * Runs when a receptor has been added.
     * @param  {any} mol  The 3dmol.js molecule object.
     * @returns void
     */
    receptorAdded(mol: any): void {
        // Get the center of the protein
        var atoms = mol.selectedAtoms({});
        let len = atoms.length;
        let xTot = 0;
        let yTot = 0;
        let zTot = 0;
        let minX = 1e100;
        let minY = 1e100;
        let minZ = 1e100;
        let maxX = -1e100;
        let maxY = -1e100;
        let maxZ = -1e100;
        for (var i = 0; i < len; i++) {
            let atom = atoms[i];
            let x = atom.x;
            let y = atom.y;
            let z = atom.z;
            xTot += x;
            yTot += y;
            zTot += z;
            if (x > maxX) {
                maxX = x;
            }
            if (y > maxY) {
                maxY = y;
            }
            if (z > maxZ) {
                maxZ = z;
            }
            if (x < minX) {
                minX = x;
            }
            if (y < minY) {
                minY = y;
            }
            if (z < minZ) {
                minZ = z;
            }
        }
        let centerX = xTot / len;
        let centerY = yTot / len;
        let centerZ = zTot / len;
        let sizeX = 0.25 * (maxX - minX);
        let sizeY = 0.25 * (maxY - minY);
        let sizeZ = 0.25 * (maxZ - minZ);

        this.setVinaParamIfUndefined("center_x", +centerX.toFixed(2));
        this.setVinaParamIfUndefined("center_y", +centerY.toFixed(2));
        this.setVinaParamIfUndefined("center_z", +centerZ.toFixed(2));
        this.setVinaParamIfUndefined("size_x", +sizeX.toFixed(2));
        this.setVinaParamIfUndefined("size_y", +sizeY.toFixed(2));
        this.setVinaParamIfUndefined("size_z", +sizeZ.toFixed(2));

        // Make the atoms of the protein clickable if it is receptor.
        if (this["type"] === "receptor") {
            this.makeAtomsClickable(mol);
        }

        this.showSurfaceAsAppropriate();
        this.showSticksAsAppropriate();
    },

    /**
     * Runs when a ligand has been added.
     * @param  {any} mol  The 3dmol.js molecule object.
     * @returns void
     */
    ligandAdded(mol, isCrystal = false): void {
        let stickStyle = {};
        mol.setStyle({}, {
            "stick": { "radius": 0.4 }
        });
        this["viewer"]["render"]();

        if (isCrystal === true) {
            this.makeAtomsClickable(mol);
            this.showCrystalAsAppropriate();
        }
    },

    /**
     * Makes the atoms of a 3dmol.js molecule clicable.
     * @param  {any} mol  The 3dmol.js molecule.
     * @returns void
     */
    makeAtomsClickable(mol: any): void {
        mol.setClickable({}, true, (e) => {
            this.$store.commit("setVinaParam", {
                name: "center_x",
                val: e["x"]
            });
            this.$store.commit("setVinaParam", {
                name: "center_y",
                val: e["y"]
            });
            this.$store.commit("setVinaParam", {
                name: "center_z",
                val: e["z"]
            });
        });

        // Also make labels.
        var atoms = mol.selectedAtoms({});
        let len = atoms.length;
        for (var i = 0; i < len; i++) {
            let atom = atoms[i];
            this["viewer"].setHoverable({}, true, (atom: any) => {
                let lbl = atom["resn"].trim() + atom["resi"].toString() + ":" + atom["atom"].trim();
                atom["chain"] = atom["chain"].trim();
                if (atom["chain"] !== "") {
                    lbl += ":" + atom["chain"];
                }
                this["viewer"].addLabel(lbl, {"position": atom, "backgroundOpacity": 0.8});
            }, (atom: any) => {
                this["viewer"].removeAllLabels();
            })
        }
    },

    /**
     * Sets a vina parameter only if it is currently undefined. Used
     * for setting default values, I think.
     * @param  {string} name  The variable name.
     * @param  {any}    val   The value.
     * @returns void
     */
    setVinaParamIfUndefined(name: string, val: any): void {
        if (this.$store.state["vinaParams"][name] === undefined) {
            this.$store.commit("setVinaParam", {
                name,
                val
            });
            this.$store.commit("setValidationParam", {
                name,
                val: true
            })
        }
    },

    /**
     * Show a molecular surface representation if it is appropriate
     * given user settings.
     * @returns void
     */
    showSurfaceAsAppropriate(): void {
        // If no protein has been loaded, no need to proceed.
        if (this["receptorMol"] === undefined) {
            return;
        }

        if (this["renderProteinSurface"] === true) {
            // You're supposed to render the surface. What if it
            // doesn't exist yet?
            if (this["surfaceObj"] === undefined) {
                this["viewer"].removeAllSurfaces();
                this["surfaceObj"] = this["viewer"].addSurface(
                    $3Dmol.SurfaceType.MS, {
                        "color": 'white',
                        "opacity": 0.85
                    },
                    {
                        "model": this["receptorMol"]
                    }
                );
            }

            // Now it exists for sure. Make sure it is visible.
            this["viewer"]["setSurfaceMaterialStyle"](
                this["surfaceObj"]["surfid"],
                {
                    "color": 'white',
                    "opacity": 0.85
                }
            )
            this["viewer"]["render"]();
        } else {
            // So you need to hide the surface, if it exists.
            if (this["surfaceObj"] !== undefined) {
                this["viewer"]["setSurfaceMaterialStyle"](
                    this["surfaceObj"]["surfid"],
                    { "opacity": 0 }
                );
                this["viewer"]["render"]();
            }
        }
    },

    /**
     * Show a sticks representation if it is appropriate given user
     * settings.
     * @returns void
     */
    showSticksAsAppropriate(): void {
        // If no protein has been loaded, no need to proceed.
        if (this["receptorMol"] === undefined) {
            return;
        }

        if (this["renderProteinSticks"] === true) {
            // Set up the style.
            this["receptorMol"].setStyle(
                {},
                {
                    "stick": { "radius": 0.15 },
                    "cartoon": { "color": 'spectrum' },
                }
            );
            this["viewer"]["render"]();
        } else {
            // Set up the style.
            this["receptorMol"].setStyle({}, {});  // This is better. Clear first.
            this["viewer"]["render"]();
            this["receptorMol"].setStyle(
                {},
                { "cartoon": { "color": 'spectrum' } }
            );
            this["viewer"]["render"]();
        }
    },

    /**
     * Show a yellow sticks representation if it is appropriate given
     * user settings.
     * @returns void
     */
    showCrystalAsAppropriate(): void {
        // If no protein has been loaded, no need to proceed.
        if (this["crystalMol"] === undefined) {
            return;
        }

        if (this["renderCrystal"] === true) {
            // Set up the style.
            this["crystalMol"].setStyle(
                {},
                {
                    "stick": {
                        "radius": 0.3,
                        "color": "yellow"
                        // "colorscheme": "yellowCarbon"
                    }
                }
            );
            this["viewer"]["render"]();
        } else {
            // Set up the style.
            this["crystalMol"].setStyle( {}, {} );
            this["viewer"]["render"]();
        }
    },

    /**
     * Toggles the surface representation on and off.
     * @returns void
     */
    "toggleSurface"(): void {
        this["renderProteinSurface"] = !this["renderProteinSurface"];
        this.showSurfaceAsAppropriate();
    },

    /**
     * Toggles the sricks representation on and off.
     * @returns void
     */
    "toggleSticks"(): void {
        this["renderProteinSticks"] = !this["renderProteinSticks"];
        this.showSticksAsAppropriate();
    },

    /**
     * Toggles the yellow sticks representation on and off.
     * @returns void
     */
    "toggleCrystal"(): void {
        this["renderCrystal"] = !this["renderCrystal"];
        this.showCrystalAsAppropriate();
    },

    /**
     * Updates the box in the 3dmol.js widget.
     * @returns void
     */
    updateBox(): void {
        if (this["viewer"] === undefined) {
            // Try again in a bit. Not loaded yet...
            setTimeout(this.updateBox, 1000);
            return;
        }

        let centerX = this.$store.state["vinaParams"]["center_x"];
        if (centerX === undefined) { return; }
        let centerY = this.$store.state["vinaParams"]["center_y"];
        if (centerY === undefined) { return; }
        let centerZ = this.$store.state["vinaParams"]["center_z"];
        if (centerZ === undefined) { return; }
        let sizeX = this.$store.state["vinaParams"]["size_x"];
        if (sizeX === undefined) { return; }
        let sizeY = this.$store.state["vinaParams"]["size_y"];
        if (sizeY === undefined) { return; }
        let sizeZ = this.$store.state["vinaParams"]["size_z"];
        if (sizeZ === undefined) { return; }

        this["viewer"].removeAllShapes();

        this["viewer"].addBox({
            "center": {
                "x": centerX,
                "y": centerY,
                "z": centerZ
            },
            "dimensions": {
                "w": sizeX,
                "h": sizeY,
                "d": sizeZ
            },
            "color": 'yellow',
            "opacity": 0.8
        });

        this["viewer"].render();
    }
}

/** An object containing the vue-component watch functions. */
let watchFunctions = {
    /**
     * Watch when the receptorContents computed property.
     * @param  {string} newReceptorContents  The new value of the property.
     * @param  {string} oldReceptorContents  The old value of the property.
     * @returns void
     */
    "receptorContents": function (newReceptorContents: string, oldReceptorContents: string): void {
        // The purpose of this is to react when new receptorContents
        // are added.

        let duration: number = (oldReceptorContents === "") ? 0 : 500;
        this.modelAdded(duration);
        // this.updateBox();  // So when invalid pdb loaded, can recover with valid pdb.
    },

    /**
     * Watch when the ligandContents computed property.
     * @param  {string} newLigandContents  The new value of the property.
     * @param  {string} oldLigandContents  The old value of the property.
     * @returns void
     */
    "ligandContents": function (newLigandContents: string, oldLigandContents: string): void {
        // The purpose of this is to react when new ligandContents are
        // added.

        let duration: number = (oldLigandContents === "") ? 0 : 500;
        this.modelAdded(duration);
    },

    /**
     * Watch when the dockedContents computed property.
     * @param  {string} newDockedContents  The new value of the property.
     * @param  {string} oldDockedContents  The old value of the property.
     * @returns void
     */
    "dockedContents": function (newDockedContents: string, oldDockedContents: string): void {
        // The purpose of this is to react when new dockedContents are
        // added.

        let duration: number = (oldDockedContents === "") ? 0 : 500;
        this.modelAdded(duration);
    },

    /**
     * Watch when the crystalContents computed property.
     * @param  {string} newCrystalContents  The new value of the property.
     * @param  {string} oldCrystalContents  The old value of the property.
     * @returns void
     */
    "crystalContents": function (newCrystalContents: string, oldCrystalContents: string): void {
        // The purpose of this is to react when new dockedContents are
        // added.

        let duration: number = (oldCrystalContents === "") ? 0 : 500;
        this.modelAdded(duration);
    },

    /**
     * Watch when the vinaParams computed property.
     * @param  {string} newVinaParams  The new value of the property.
     * @param  {string} oldVinaParams  The old value of the property.
     * @returns void
     */
    vinaParams(newVinaParams: string, oldVinaParams: string): void {
        // For updating the docking box...
        if (this["type"] !== "receptor") {
            return;
        }

        this.updateBox();
    }
}

/**
 * The vue-component mounted function.
 * @returns void
 */
function mountedFunction(): void {
    this["renderProteinSurface"] = this["proteinSurface"];
}

/**
 * Setup the threedmol Vue commponent.
 * @returns void
 */
export function setup(): void {
    Vue.component('threedmol', {
        /**
         * Get the data associated with this component.
         * @returns any  The data.
         */
        "data"() {
            return {
                "viewer": undefined,
                "surfaceObj": undefined,
                "receptorMol": undefined,
                "crystalMol": undefined,
                "ligandMol": undefined,
                "dockedMol": undefined,
                "receptorPdbOfLoaded": "",  // To prevent from loading twice.
                "crystalPdbOfLoaded": "",  // To prevent from loading twice.
                "ligandPdbOfLoaded": "",  // To prevent from loading twice.
                "dockedPdbOfLoaded": "",  // To prevent from loading twice.
                "renderProteinSurface": undefined,
                "renderProteinSticks": true,
                "renderCrystal": true,
                "msg": "Use the file input above to select the " + this["type"] + " PDBQT file."
            }
        },
        "computed": computedFunctions,
        "template": `
            <div class="container-3dmol" style="display:grid;">
                <div
                    :id="type + '-3dmol'"
                    style="height: 400px; width: 100%; position: relative;">

                    <b-card v-if="!appropriatePdbLoaded"
                        class="text-center"
                        :title="'Missing ' + type.substring(0, 1).toUpperCase() + type.substring(1)"
                        style="width: 100%; height: 100%;"
                    >
                        <b-card-text v-if="autoLoad">
                            Loading...
                        </b-card-text>
                        <b-card-text v-else>
                            {{msg}}
                        </b-card-text>
                    </b-card>
                    <b-card v-else
                        class="text-center"
                        :title="'Missing ' + type.substring(0, 1).toUpperCase() + type.substring(1)"
                        style="width: 100%; height: 100%;"
                    >
                        Currently loading...
                    </b-card>
                </div>
                <div v-if="type!=='ligand'" style="margin-top:-34px; padding-right:9px;" class="mr-1">
                    <form-button :variant="surfBtnVariant" @click.native="toggleSurface" :small="true">Surface</form-button>
                    <form-button v-if="crystalContents!==''" @click.native="toggleCrystal" :variant="crystalBtnVariant" :small="true">Correct Pose</form-button>
                    <form-button :variant="allAtmBtnVariant" @click.native="toggleSticks" :small="true">All Atoms</form-button>
                </div>
            </div>
        `,
        "watch": watchFunctions,
        "props": {
            "type": String, // receptor, ligand, or docked. Used only to
                            // determine if it's been loaded yet.
            "proteinSurface": {
                "type": Boolean,
                "default": false
            },
            "autoLoad": {
                "type": Boolean,
                "default": false
            }
        },
        "methods": methodsFunctions,

        /**
         * Runs when the vue component is mounted.
         * @returns void
         */
        "mounted": mountedFunction
    })
}

/**
 * Converts a pdbqt string to pdb.
 * @param  {string}           pdbqtTxt  The pdbqt text.
 * @param  {any=undefined}    store?    A VueX store object.
 * @returns string  The pdb text.s
 */
export function pdbqtToPDB(pdbqtTxt: string, store?: any): string {
    let lines: string[] = pdbqtTxt.split("\n");

    lines = lines.map(l => l.replace(/^HETATM/g, "ATOM  "))
    lines = lines.filter(l => {
        if (l.substring(0, 4) === "ATOM") {
            return true;
        }
        return false;
    });

    // Get the element names
    let elements = lines.map(l => l.substring(11, 17).trim().replace(/[0-9]/g, "").substr(0, 2).toUpperCase());
    elements = elements.map((e) => {
        if (["BR", "CL", "ZN", "MG", "AU", "MN", "FE"].indexOf(e) !== -1) {
            return e;
        } else {
            return e.substring(0, 1);
        }
    })

    lines = lines.map((l, i) => {
        return l.substring(0, 77) + elements[i];
    });

    let numAtoms = lines.length;

    // You may need to remove some atoms if there are to many atoms.
    let msg = "";
    if (lines.length > 5000) {
        // Remove hydrogen atoms
        lines = lines.filter(l => l.slice(12, 16).replace(/ /g, '').replace(/[0-9]/g, "").slice(0, 1).toUpperCase() !== "H");
        msg = "hydrogen atoms";
    }

    if (lines.length > 5000) {
        // Remove sidechains
        lines = lines.filter(l => ["CA", "O", "C", "N"].indexOf(l.slice(12, 16).replace(/ /g, '')) !== -1);
        msg = "hydrogen atoms and side chains";
    }

    if (lines.length > 5000) {
        // Remove O too.
        lines = lines.filter(l => l.slice(12, 16).replace(/ /g, '') !== "O");
        msg = "hydrogen atoms, side chains, and backbone carbonyl oxygen atoms";
    }

    if ((bigMolAlreadyModalDisplayed === false) && (msg !== "") && (store !== undefined)) {
        bigMolAlreadyModalDisplayed = true;
        store.commit("openModal", {
            title: "Large Molecule!",
            body: "<p>The PDB or PDBQT file you provided contains " + numAtoms.toString() + " atoms. A version of your file without " + msg + " will be displayed to speed visualization.</p>"
        });
    }

    pdbqtTxt = lines.join("\n");
    return pdbqtTxt;
}
