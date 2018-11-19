#!/usr/bin/env sh

cd collection
for d in * ; do
    echo "$d.zip"
    zip -r -X "../$d.zip" $d -x \"*.DS_Store\"
done


