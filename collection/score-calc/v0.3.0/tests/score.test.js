const scoreFunction = require('../src/index')
const path = require('path');
const tmp = require('tmp');
const fs = require('fs');

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
test('Male smoker 40', () => {

    expect( fs.existsSync( path.join(
        '/var/folders/dk/kvk31kf116z4_4cn4vv1n9hsp_bf8c/T/tmp-11151MPNXGAxN1Ryy', "grid", "activator", "kgrid-activator-1.0.9.jar") )).toBe(true);

});
