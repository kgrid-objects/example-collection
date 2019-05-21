const welcome = require('../src/index')

test('hello barney (src)', () => {

  expect(
    welcome({'name': 'Barney Rubble'})
  ).toBe(
    'Welcome to Knowledge Grid, Barney Rubble'
  )

})




