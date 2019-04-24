#!/usr/bin/env sh

# Setup
rm -rf dist
mkdir -p dist

(cd "collection/hello-world"; npm install; npm run package; )
(cd "collection/exec-example"; npm install; npm run package; )
(cd "collection/exec-step";  npm install; npm run package; )
(cd "collection"; zip -r -X "../dist/mvo-kgrid.zip" mvo-kgrid/ )
(cd "collection"; zip -r -X "../dist/99999-fk4n99hh99.zip" 99999-fk4n99hh99/ )
(cd "collection"; zip -r -X "../dist/ri-bmicalc.zip" ri-bmicalc/ )



