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

# Fix version
export WEBINA_VERSION=`cat ../Version.ts  | grep VERSION | awk '{print $5}' | sed 's/"//g' | sed "s/;//g"`
grep -l "XXXXXXXXXXXXX.X" dist/* | awk '{print "cat " $1 " | sed \"s/XXXXXXXXXXXXX.X/TMPSTR/g\" > t; mv t " $1}' | sed "s/TMPSTR/${WEBINA_VERSION}/g" | bash

cd dist
echo "/**
 * Webina Copyright 2019 Jacob Durrant
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */" > t
ls Webina*js | awk '{print "cat t > " $1 ".tmp; cat " $1 " >> " $1 ".tmp; mv " $1 ".tmp " $1}' | bash
rm t
cd -
