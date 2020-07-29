const welcome = require('../src/index');

test('hello greg (src)', () => {
  expect( welcome(
      {"name":"Greg", "language": "Italian"}))
           .toBe('Ciao, Greg')
});




