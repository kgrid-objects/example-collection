const lib = require("./lib.js")
const hello = require("./hello.json")

module.exports = {

  welcome: function (inputs) {

    var index = -1
    for (var i = 0; i < hello.data.length; i++) {
      var obj = hello.data[i]
      var lang = inputs.language || "English"
      if (obj.language.toLowerCase() == lang.toLowerCase()) {
        index = i
        break
      }
    }
    var hi = 'The language is not found. \n Hello'
    if (index != -1) {
      hi = hello.data[index].hello
    }

    return lib.sayHi(hi, inputs.name)

  }
};
