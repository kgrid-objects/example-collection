var rewire = require('rewire');

//Get load in the js
var javascript = rewire('../model/resource/echo.js');

//Load in the function
var echo = javascript.__get__("echo");


test('happy day test', () => {

  expect(echo("once more unto the breach")).toBe("once more unto the breach");

});

