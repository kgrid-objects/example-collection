[![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)](http://perso.crans.org/besson/LICENSE.html)
# Example Collection
This repository contains a collection of KGrid Knowledge Objects that demonstrate features
of the grid, good development practices and useful tools.

## Tests
- Tests can be written in the framework of your choice for KOs
- It is best not to include test files in `deployment.yaml` if they are contained within the KO
### Tests in Node
  - Node/Simple has two tests written with mocha and chai: 
  - One at the top level, which can be run with the command `npm test`
  - One in the `test` directory of the ko, which can be run with the command `npm test collection/js-simple-v1.0/test`
  - Js/Bundled also has a jest test, which can also be run with `npm test` inside the KO directory.
    - This test is possible because this is the only JS KO that utilizes node.
  - This is just to demonstrate that it is possible to have tests for the collection, or individual KOs
  - Before running tests, you must run `npm install`
### Tests in Python
  - `python-simple-v1.0` has an example of a test using `unittest`
  - to run the tests, use `python3 -m unittest python_simple_test.py` in the src directory of the `python-simple-v1.0` KO

For more details see [Example Collection](https://kgrid-objects.github.io/example-collection/) documentation.
