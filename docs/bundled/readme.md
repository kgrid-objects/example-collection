# Bundled Object Example

Currently the KGrid Activator uses the 
[Nashorn JavaScript engine](https://openjdk.java.net/projects/nashorn/ ) for execution of JavaScript 
Objects.  Nashorn implements [ECMAScript 5.1 specification](http://www.ecma-international.org/ecma-262/5.1/)  
This limits the tools and technics avalable to the KO developer.  The KGrid has experimented with 
[webpack](https://webpack.js.org/) and [babel](https://babeljs.io/) as a method to all the developer it until
more current tools and techniques.  Very simple example is Nashorn doesn't support _const_ and _let_ statements but 
use babel transpiler we can convert es6 to es5.

Please review [Hello World](https://github.com/kgrid-objects/example-collection/tree/master/collection/hello-world)
_bundle.v1_ and _bundle.v2_ implementations.