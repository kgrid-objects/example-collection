#!/usr/bin/env sh

# Setup
rm -rf dist
mkdir -p dist
cd collection

for d in * ; do
    echo "$d"
    if [ "$d" == "hello-world" ]; then
        (cd $d; npm run package)
    else
       zip -r -X "../dist/$d.zip" $d
    fi

done


