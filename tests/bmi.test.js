var rewire = require('rewire');

//Get load in the js
var javascript = rewire('../ri-bmicalc/v0.0.1/model/resource/bmi.js');

//Load in the function
var welcome = javascript.__get__("bmi_calc");


test('happy day test', () => {

  expect(welcome({"height": 10.3, "weight":40.1})).toBe(0.37798095956263544
  );


});


