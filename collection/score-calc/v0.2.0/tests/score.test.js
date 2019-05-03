const scoreFunction = require('../src/index')


test('Female non-smoker 65', () => {
    let inputs = {
        age: 65,
        gender: "female",
        smoker: 0,
        sbp: 120,
        cholesterol: 4,
        risk: "low"
    }

    let outputs = {
        "cvdrisk":{
            "chd": 0.005954730043426726,
            "nonchd": 0.008040824758006049,
            "total": 0.013995554801432775,
        }
    }

    expect(scoreFunction(inputs).cvdrisk).toEqual(outputs.cvdrisk);

});


test('Male smoker 40', () => {
    let inputs = {
        age: 40,
        gender: "male",
        smoker: 1,
        sbp: 180,
        cholesterol: 8,
        risk: "high"
    }

    let outputs = {
        "cvdrisk":{
            "chd": 0.040603014671173776,
            "nonchd": 0.00538908290017559,
            "total": 0.045992097571349366,
        }
    }

    expect(scoreFunction(inputs).cvdrisk).toEqual(outputs.cvdrisk);

});
