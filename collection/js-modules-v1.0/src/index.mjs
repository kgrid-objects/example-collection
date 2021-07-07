import {addTwo} from './math.mjs';

function welcome(inputs) {
    var name = inputs.name;
    var num = inputs.num;
    return "Welcome to the knowledge grid " + name + " " + addTwo(num);
}

export {welcome};