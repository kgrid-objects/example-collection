V8const welcome = require('../src/index');

test('hello barney (src)', () => {
  expect( welcome(
      {"name":"Greg", "language": "Italian"}))
           .toBe('Ciao, Greg')
});




