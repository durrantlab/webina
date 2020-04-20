/*
PDBQTConvert: A program for converting many file formats to PDBQT. Copyright
(C) 2020 Jacob Durrant

This program is free software; you can redistribute it and/or modify it under
the terms of the GNU General Public License as published by the Free Software
Foundation; either version 2 of the License, or (at your option) any later
version.

This program is distributed in the hope that it will be useful, but WITHOUT
ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
FOR A PARTICULAR PURPOSE.  See the GNU General Public License for more
details.

You should have received a copy of the GNU General Public License along with
this program; if not, write to the Free Software Foundation, Inc., 51 Franklin
Street, Fifth Floor, Boston, MA 02110-1301 USA.
*/

var PDBQTConvert = {
    OpenBabel: undefined,

    getFormats: function (conv) {
        try {
            // list all supported input/output formats, use '\n' to separate between each format string
            var sInputFormats = conv.getSupportedInputFormatsStr("\n");
            var sOutputFormats = conv.getSupportedInputFormatsStr("\n");
            console.log(sInputFormats);
            console.log(sOutputFormats);
        } finally {
        }
    },

    convertToPDBQT: function (
        conv,
        inData,
        format,
        includeBranchesTorsions,
        addHydrogens,
        gen3D,
        pH
    ) {
        // Make the mol file.
        conv.setInFormat("", format); // set input format by file extension
        var mol = new this.OpenBabel.OBMol(); // create a new molecule object...
        conv.readString(mol, inData); // ... and load it with input data


        // Add all hydrogens
        if (addHydrogens === true) {
            pH = pH === undefined ? 7.4 : pH;
            mol.AddHydrogensWithParam(false, true, pH);
        }

        // Small molecules should usually include branches/torsions. Receptors
        // (proteins) typically not.
        if (includeBranchesTorsions !== true) {
            conv.addOption(
                "r",
                this.OpenBabel.ObConversion_Option_type.OUTOPTIONS,
                ""
            );
        }

        if (gen3D === true) {
            var gen = new this.OpenBabel.OB3DGenWrapper();
            var loopCount = 1;
            for (var i = 0; i < loopCount; ++i) {
                // mol = gen.generate3DStructureFromMolData(molData, "MMFF94");
                gen.generate3DStructure(mol, "MMFF94");
            }
        }

        // Convert to pdbqt
        conv.setOutFormat("", "pdbqt"); // set out format by file extension
        var outData = conv.writeString(mol, false); // get output data, do not trim white spaces

        // Delete molecule to free up memory.
        mol.delete();

        // Return pdbqt text.
        return outData;
    },

    convert: function (
        inpText,
        format,
        includeBranchesTorsions,
        addHydrogens,
        gen3D,
        pH
    ) {
        return new Promise((resolve, reject) => {
            this.OpenBabel = OpenBabelModule().then(() => {
                try {
                    var conv = new this.OpenBabel.ObConversionWrapper(); // create ObConversionWrapper instance
                    var out = this.convertToPDBQT(
                        conv,
                        inpText,
                        format,
                        includeBranchesTorsions,
                        addHydrogens,
                        gen3D,
                        pH
                    );
                    conv.delete(); // free ObConversionWrapper instance

                    resolve(out);
                } catch (err) {
                    if (typeof err === "string") {
                        reject(err);
                    } else {
                        reject(err["message"]);
                    }
                }
            });
        });
    },
};

window.PDBQTConvert = PDBQTConvert;
