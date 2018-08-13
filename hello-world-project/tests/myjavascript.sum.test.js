var rewire = require('rewire');

//Get load in the js
var javascript = rewire('..//sample-object/v0.0.1/model/resource/myjavascript.js');

//Load in the function
var sum = javascript.__get__("sum");

test('positive numbers', () => {

  expect(sum({"firstNumber": 76, "secondNumber": 24})).toBe(100);
  expect(sum({"firstNumber": 0, "secondNumber": 0})).toBe(0);

});

test('negative numbers', () => {

  expect(sum({"firstNumber": 100, "secondNumber": -100})).toBe(0);
  expect(sum({"firstNumber": -5, "secondNumber": -5})).toBe(-10);

});

