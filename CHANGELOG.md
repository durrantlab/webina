Changes
=======

WIP
---

* Updated the "Run Vina from the Command Line" widget.
  * Fixed a minor bug that sometimes caused malformed example command lines.
  * Added links so users can save the receptor and ligand PDBQT files
    generated within the app.
* Created a separate, independent helper app called PDBQTConvert that can
  convert files in many other formats (e.g., PDB, XYZ, CAN, SMI) to PDBQT (see
  `pdbqt_convert/`). This app uses
  [openbabel.js](https://github.com/partridgejiang/cheminfo-to-web/)
  and is GNU GPL licensed. We distribute it alongside Webina, but as a
  separate program.
* Added ways to provide/process input PDBQT files.
  * Modified Webina so users can optionally use PDBQTConvert to convert their
    input files. Webina communicates with PDBQTConvert at "arms length," via
    an iframe.
  * Added the ability to draw small-molecule ligands.
  * Added a link to optionally remove non-protein residues from the receptor.
* Improved documentation.
  * Added technical documentation (see `docs/`).
  * Updated the `README.md` file to include:
    * Instructions describing how to prepare PDBQT files.
    * A brief description re. how to perform full-surface docking.
  * Updated copyright notices.
* Added the receptor/ligand PDBQT files used as examples in the manuscript.
  See `docking_files/`.

1.0.0
-----

* The initial version.
* Apache License 2.0.
