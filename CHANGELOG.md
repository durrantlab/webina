Changes
=======

WIP
---

* Updated copyright notices.
* Created a separate, independent helper app called PDBQTConvert that can
  convert files in many other formats (e.g., PDB, XYZ, CAN, SMI) to PDBQT (see
  `pdbqt_convert/`). This app uses
  [openbabel.js](https://github.com/partridgejiang/cheminfo-to-web/)
  and is GNU GPL licensed. We distribute it alongside Webina, but as a
  separate program.
* Modified Webina so users can optionally use PDBQTConvert to convert their
  files. Webina communicates with PDBQTConvert at "arms length," via an
  iframe.
* Added the ability to draw small-molecule ligands.
* Added technical documentation (see `docs/`).
* Added link to optionally remove non-protein residues from the receptor.

1.0.0
-----

* The initial version.
* Apache License 2.0.
