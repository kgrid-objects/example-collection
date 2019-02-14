const base = require('../src/index')

test('hello barney (src)', () => {

  expect(
    base.welcome({"name":"Greg", "language": "Italian"})
  ).toBe(
    'Ciao, Greg'
  )

})




