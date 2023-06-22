Changes
=======

1.0.4
-----

* Updated from Webpack 4 to Webpack 5
* Webina is now based on the latest version of AutoDock Vina, version 1.2.3.
* Commented out information on compiling Webina in the README.md file. The build
  process is now more complicated, and we intend to reimplement Webina in the
  near future.
* Removed references to `minimal_example.html` for the same reason.

1.0.3
-----

* Due to a recent browser update, web servers hosting Webina must now send the
  `Cross-Origin-Embedder-Policy: require-corp` and `Cross-Origin-Opener-Policy:
  same-origin` headers.
  * Updated `README.md` to explain the need for these new headers.
  * The webina.zip file now includes a simple Python3 server that provides the
    required headers, to facilitate testing on users' local machines.
* Starting with this version, we will no longer generate technical documentation
  describing the Webina source code. Documentation describing basic usage,
  compilation, etc. can be found in the `README.md` file.

1.0.2
-----

* Renamed the `docs/` directory to `technical_docs/` so end users won't
  confuse it with the user manual found in the `README.md` file.
* Improved Webina's ability to convert large PDB files to PDBQT. PDBQTConvert
  cannot convert large PDB files, so Webina reduces the input file size if it
  encounters an error. In addition to the previous steps, it now does the
  following:
  * keeps only the first frame of multi-frame PDB files
  * removes existing hydrogen atoms
  * removes beta/occupancy/element columns

1.0.1
-----

* Updated the "Run Vina from the Command Line" widget.
  * Fixed a minor bug that sometimes caused malformed example command lines.
  * Added links so users can save the receptor/ligand PDBQT input files
    generated within the app.
* Created a separate, independent web app called PDBQTConvert that can convert
  files in many other formats (e.g., PDB, XYZ, CAN, SMI) to PDBQT (see
  `pdbqt_convert/`). This app uses
  [openbabel.js](https://github.com/partridgejiang/cheminfo-to-web/) and is
  GNU GPL licensed. We distribute it alongside Webina, but as a separate
  program.
* Added ways to provide/process input PDBQT files.
  * Modified Webina so users can optionally use PDBQTConvert to convert their
    input files. Webina communicates with PDBQTConvert at "arm's length," via
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
