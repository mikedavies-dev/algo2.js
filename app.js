var Algo = require("./index");
var compare = function (val1, val2) {
    return val2 - val1;
};
var q = new Algo.Types.PriorityQueue(compare);
var toAdd = [22, 3, 1, 32432, 1];
toAdd.forEach(function (e) {
    q.enqueue(e);
});
// iterate the queue
var sorted = toAdd.slice();
sorted.sort(compare);
var count = 0;
sorted.forEach(function (val) {
    var val2 = q.dequeue();
    console.log(val, val2);
    count++;
});
//# sourceMappingURL=app.js.map