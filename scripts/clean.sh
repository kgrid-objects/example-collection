#!/usr/bin/env bash

find . -name "node_modules" -exec rm -rf '{}' +
find . -name "dist" -exec rm -rf '{}' +

