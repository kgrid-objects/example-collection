import {addTwo} from './math.mjs';

function welcome(inputs) {
    let name = inputs.name;
    let num = inputs.num;
    return "Welcome to the knowledge grid " + name + " " + addTwo(num);
}

export {welcome};