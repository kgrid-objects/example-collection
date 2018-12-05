function bmi_calc(inputs){
  height = inputs.height;
  weight = inputs.weight;
  return weight/Math.pow(height, 2);
}
