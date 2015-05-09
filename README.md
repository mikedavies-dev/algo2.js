# Data Structures / Algorithms for Node.js

## Installation

TODO

## Data Structures

### Stack

Sack is implemented via a linked list

### Queue

Queue is implemented via a linked list

```javascript
var Algo = require("algo2");
var queue = new Algo.Types.Queue();

for (var index = 0; index < 10; index++)
    queue.enqueue(index);

for (var index = 0; index < 10; index++)
    queue.dequeue();
```

### Bag

Bag is implemented via a linked list

```javascript
var bag = new Algo.Types.Bag();

bag.add(1);
bag.add(2);
bag.add(3);

bag.forEach(function (item) {
    console.log(item);
});
```

## Algorithms

### Sorting

#### Bubble
#### Merge
#### Insertion