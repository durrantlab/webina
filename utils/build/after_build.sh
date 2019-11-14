# Must be run from the main directory.

# When using closure compiler, it creates empty files that aren't needed.
cd dist/
ls -l | grep " 0 "  | awk '{print "rm " $9}' | bash
cd -

# Prevent 3Dmol.js from reporting back to the mother ship. I thought I could
# set this programmatically, but couldn't get it to work. Best just to modify
# the code to prevent it.
cd dist/
grep -l "$3Dmol.notrack" *.js | awk '{print "cat " $1 " | sed \"s|\\$3Dmol.notrack|true|g\" > t; mv t " $1}'  | bash
cd -

# You need to closure compile vendor..js too. Let's use js version for maximal
# compatibility.
echo "Check for errors above. Enter to start compiling vendor js and other js files..."
cd dist
ls vendors*js runtime*js styles*js | awk '{print "echo Compiling " $1 ";node ../node_modules/google-closure-compiler/cli.js " $1 " > t; mv t " $1}' | bash
cd -

# Also create a ZIP file of the dist directory, for convenient distribution.
mv dist webina
zip -r webina.zip webina
mv webina dist

# Let the user know that compilation is finished. Works only on macOS.
say "Beep"
