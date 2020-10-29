const helper = require('./welcomeHelper.js');


function welcome(inputs){
    helper()
    let name = inputs.name;
    return "Welcome to Knowledge Grid, " + name
}

module.exports = welcome
