const cvdscore = require('./cvdscore')

function score(inputs){
  return {cvdrisk: cvdscore(inputs.age,inputs.gender,inputs.risk,inputs.sbp,inputs.cholesterol,inputs.smoker)}
}

module.exports=score
