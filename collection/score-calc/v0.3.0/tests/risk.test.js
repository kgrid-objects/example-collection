const chdRisk = require('../src/index1');

describe("Risk", () => {
  test('male high risks', () => {
    let expectedChd = {"p": 4.62, "alpha": -20.1};
    let expectedNonChd = {"p": 5.47, "alpha": -25.7};

    expect(chdRisk("high", "male").coefficients.chd).toEqual(expectedChd);
    expect(chdRisk("high", "male").coefficients.nonchd).toEqual(expectedNonChd);
  })

  test('male low risks', () => {
    let expectedChd = {"p": 6.36, "alpha": -29.8};
    let expectedNonChd = {"p": 6.62, "alpha": -31};

    expect(chdRisk("low", "female").coefficients.chd).toEqual(expectedChd);
    expect(chdRisk("low", "female").coefficients.nonchd).toEqual(expectedNonChd);
  })
});
