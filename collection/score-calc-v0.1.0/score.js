function score(inputs){

  var betaCoefficients = {
    "chd":{
      "smoker": 0.71,
      "cholesterol":0.24,
      "sbp":0.018
    },
    "nonchd":{
      "smoker": 0.63,
      "cholesterol":0.02,
      "sbp":0.022
    }
  }

  var s_coefficients = [
    {
      "risk": "low",
      "gender": "male",
      "coefficients": {
        "chd": {
          "alpha": -22.1,
          "p": 4.71
        },
        "nonchd": {
          "alpha": -26.7,
          "p": 5.64
        }
      }
    },
    {
      "risk": "low",
      "gender": "female",
      "coefficients": {
        "chd": {
          "alpha": -29.8,
          "p": 6.36
        },
        "nonchd": {
          "alpha": -31,
          "p": 6.62
        }
      }
    },
    {
      "risk": "high",
      "gender": "male",
      "coefficients": {
        "chd": {
          "alpha": -21,
          "p": 4.62
        },
        "nonchd": {
          "alpha": -25.7,
          "p": 5.47
        }
      }
    },
    {
      "risk": "high",
      "gender": "female",
      "coefficients": {
        "chd": {
          "alpha": -28.7,
          "p": 6.23
        },
        "nonchd": {
          "alpha": -30,
          "p": 6.42
        }
      }
    }
  ]
  // Extract proper coefficients
  var s_index= -1
  if(inputs.risk && inputs.gender){
    s_coefficients.forEach(function(e, index){
      if((e.risk==inputs.risk.toLowerCase()) && (e.gender==inputs.gender.toLowerCase())){
        s_index = index
      }
    })
  }

  var result={}
  if(s_index!=-1){
    var coefficients = s_coefficients[s_index].coefficients
    // Step 1
    var s0_chd = survivalprob(coefficients.chd, inputs.age)
    var s0_10_chd = survivalprob(coefficients.chd, inputs.age+10)
    var s0_nonchd = survivalprob(coefficients.nonchd, inputs.age)
    var s0_10_nonchd = survivalprob(coefficients.nonchd, inputs.age+10)
    // Step 2
    var w_chd = weightedsum(inputs.cholesterol, inputs.sbp, inputs.smoker,betaCoefficients.chd)
    var w_nonchd = weightedsum(inputs.cholesterol, inputs.sbp, inputs.smoker,betaCoefficients.nonchd)
    // Step 3
    var s_age_chd = Math.pow(s0_chd, Math.exp(w_chd))
    var s_age10_chd = Math.pow(s0_10_chd, Math.exp(w_chd))
    var s_age_nonchd = Math.pow(s0_nonchd, Math.exp(w_nonchd))
    var s_age10_nonchd = Math.pow(s0_10_nonchd, Math.exp(w_nonchd))
    // Step 4
    var s10_chd = s_age10_chd/s_age_chd
    var s10_nonchd = s_age10_nonchd/s_age_nonchd
    // Step 5
    var risk10_chd = 1-s10_chd
    var risk10_nonchd = 1-s10_nonchd
    // Step 6
    var cvdrisk10 = risk10_chd+risk10_nonchd
    // Construct Output
    result.cvdrisk = {}
    result.cvdrisk.total= cvdrisk10
    result.cvdrisk.chd = risk10_chd
    result.cvdrisk.nonchd = risk10_nonchd
  }
  return result
}

function survivalprob(coeff, age) {
  var s = Math.exp((-1)*Math.exp(coeff.alpha)*Math.pow((age-20),coeff.p))
  return s
}

function weightedsum(cholesterol, sbp, smoker, beta){
  var w =0
  w= w+beta.cholesterol*(cholesterol-6)
  w=w+beta.sbp*(sbp-120)
  if(smoker){
    w=w+beta.smoker
  }
  return w;
}

// module.exports=score
