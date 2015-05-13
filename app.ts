
import Algo = require("./index");

var heapify = (input: Object[], heapSize: number, index: number) => {

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
        this.Swap(input, index, largest);
        heapify(input, heapSize, largest);
    }
}

var toAdd = [];

for (var index = 0; index < 100; index++)
    toAdd.push(Math.round(Math.random() * 1000) % 1000);


Algo.Sort.Heap(toAdd,(val1: number, val2: number) => {
    return val2 - val1;
});

console.log(toAdd);


