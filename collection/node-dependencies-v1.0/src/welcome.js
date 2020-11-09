const ns = require('number-string');

function welcome(inputs){
  let name = inputs.name;
  let price = inputs.price;
  return "Welcome to Knowledge Grid, " + name + ". The price of milk today is: " + ns.toNumber(price);
}

module.exports = welcome
