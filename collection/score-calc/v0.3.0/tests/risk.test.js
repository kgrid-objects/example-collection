const riskScore = require('../dist/main');

// describe("Risk Coefficients", () => {
//   test('male high risks', () => {
//     let expectedChd = {"p": 4.62, "alpha": -21.0};
//     let expectedNonChd = {"p": 5.47, "alpha": -25.7};
//
//     expect(riskScore.riskCoefficients("high", "male").coefficients.chd).toEqual(expectedChd);
//     expect(riskScore.riskCoefficients("high", "male").coefficients.nonchd).toEqual(expectedNonChd);
//   })
//
//   test('female low risks', () => {
//     let expectedChd = {"p": 6.36, "alpha": -29.8};
//     let expectedNonChd = {"p": 6.62, "alpha": -31};
//
//     expect(riskScore.riskCoefficients("low", "female").coefficients.chd).toEqual(expectedChd);
//     expect(riskScore.riskCoefficients("low", "female").coefficients.nonchd).toEqual(expectedNonChd);
//   })
// });

describe("CVD Risk Score", ()=>{
  test('male high risk', ()=>{
    let expectedscore = 0.49073888991903747
    expect(riskScore({"age":65,"gender":"male","risk":"high","sbp":180,"cholesterol":8,"smoker":1}).cvdrisk.total).toEqual(expectedscore)
  })
})
