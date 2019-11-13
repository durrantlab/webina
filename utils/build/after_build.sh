# Must be run from the main directory.

# When using closure compiler, it creates empty files that aren't needed.
# Tricky because you need to make sure the service worker doesn't try to load
# them either.
cd dist/
ls -l | grep " 0 " | awk '{print $9}' | grep -v tmp > tmp
cat tmp | awk '{print "rm " $1}' | bash
cat $(ls precache-manifest*.js)  | tr '\n' '`' > t
cat tmp | awk '{print "cat t | sed \"s/,|  {|    .url.: ." $1 ".|  }//g\" > t2; mv t2 t"}' | bash
cat t | tr '`' '\n' > $(ls precache-manifest*.js)
rm t tmp
cd -

# Prevent 3Dmol.js from reporting back to the mother ship. I thought I could
# set this programmatically, but couldn't get it to work. Best just to modify
# the code to prevent it.
cd dist/
ls vendor* | awk '{print "cat " $1 " | sed \"s/.3Dmol.notrack/true/g\"" }' | bash > t; mv t $(ls vendor*.js)
cd -

# You need to closure compile vendor..js too. Let's use js version for maximal
# compatibility.
echo "Check for errors above. Enter to start compiling vendor js and other js files..."
# read -p "Press enter to continue"
cd dist

node ../node_modules/google-closure-compiler/cli.js $(ls vendors*.js) > t
mv t $(ls vendors*.js)

node ../node_modules/google-closure-compiler/cli.js $(ls runtime*.js) > t
mv t $(ls runtime*.js)

node ../node_modules/google-closure-compiler/cli.js $(ls precache-manifest*.js) > t
mv t $(ls precache-manifest*.js)

node ../node_modules/google-closure-compiler/cli.js service-worker.js > t
mv t service-worker.js

cd -

# All babylon files should use jpg, not png. It downloads faster for phones.
# So note that transparent textures aren't allowed. Also, ImageMagik must be
# installed to make this part work.
cd dist
find environs/ -name "*.png" > t
cat t | awk '{print "basename " $1}' | bash > t2
cat t | awk '{print "dirname " $1}' | bash > t3
cat t2 | sed "s/.png$/.jpg/g" > t4
paste t t2 t3 t4 | awk '{print "convert -quality 0.85 " $1 " " $3 "/" $4}' | bash
paste t t2 t3 t4 | awk '{print "cat " $3 "/scene.babylon | sed \"s/" $2 "/" $4 "/g\" > tmp; mv tmp " $3 "/scene.babylon"}' | bash
cat t | awk '{print "rm " $1}' | bash
paste t t2 t3 t4 | sed "s/\/\//\//g" | awk '{print "cat precache-manifest.*.js | sed \"s|" $1 "|" $3 "/" $4 "|g\" > tmp; mv tmp $(ls precache-manifest.*.js | head -n 1 )"}' | bash
rm t t2 t3 t4
cd -

# There are a few files that might sneak in that are never part of the final
# build. Delete them now.
find dist -name "*.psd" -exec rm '{}' \;
find dist -name ".DS_Store" -exec rm '{}' \;
find dist -name "*.log" -exec rm '{}' \;
find dist -name "src.txt" -exec rm '{}' \;
find dist -name "old" -exec rm -r '{}' \;
find dist -name "tmp" -exec rm -r '{}' \;

# Remove files from precache-manifest*js file that do not exist.
cd dist
python ../utils/build/remove_entries_file_no_exist.py
cd -

# Also create a ZIP file of the dist directory, for convenient distribution.
mv dist proteinvr
zip -r proteinvr_web_app.zip proteinvr
mv proteinvr dist

# Let the user know that compilation is finished. Works only on macOS.
say "Beep"
