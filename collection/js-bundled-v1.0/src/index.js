const lib = require("./lib.js")
const hello = require("./hello.json")


function welcome(inputs) {

    let index = -1
    for (let i = 0; i < hello.data.length; i++) {
        let obj = hello.data[i]
        let lang = inputs.language || "English"
        if (obj.language.toLowerCase() == lang.toLowerCase()) {
            index = i
            break
        }
    }
    let hi = 'The language is not found. \n Hello'
    if (index != -1) {
        hi = hello.data[index].hello
    }

    return lib.sayHi(hi, inputs.name)

}

let globals = {};
module.exports = welcome;
