rm -rf docs
typedoc --out docs --exclude "**/*.js" --ignoreCompilerErrors --mode modules --hideGenerator src
