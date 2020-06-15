function bmicalc(inputs){
  height = inputs.height;
  weight = inputs.weight;
  return weight/Math.pow(height, 2);
}

module.exports = bmicalc
