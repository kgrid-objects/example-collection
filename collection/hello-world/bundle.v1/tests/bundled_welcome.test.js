const base = require('../src/index')

test('hello barney (src)', () => {

  expect(
    base.welcome({'name': 'Barney Rubble'})
  ).toBe(
    'Welcome to Knowledge Grid, Barney Rubble'
  )

})




