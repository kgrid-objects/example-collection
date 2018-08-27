# Example KO Projects
This repository contains a collection of KGrid Knowledge Objects that demonstrate features 
of the grid, good development practices and useful tools.


- [Knowledge Object Project Anatomy](#anatomy-of-this-knowledge-object-project)
  * [Prerequisites](#rerequisites)
  * [Directories](#directories)
  * [Testing](#testing)
  * [Package](#package)
  * [Tools](#tools)
- [Example Knowledage Objects](#example-knowledge-objects )  

## Anatomy of this Knowledge Object project.
The following structure is not an requirement or enforced, it is a recommendation based 
on what the JavaScript and in particular Node community at large have been following by convention.

### Prerequisites
There are testing and packaging features in this project that require npm, npm is installed with Node.js
[npm](https://www.npmjs.com/get-npm).  Once npm is installed run  ```npm install``` at the root of this project.

### Directories

* **naan-name/** is intended for each knowledge object (e.g. _hello-world_)
* **tests/** is for all of your project test scripts
* **etc/** is a sub-directory for miscellaneous project
* **docs/** is a sub-directory for more detailed information about these KOs
* **dist/** is created and destroyed when running ```npm run package``` 
* **scripts/** is intended to capture various scripts need for the project (using [scripty](https://www.npmjs.com/package/scripty))
* **scriptswin/** windows versions of the scripts


### Testing 
Sample tests are located in the tests directory and can be executed using _npm_.  These tests utilize 
[Jest](https://jestjs.io/) and  [rewire](https://github.com/jhnns/rewire). est provides the testing 
framework and rewire allows the tests to access the javascript function without the 
convienace of the export modules (KGrid Javascript adaptor limitation).  The [tests](../tests) are in 
the tests directory.  You can execute the tests via npm

```
npm test
```

### Running Example KOs in an Activator
The activator can look in any directory for KOs.  We can point a local instance of the activator to our cloned _example-kos_
for development and testing.

1. Clone this repository ```git clone https://github.com/kgrid-objects/example-kos.git```
1. Download the latest activator jar from [GitHub Latest Activator Release](https://github.com/kgrid/kgrid-activator/releases/latest).  

Now we will need to start the activator and use the _example ko_ repostory as the shelf location (the activator defaults to a relative _shelf_ location but can be configured).  The activator uses a directory name pattern *-* in order to identify KOs.  Therefore the activator will discovery the hello-world, mvo-kgrid, ri-bmicalc KOs with _example-kos_ as the shelf. Here is an example:

1. You have downloaded the latest activator into your user directory _/Users/barney/kgrid-activator-0.6.6.jar_
1. You have cloned the example-kos repostory into your user directory _/Users/barney/example-kos_
1. Now navigate to the your user directory and start the activator 

```
java -jar kgrid-activator-#.#.#.jar --kgrid.shelf.cdostore.url=filesystem:file:///Users/barney/example-kos
```

This tells the activator to scan the shelf at /Users/barney/example-kos for possible KOs using the *-* directory path pattern.  You will notice the activator will log entites that it was unable to read or activate. 

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

## Example Knowledge Objects 
 * [Hello World](hello-world) - Simple KO designed as a starting point. Demostrates a project structure the includes unit testing and scripts to package the KO deposit.
 * [BMI Calculator](ri-bmicalc) -  Simple KO designed to calculate BMI based on height and weight.  Demostrates passing mulitple attributes. 
 * [Minimum Viable](mvo-kgrid) -  Simple KO designed demostrate the smallest amount of information needed to get KO

## List of other awesome KGrid Knowledge Object projects
Other interesting collections

* [Cancer Risk](https://github.com/kgrid-objects/cancer-risk)- Knowledge Objects of Cancer risk 
predictive models and risk score interpretations
* [Opioid Collection](https://github.com/kgrid-objects/mopen-opioid-collection) - This is a collection 
of KOs for KGrid that can be used to identify and report on certain features of opioid prescribing
