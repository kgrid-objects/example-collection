
function welcome(inputs){
  let name = inputs.name;
  var iters = inputs.iterations || 0;
  var result = 0;
  for(var i = 0; i < iters; i++) {
    result += i;
  }
  let output = {};
  output.name=name;
  output.iterations=iters;
  output.result=result;
  output.correlation=inputs.correlation;

  return output;
}

module.exports=welcome;
