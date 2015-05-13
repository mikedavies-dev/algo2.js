var _this = this;
var Algo = require("./index");
var heapify = function (input, heapSize, index) {
    var left = (index + 1) * 2 - 1;
    var right = (index + 1) * 2;
    var largest = 0;
    if (left < heapSize && input[left] > input[index])
        largest = left;
    else
        largest = index;
    if (right < heapSize && input[right] > input[largest])
        largest = right;
    if (largest != index) {
        _this.Swap(input, index, largest);
        heapify(input, heapSize, largest);
    }
};
var toAdd = [];
for (var index = 0; index < 100; index++)
    toAdd.push(Math.round(Math.random() * 1000) % 1000);
Algo.Sort.Heap(toAdd, function (val1, val2) {
    return val2 - val1;
});
console.log(toAdd);
//# sourceMappingURL=app.js.map