Porting  process of Vina required no modification of the source code.
Vina source code only utilizes Boost libraries as dependencies.
Some parts of Boost libraries are header-only and require no preliminary compilation to include them with Emscripten-compiled projects.
However, those directly called by Vina were not the case.
Hence we had to compile them first as static libraries (for performance considerations).
Also, Vina code base had no modifications since 2011 and the project webpage mentions boost version 1.44 as the one they used for successful compilation.
Boost uses bjam/b2 building system for compilation and there were major changes in the compilation system since version 1.42.
Since we used boost version 1.41 for the compilation.
The following libraries had to be compiled: \emph{system, filesystem, serialization, program\_options and thread/pthread}.
Except for a small (insignificant) bugs with the boost code itself (mostly incompatibilities with C++11) the only “trick” here was to provide boost include files for emscripten.
We used emscripten version 1.38.48 and that required included headers to be linked/copied under \emph{<emsdk\_path>/fastcomp/emscripten/system/include/} The following command been used to compile boost libraries: ./bjam  link=static variant=release threading=multi runtime-link=static thread program_options filesystem system serialization The resulting binaries (placed by bjam under <boost>/bin.v2/libs/<lib\_name>/build/gcc-1.38.48/release/link-static/runtime-link-static/threading-multi) had to be linked to em++ during the compilation process.
Since vina uses make to compile and build we modified Makefile to the following contents:

\hl{Also need to mention which browsers it works on.

Webassembly is supported in all major browsers except for Internet Explorer (https://developer.mozilla.org/en-US/docs/WebAssembly - see Browser compatibility). However, older versions of browsers have SharedArrayBuffer disabled since 5 January 2018. That is important since webina uses pthreads - i.\,e.~multithreading and SharedArray is mechanism that allows processes to exchange data. As of the time of writing SharedArrayBuffer is disabled in Mozilla browsers starting from version 52 and newer.

Good to mention Firefox not currently (why?) but that they plan to restore support soon.}
