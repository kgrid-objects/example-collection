#!/usr/bin/env sh

# Setup
rm -rf dist
mkdir -p dist
for i in $(ls -d *-*/); do cp -r ${i%%/} dist; done

# create zip for each ko
cd dist
for d in * ; do
    echo "$d.zip"
    zip -r -X "$d.zip" $d -x \"*.DS_Store\"
done

# clean up only leaving zip files
rm -r */

