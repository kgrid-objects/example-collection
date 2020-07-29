# Example Collection

This repository contains a collection of KGrid Knowledge Objects that demonstrate features
of the grid, good development practices, and useful tools.

## Anatomy of this Knowledge Object project.
The following structure is not an requirement or enforced, it is a recommendation based
on what the JavaScript and in particular Node community at large have been following by convention.

### Prerequisites
There are some bundled objects that have packaging features that require npm, npm is installed with Node.js
[npm](https://www.npmjs.com/get-npm). 

### Directories

* **collection/** contains one to many directories representing knowledge objects
  * **object-name** a directory for each knowledge object (e.g. _js-simple-v1.0_)
* **docs/** is a sub-directory for this information about these KOs

### Example Knowledge Objects
* [JS Simple v1.0](https://github.com/kgrid-objects/example-collection/tree/master/collection/js-simple-v1.0) 
        - Simple KO designed as a starting point. Demonstrates a simple project structure that runs in the nashorn environment using the javascript adapter.
* [JS Bundled v1.0](https://github.com/kgrid-objects/example-collection/tree/master/collection/js-bundled-v1.0) 
        - A bundled knowledge object that uses node to take multiple code artifacts and bundle into one file that can be run in the nashorn environment.
Requires node.js to build the object before it will run in the Knowledge Grid activator.
* [JS Executive v1.0](https://github.com/kgrid-objects/example-collection/tree/master/collection/js-executive-v1.0) 
        - An executive knowledge object which calls another object in the Knowledge Grid in the nashorn engine. Both this object
        and the object it calls have to be nashorn javascript objects.
* [Proxy Simple v1.0](https://github.com/kgrid-objects/example-collection/tree/master/collection/proxy-simple-v1.0) 
        - A javascript object that is run remotely in the [node runtime](https://github.com/kgrid/kgrid-node-runtime).
        Requires a node runtime that is connected to the activator to run.
* [Proxy Executive v1.0](https://github.com/kgrid-objects/example-collection/tree/master/collection/proxy-executive-v1.0) 
        - A javascript object that calls other objects and is run remotely in the [node runtime](https://github.com/kgrid/kgrid-node-runtime).
        Requires a node runtime that is connected to the activator to run.  
* [Proxy Multiartifact v1.0](https://github.com/kgrid-objects/example-collection/tree/master/collection/proxy-multiartifact-v1.0) 
     - A javascript object that has multiple code artifacts and is run remotely in the [node runtime](https://github.com/kgrid/kgrid-node-runtime).
     Requires a node runtime that is connected to the activator to run.
* [V8 Simple v1.0](https://github.com/kgrid-objects/example-collection/tree/master/collection/v8-simple-v1.0) 
      - A simple javascript object that runs in the GraalVM V8 engine.


### Adapters and running Knowledge Objects

Currently the KGrid Activator has several adapters that can be used to run knowledge objects: 
- The [Nashorn JavaScript engine](https://openjdk.java.net/projects/nashorn/) adapter for execution of JavaScript
Objects. Nashorn implements [ECMAScript 5.1 specification](http://www.ecma-international.org/ecma-262/5.1/)  
This limits the tools and technics avalable to the KO developer. The KGrid has experimented with
[webpack](https://webpack.js.org/) and [babel](https://babeljs.io/) as a method to all the developer it until
more current tools and techniques. An example is Nashorn doesn't support _const_ and _let_ statements but
use babel transpiler we can convert es6 to es5.
- The [GraalVM V8 Javascript engine](https://www.graalvm.org/docs/reference-manual/languages/js/) which is replacing the
Nashorn engine but is limited in different ways and is still under development. GraalVM is ECMAScript2020 compliant.
- The proxy adapter can use our [node.js](https://nodejs.org/en/) [proxy engine](https://github.com/kgrid/kgrid-node-runtime) which will run javascript in a node.js environment
and can load external dependencies.


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

