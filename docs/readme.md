# Example Collection

This repository contains a collection of KGrid Knowledge Objects that demonstrate features
of the grid, good development practices, and useful tools.

## Anatomy of this Knowledge Object project.
The following structure is not an requirement or enforced, it is a recommendation based
on what the JavaScript and in particular Node community at large have been following by convention.

### Prerequisites
- There are some bundled objects that have packaging features that require npm, npm is installed with Node.js
[npm](https://www.npmjs.com/get-npm). 
- There are also some that require [python](https://www.python.org/), which will also be required to run the remote [python runtime](https://github.com/kgrid/kgrid-python-runtime).

### Directories

* **collection/** contains one to many directories representing knowledge objects
  * **object-name** a directory for each knowledge object (e.g. _js-simple-v1.0_)
* **docs/** is a sub-directory for this information about these KOs
* **performanceTest/** contains performance tests that 
will send a number of requests to an activator endpoint. You must have [K6 installed](https://k6.io/).
Tests can be run from the performanceTest directory with:
`k6 run -e URL=<Endpoint URL to be tested> k6post.js -u <Amount of users> -i <Amount of iterations>`

    example:
`k6 run -e URL=http://localhost:8080/js/simple/1.0/welcome k6post.js -u 10 -i 1000`
* **test-collection/** contains a few objects that contain errors for the purpose of debugging Kgrid components.
### Example Knowledge Objects
* [JS Simple v1.0](https://github.com/kgrid-objects/example-collection/tree/master/collection/js-simple-v1.0) 
        - Simple KO designed as a starting point. Demonstrates a simple project structure that runs in the Graal environment using the javascript adapter.
* [JS Bundled v1.0](https://github.com/kgrid-objects/example-collection/tree/master/collection/js-bundled-v1.0) 
        - A bundled knowledge object that uses node to take multiple code artifacts and bundle into one file that can be run in the Graal environment.
Requires node.js to build the object before it will run in the Knowledge Grid activator.
* [JS Executive v1.0](https://github.com/kgrid-objects/example-collection/tree/master/collection/js-executive-v1.0) 
        - An executive knowledge object which calls another object in the Knowledge Grid in the Graal engine. Both this object
        and the object it calls have to be nashorn javascript objects.
* [JS Multiartifact v1.0](https://github.com/kgrid-objects/example-collection/tree/master/collection/js-multiartifact-v1.0)
        - Simple KO designed as a starting point. Demonstrates a simple project structure that runs in the Graal environment using the javascript adapter, but with multiple artifacts.
* [JS Multimime v1.0](https://github.com/kgrid-objects/example-collection/tree/master/collection/js-multimime-v1.0)
        - Simple KO designed as a starting point. Demonstrates a simple project structure that runs in the Graal environment using the javascript adapter, but with multiple endpoints exhibiting different mime types.
* [Node Simple v1.0](https://github.com/kgrid-objects/example-collection/tree/master/collection/node-simple-v1.0)
        - A javascript object that is run remotely in the [node runtime](https://github.com/kgrid/kgrid-node-runtime).
  Requires a node runtime that is connected to the activator to run.
* [Node Executive v1.0](https://github.com/kgrid-objects/example-collection/tree/master/collection/node-executive-v1.0)
        - A javascript object that calls other objects and is run remotely in the [node runtime](https://github.com/kgrid/kgrid-node-runtime).
  Requires a node runtime that is connected to the activator to run.
* [Node Multiartifact v1.0](https://github.com/kgrid-objects/example-collection/tree/master/collection/node-multiartifact-v1.0)
        - A javascript object that has multiple code artifacts and is run remotely in the [node runtime](https://github.com/kgrid/kgrid-node-runtime).
      Requires a node runtime that is connected to the activator to run.
* [Python Simple v1.0](https://github.com/kgrid-objects/example-collection/tree/master/collection/python-simple-v1.0)
        - A python object that is run remotely in the [python runtime](https://github.com/kgrid/kgrid-python-runtime).
  Requires a node runtime that is connected to the activator to run.
* [Python Executive v1.0](https://github.com/kgrid-objects/example-collection/tree/master/collection/python-executive-v1.0)
        - A python object that calls other objects and is run remotely in the [python runtime](https://github.com/kgrid/kgrid-python-runtime).
  Requires a node runtime that is connected to the activator to run.
* [Python Multiartifact v1.0](https://github.com/kgrid-objects/example-collection/tree/master/collection/python-multiartifact-v1.0)
        - A python object that has multiple code artifacts and is run remotely in the [python runtime](https://github.com/kgrid/kgrid-python-runtime).
      Requires a node runtime that is connected to the activator to run.
* [Python Multimime v1.0](https://github.com/kgrid-objects/example-collection/tree/master/collection/python-multiartifact-v1.0)
        - A python object that has multiple endpoints of differing mime types and is run remotely in the [python runtime](https://github.com/kgrid/kgrid-python-runtime).
      Requires a node runtime that is connected to the activator to run.
* [Resource Simple v1.0](https://github.com/kgrid-objects/example-collection/tree/master/collection/resource-simple-v1.0)
        - A static resource object with a GET http endpoint that works with the [resource adapter](https://github.com/kgrid/resource-adapter), and returns artifact binaries.
### Adapters and running Knowledge Objects

Currently, the KGrid Activator has several adapters that can be used to run knowledge objects: 
- The [graal javascript engine](https://www.graalvm.org/docs/introduction/) adapter for execution of JavaScript
Objects. Graal implements [ECMAScript 2020 specification](https://github.com/graalvm/graaljs/blob/master/docs/user/JavaScriptCompatibility.md#ecmascript-language-compliance)
- The proxy adapter can use our [node.js](https://nodejs.org/en/) [runtime](https://github.com/kgrid/kgrid-node-runtime) which will run javascript in a node.js environment
and can load external dependencies.
- The proxy Adapter can also use our [python](https://www.python.org/) [runtime](https://github.com/kgrid/kgrid-python-runtime), which can run python and load python dependencies just like any other python engine
- The Activator also makes use of our [resource adapter](https://github.com/kgrid/resource-adapter) in order to expose resource-based endpoints defined in resource Knowledge Objects.

#### Running Example KOs in an Activator
You can now test the example objects in an activator. This is done most easily via the [kgrid cli](https://github.com/kgrid/kgrid-cli).
Download the cli using 
```
npm install -g @kgrid/cli
```
 and run 
 ```
 kgrid setup
```
 to download the required kgrid components and then in the `/collection` directory run
 ```
 kgrid start:activator
```
to start an activator that loads the example collection. You can then browse the collection by going to 
 [http://localhost:8080](http://localhost:8080)


### Package

You can use the [kgrid cli](https://github.com/kgrid/kgrid-cli) to package the collection of knowledge objects by going
into the `/collection` directory and running
```
kgrid package-all
```
This will add a checksum to the deployment spec of each object, which the remote runtimes will optionally use to help with caching.
