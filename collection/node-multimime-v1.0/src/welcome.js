function welcome(inputs) {
    switch (typeof (inputs)) {
        case  'string':
            return "Welcome to Knowledge Grid, " + inputs;
        default:
            return "Welcome to Knowledge Grid, " + inputs.name;
    }
}

module.exports = welcome
