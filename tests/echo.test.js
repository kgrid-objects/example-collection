var rewire = require('rewire');

//Get load in the js
var javascript = rewire('../collection/mvo-kgrid/v0.0.1/model/resource/echo.js');

//Load in the function
var echo = javascript.__get__("echo");


test('happy day test', () => {

  expect(echo("once more unto the breach")).toBe("once more unto the breach");

});


