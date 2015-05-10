console.log('Hello world');

import Algo = require("./algo");

var queue = new Algo.Types.Queue();

for (var index = 0; index < 10; index++)
    queue.enqueue(index);

for (var index = 0; index < 10; index++)
    queue.dequeue();