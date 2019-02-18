
function welcome(inputs){
  var name = inputs.name;
  var iters = inputs.iterations || 0;
  var result = 0;
  for(var i = 0; i < iters; i++) {
    result += i;
  }
  return "Welcome to Knowledge Grid, " + name + ". result: " + result;
}

module.exports=welcome;
