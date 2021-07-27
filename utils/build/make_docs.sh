rm -rf technical_docs
# typedoc --out technical_docs --exclude "**/*.js" --ignoreCompilerErrors --mode modules --hideGenerator src

# typedoc \
#     --exclude "**/*.old" --exclude "**/*.js" --out technical_docs \
#     --categorizeByGroup --hideGenerator --excludePrivate --excludeProtected --theme minimal \
#     --sort alphabetical --plugin none \
#     ../../src/index.ts

cd ../../src/

typedoc \
    --exclude "**/*.old" --exclude "**/*.js" --out technical_docs \
    --categorizeByGroup --hideGenerator --theme minimal \
    --sort alphabetical --plugin none \
    --moduleResolution node \
    ./


    # --entryPoints ../../src/index.ts

    # --entryPoints $(find ../../src/ -name "*.ts" | awk '{print $1}' | grep -v "\.old" | grep -v "\.d\.ts" | awk '{printf $1 " "}') \
# --readme ../../USAGE.md