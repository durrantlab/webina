# Webina 1.0.0 #

## Introduction ##

Webina is a JavaScript/WebAssembly library that runs AutoDock Vina, a popular
program for molecular docking, entirely in a web browser. The docking
calculations take place on the user's own computer rather than a remote
server. To encourage use, we have incorporated the Webina library into our own
Webina web app. The app includes a convenient interface so users can easily
setup their docking runs and analyze the results. A working version of the app
can be accessed free of charge from
[http://durrantlab.com/webina](http://durrantlab.com/webina).

## Compatibility ##

We have tested the Webina library on macOS 10.14.5, Windows 10 Home 1803, and
Ubuntu 18.04.3 LTS. Webina uses the SharedArrayBuffer JavaScript object to
allow multiple processes/threads to exchange data directly. This object is
currently available on Chromium-based browsers such as Google Chrome.
AAdditional browsers are likely to enable SharedArrayBuffer soon.

## Repository Contents ##

* `dist/`: The production (distribution) files. If you wish to run the Webina
  library or web app on your own server, these are the only files you need.
  For convenience, the `webina.zip` contains the contents of the `dist/`
  directory.
  * `dist/minimal_example.html` shows how to use the Webina library in your
    own programs.
  * `dist/index.html` starts the Webina web app (see
    [http://durrantlab.com/webina](http://durrantlab.com/webina) for a working
    example).
* `src/`: The Webina source files. You cannot use these files directly. They
  must be compiled.
* `utils/`, `package.json`, `package-lock.json`, `tsconfig.json`: Files used
  to compile the contents of the `src/` directory to the `dist/` directory.
* `CHANGELOG.md`, `CONTRIBUTORS.md`, `README.md`: Documentation files.

## Description of Use ##

### Webina JavaScript Library ###

The Webina library is built on the AutoDock Vina 1.1.2 codebase, compiled to
WebAssembly. Web-app developers can incorporate the library into their own
computer-aided drug-discovery apps. See `dist/minimal_example.html` for a
simple example of how to use the Webina library in your own programs.

All Vina command-line parameters are accessible via the Webina library, with
the exception of the parameters used to specify input files. For security
reasons, web browsers do not allow JavaScript to directly access users' file
systems. Instead, the contents of local files must be read through a file
input element, using a JavaScript FileReader object. To overcome this
limitation, the Webina library accepts text strings containing the contents of
the input PDBQT files, rather than the file paths normally specified via Vina
parameters such as `--receptor` and `--ligand`.

### Webina Web App ###

#### Input Parameters Tab ####

We have incorporated the Webina JavaScript library into a Webina web app that
includes additional tools for setting up Webina runs and visualizing docking
results. On first visiting the Webina web app, the user encounters the "Input
Parameters" tab. This tab includes several subsections that are useful for
setting up a Webina run.

__Input PDBQT Files.__ The "Input PDBQT Files" subsection allows the user to
select their receptor and ligand files. As is the case with command-line Vina,
these files must be in the PDBQT format. The user can also optionally specify
a known-pose PDB or PDBQT ligand file. This file includes the ligand in its
experimentally determined, correct bound pose (e.g., per X-ray crystallography
or NMR). The known-pose file plays no role in the docking calculation; rather,
it serves as a positive-control reference for evaluating Webina-predicted
ligand poses.

Some users may wish to test Webina without having to provide their own input
files. The optional "Use Example Files" button automatically loads in example
receptor, ligand, and known-pose files.

__Docking Box.__ The "Docking Box" subsection allows users to specify the
region of the receptor where Webina should attempt to pose the ligand. This
box-shaped volume is typically centered on a known protein pocket or cavity
where a small-molecule ligand might reasonably bind.

To simplify the process of selecting a docking box, the Webina web app
automatically displays 3D models of the user-specified receptor and ligand
using the [3Dmol.js JavaScript library](https://3dmol.csb.pitt.edu/). By
default, the receptor and ligand are displayed using cartoon and sticks
representations, respectively. The user can toggle a surface representation as
required to identify candidate receptor pockets. A transparent yellow box is
superimposed on the structures to indicate the docking-box region.

When the user clicks the atoms of the receptor model, the Webina web app
recenters the docking box on the selected atom. Users can also adjust the
location and dimensions of the box using text fields below the molecular
visualization.

__Other Critical Parameters.__ The "Other Critical Parameters" subsection
allows the user to specify the number of CPUs and the exhaustiveness setting.
We chose to set these two parameters apart because they are particularly
important in a browser-based setting. Users expect command-line tools to
consume substantial computer resources, but they do not expect web apps to do
so. By default, Vina uses all available CPUs and an exhaustiveness setting of
eight. Webina has the same ability to consume CPUs and memory, but many users
will wish to adjust these parameters to avoid impacting the performance of
other programs and browser tabs.

__Advanced Parameters.__ The "Advanced Parameters" subsection allows users to
specify any of the many additional parameters that are also available via
command-line Vina. In our experience, it is rarely necessary to adjust these
parameters, so they are hidden by default.

__Run Vina from Command Line.__ The "Run Vina from Command Line" subsection
aims to help Vina users who wish to use the Webina web app to setup their
docking boxes and user parameters. A text field provides a mock example of how
to use command-line Vina with the specified parameters. Users can copy this
example, modify it as needed, and paste it into their command-line terminals
to run the desired calculation with the standard Vina executable.

__Starting the Webina Calculation.__ Once users click the "Start Webina"
button, the Webina app will switch to the "Running Webina" tab while Webina
executes. When the calculation is complete, the Webina web app will switch to
the "Output" tab (described below) where users can visualize the docking
results.

#### Existing Vina Output Tab ####

The "Existing Vina Output" tab allows users to load and visualize the results
of previous Webina and Vina runs, without having to rerun the calculations.
Users must specify the existing receptor and Webina/Vina output file they wish
to visualize. They can also optionally specify a known-pose ligand file for
reference. Users who wish to test the web app without providing their own
files can click the "Use Example Files" button. Otherwise the "Load Files"
button will open and visualize the specified files.

#### Output Tab ####

The "Output" tab allows users to visualize their Webina docking results. The
same tab also displays the output of any previous Webina/Vina calculations
that the user specifies via the "Existing Vina Output" tab.

__Visualization.__ The "Visualization" subsection uses 3Dmol.js to display the
receptor and docked molecule in cartoon/surface and sticks representation,
respectively. If the user has specified a known-pose ligand file, that pose is
also displayed in yellow sticks. Like Vina, Webina predicts several poses per
input ligand. A table below the visualization viewport lists each pose
together with associated information such as the docking score. Clicking on a
table row updates the 3D view with the specified pose so users can easily
examine all predicted poses.

__Output Files.__ The "Output Files" subsection shows the text contents of the
Webina output files. An associated "Download" button allows users to easily
save those files.

__Run Vina from Command Line.__ Similar to the "Input Parameters" tab, the
"Output" Tab also includes a "Run Vina from Command Line" Subsection. This
section makes it easy for users to reproduce Webina's results using
stand-alone Vina. It also reminds users what parameters they selected to
generate the displayed Webina output.

#### Start Over Tab ####

The "Start Over" tab displays a simple button that allows the user to restart
the Webina app. A warning message reminds the user that they will loose the
results of the current Webina run unless they have saved their output files.

## Running ProteinVR on Your Own Computer ##

Most users will wish to simply access the already compiled, publicly available
ProteinVR web app at [http://durrantlab.com/pvr/](http://durrantlab.com/pvr/).
If you wish to instead run ProteinVR on your own UNIX-like computer (LINUX,
macOS, etc.), follow these instructions:

1. Download the `proteinvr_web_app.zip` file
2. Uncompress the file: `unzip proteinvr_web_app.zip`
3. Change to the new `proteinvr/` directory: `cd proteinvr`
4. Start a local server. Python provides one out of the box: `python -m
   SimpleHTTPServer 8000`
5. Access the server from your web-browser: `http://localhost:8000/` or
   perhaps `http://0.0.0.0:8000/`

Running ProteinVR on other operating systems (e.g., Windows) should be
similar.

## Compiling the Webina Web App ##

The vast majority of users will not need to compile the Webina web app on their own.
Simply use the already compiled files in `dist/` or `webina.zip`.
If you need to make modifications to the source code, these instructions
should help with re-compiling on UNIX-like systems:

1. Clone or download the git repository: `git clone https://git.durrantlab.pitt.edu/jdurrant/webina.git`
2. Change into the new `webina` directory: `cd webina`
3. Install the required `npm` packages: `npm install`
4. Fix any vulnerabilities: `npm audit fix`
5. Make sure Python is installed system wide, and that `python` works from the
   command line (tested using Python 2.7.15)
6. To deploy a dev server: `npm run start`
7. To compile the contents of `src/` to `dist/`: `npm run build`

Note: The Webina-library source code is located at `src/Webina/`. It has a
separate build system (`/src/Webina/compile.sh`). If you modify any of the
files in `/src/Webina/src/`, be sure to run `compile.sh` before building the
larger web app via `npm run build`.

## Compiling the AutoDock Vina 1.1.2 Codebase to WebAssembly ##

We used Emscripten version 1.38.48 to compile the Vina 1.1.2 codebase to
WebAssembly. As mentioned in our manuscript, the key to successful compilation
was to provide Emscripten with the required Boost include files. We used this
command to compile the Boost libraries:

`./bjam link=static variant=release threading=multi runtime-link=static thread
program_options filesystem system serialization`

The resulting binaries were written to
`<boost>/bin.v2/libs/<lib_name>/build/gcc-1.38.48/release/link-static/runtime-link-static/threading-multi`

These binaries had to be linked to `em++` during the compilation process by
modifying the Vina Makefile. Specifically, the included headers had to be
linked/copied under `<emsdk_path>/fastcomp/emscripten/system/include/`.

A detailed description of this process is beyond the scope of this README
file, though many helpful tips have been posed online.

## Notes on User Analytics ##

In some circumstances, the Webina web app may report usage statistics to
Google Analytics. These reports are useful for securing and justifying funding
for the Durrant lab. Usage statistics are only sent if the web-app URL
contains the substring "durrantlab," so installing Webina on your own server
should prevent reporting. Even when using the publicly available version of
Webina hosted at [http://durrantlab.com/webina](http://durrantlab.com/webina),
information about your specific receptor and ligand files is never transmitted
to any remote server.
