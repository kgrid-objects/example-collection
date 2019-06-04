#!/usr/bin/env bash

echo "Create release tag $RELEASE"
git tag $RELEASE
git push origin $RELEASE

echo "Create release $RELEASE"
RELEASE_ID=$(curl -X POST "https://api.github.com/repos/kgrid-objects/example-collection/releases?access_token=$GITHUB_TOKEN" \
              -H 'Content-Type:application/json' -d "{\"tag_name\":\"$RELEASE\",  \"name\":\"Example KO Collection $RELEASE\", \"prerelease\":$PRERELEASE}" | jq -r ".id")

echo Release $RELEASE_ID created

echo "Upload artifacts to release $RELEASE_ID"

cd collection
for file in *.zip
   do
     echo -e "Upload $file"
     curl -X POST "https://uploads.github.com/repos/kgrid-objects/example-collection/releases/$RELEASE_ID/assets?access_token=$GITHUB_TOKEN&name=$file" \
              -H "Content-Type: application/octet-stream" \
              --data-binary "@$file"
done
