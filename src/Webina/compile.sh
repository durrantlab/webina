# I'm going to compile this outside WebPack. It's an external library. Just
# easier this way.

# Clear dist dir
rm ./dist/*

# Copy over support files.
cp src/*.js ./dist/
cp src/*.mem ./dist/
cp src/*.wasm ./dist/

# Compile typescript
tsc --outFile dist/Webina.js src/Webina.ts

# Closure compile javascript files (NOT advanced).
node ../../node_modules/google-closure-compiler/cli.js --js=dist/Webina.js --js_output_file=dist/Webina.min.js
node ../../node_modules/google-closure-compiler/cli.js --js=dist/vina.js --js_output_file=dist/vina.min.js
node ../../node_modules/google-closure-compiler/cli.js --js=dist/vina.worker.js --js_output_file=dist/vina.worker.min.js

# All min.js files should refer to other min.js files.
ls dist/*.min.js | awk '{print "cat " $1 " | sed \"s/\\.js/.min.js/g\" > t; mv t " $1}' | bash
