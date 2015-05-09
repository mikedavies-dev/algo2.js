console.log('Hello world');

import Algo = require("./algo");

var stack = new Algo.Types.Stack();
stack.push("first item");
var item = stack.pop();

console.log("done");