#!/usr/bin/env bash

(cd "collection/hello-world"; npm run build; )
(cd "collection/exec-example/v1.0.0"; npm run build; )
(cd "collection/exec-step/v1.0.0";  npm run build; )
(cd "collection/score-calc"; npm run build;)
