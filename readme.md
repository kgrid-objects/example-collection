[![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)](http://perso.crans.org/besson/LICENSE.html)
# Example Collection
This repository contains a collection of KGrid Knowledge Objects that demonstrate features
of the grid, good development practices and useful tools.

## Tests
- Tests can be written in the framework of your choice for KOs
- Js/Simple has two tests written with mocha and chai: 
  - One at the top level, which can be run with the command `npm test`
  - One in the `test` directory of the ko, which can be run with the command `npm test collection/js-simple-v1.0/test`
- Js/Bundled also has a jest test, which can also be run with `npm test` inside the KO directory
- This is just to demonstrate that it is possible to have tests for the collection, or individual KOs
- Before running tests, you must run `npm install`
For more details see [Example Collection](https://kgrid-objects.github.io/example-collection/) documentation.
