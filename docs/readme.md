# Example Collection

This repository contains a collection of KGrid Knowledge Objects that demonstrate features
of the grid, good development practices and useful tools.

## Anatomy of this Knowledge Object project.
The following structure is not an requirement or enforced, it is a recommendation based
on what the JavaScript and in particular Node community at large have been following by convention.

### Prerequisites
There are testing and packaging features in this project that require npm, npm is installed with Node.js
[npm](https://www.npmjs.com/get-npm).  Once npm is installed run  ```npm install``` at the root of this project.

### Directories

* **collection/** contains one to many directories representing knowledge objects
  * **naan-name-version** is intended for each knowledge object (e.g. _hello-world_)
* **tests/** is for all of your project test scripts
* **etc/** is a sub-directory for miscellaneous project
* **docs/** is a sub-directory for more detailed information about these KOs
* **dist/** is created and destroyed when running ```npm run package```
* **scripts/** is intended to capture various scripts need for the project (using [scripty](https://www.npmjs.com/package/scripty))
* **scriptswin/** windows versions of the scripts

### Example Knowledge Objects
 * [Hello World v1.0](https://github.com/kgrid-objects/example-collection/tree/master/collection/hello-world-v1.0) - Simple KO designed as a starting point. Demonstrates a project structure the includes unit testing and scripts to package the KO deposit.
 * [BMI Calculator](https://github.com/kgrid-objects/example-collection/tree/master/collection/ri-bmicalc-v2.0) -  Simple KO designed to calculate BMI based on height and weight.  Demostrates passing mulitple attributes.


### Bundled Object Example

Currently the KGrid Activator uses the
[Nashorn JavaScript engine](https://openjdk.java.net/projects/nashorn/ ) for execution of JavaScript
Objects.  Nashorn implements [ECMAScript 5.1 specification](http://www.ecma-international.org/ecma-262/5.1/)  
This limits the tools and technics avalable to the KO developer.  The KGrid has experimented with
[webpack](https://webpack.js.org/) and [babel](https://babeljs.io/) as a method to all the developer it until
more current tools and techniques.  Very simple example is Nashorn doesn't support _const_ and _let_ statements but
use babel transpiler we can convert es6 to es5.

Please review [Hello World v1.3](https://github.com/kgrid-objects/example-collection/tree/master/collection/hello-world-v1.3).

### Executive Object Example


### Testing
Sample tests are located in the tests directory and can be executed using _npm_.  These tests utilize
[Jest](https://jestjs.io/) and  [rewire](https://github.com/jhnns/rewire). est provides the testing
framework and rewire allows the tests to access the javascript function without the
convienace of the export modules (KGrid Javascript adaptor limitation).  The [tests](../tests) are in
the tests directory.  You can execute the tests via npm

```
npm test
```

### Integration Testing

#### Running Example KOs in an Activator
You can now test the example objects in an activator via a npm script. This script will download the
latest released activator and start up the activator using the example repository as it's shelf.

Open a terminal window at the root of the cloned repository and run the following command.

```
npm run dev
```


### Package

You can create zip file of the Knowledge Object which can be used to deposit to a KGrid
Library or load/activate on a KGrid Activator.

```
npm run package
```

### Tools

*NPM Tool*
* [scripty](https://www.npmjs.com/package/scripty)
* [jest](https://jestjs.io/)
* [rewire](https://github.com/jhnns/rewire)
