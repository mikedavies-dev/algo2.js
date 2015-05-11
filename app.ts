console.log('Hello world');

import Algo = require("./algo");

var data2 = [20, 42, 66, 3, 12, 54, 76, 44, 1];

console.log(data2);

Algo.Sort.Quick3Way(data2,(val1: number, val2: number) => {
    return val1 - val2;
});



console.log(data2);