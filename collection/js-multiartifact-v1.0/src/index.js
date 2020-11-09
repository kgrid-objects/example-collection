import getTheWordStuff from './stuff'

function welcome(inputs) {
  const name = inputs.name;
  return "Welcome to Knowledge Grid, " + name + "Check out this " + getTheWordStuff();
}
