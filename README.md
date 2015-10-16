## Data Structures / Algorithms for Node.js

A collection of data structures and algorithms for JavaScript

## Installation

```
npm install algo2
```


[![Build Status](https://travis-ci.org/ant-fx/algo2.js.svg?branch=master)](https://travis-ci.org/ant-fx/algo2.js)

[![NPM](https://nodei.co/npm/algo2.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/algo2/)
 

## Data Structures

### Stack

Sack is implemented via a linked list

```javascript
var Stack = require("algo2/containers/stack");
var stack = Stack();
        
for (var index = 0; index <= 10; index++)
    stack.push(index);

stack.forEach(function (item) {
    // use item (10, 9, 8, 7, ...)
});
       
stack.pop(); // 10
stack.pop(); // 9
stack.pop(); // 8
stack.pop(); // ..
    
```

### Queue

Queue is implemented via a linked list

```javascript
var Queue = require("algo2/containers/queue");
var queue = Queue();

for (var index = 0; index <= 10; index++)
    queue.enqueue(index);

stack.forEach(function (item) {
    // use item (0, 1, 2, 3, 4, ...)
});

stack.dequeue(); // 0
stack.dequeue(); // 1
stack.dequeue(); // 2
stack.dequeue(); // ..

```

### Bag

Bag is implemented via a linked list

```javascript
var Bag = require("algo2/containers/bag");
var bag = Bag();

bag.add(1);
bag.add(2);
bag.add(3);

bag.forEach(function (item) {
    console.log(item);
});
```

### Priority Queue

Implemented using a HEAP structure, the heap is represented using an array. The array will resize its self as data is added and removed.

```javascript
var PriorityQueue = require("algo2/containers/priorityqueue");
var queue = PriorityQueue(function (val1, val2) {
	// return val2 - val1; // low values first
    return val1 - val2; // high values first
});

queue.enqueue(12);
queue.enqueue(31);
queue.enqueue(200);
queue.enqueue(2);
queue.enqueue(32);
queue.enqueue(15);

// return the size of the queue
queue.size(); // 6

// get top without removing
queue.peek(); // 200

// remove
queue.dequeue(); // 200
queue.dequeue(); // 32
queue.dequeue(); // 31
queue.dequeue(); // 15
queue.dequeue(); // ..

// clear the queue
queue.clear(); 

```

## Algorithms

### Sorting

#### Bubble Sort

```javascript
var sort = require("algo2/sort/bubble");
var data = [654,42,66,3,12,54,76];
		
sort(data, function(val1, val2) {
	return val1 - val2; 
});
```

```javascript
var sort = require("algo2/sort/bubble");
var data = ["jerry", "tom", "daffy", "micky", "goofey"];
		
sort(data, function(val1, val2) {
	return val1.localeCompare(val2); 
}); 
```

#### Insertion Sort

```javascript
var sort = require("algo2/sort/insertion");
var data = [654,42,66,3,12,54,76];
		
sort(data, function(val1, val2) {
	return val1 - val2; 
});
```

```javascript
var sort = require("algo2/sort/insertion");
var data = ["jerry", "tom", "daffy", "micky", "goofey"];
		
sort(data, function(val1, val2) {
	return val1.localeCompare(val2); 
}); 
```

#### Selection Sort

```javascript
var sort = require("algo2/sort/selection");
var data = [654,42,66,3,12,54,76];
		
sort(data, function(val1, val2) {
	return val1 - val2; 
});
```

```javascript
var data = ["jerry", "tom", "daffy", "micky", "goofey"];
		
sort(data, function(val1, val2) {
	return val1.localeCompare(val2); 
});
``` 

#### Merge Sort (Top Down)

```javascript
var sort = require("algo2/sort/mergetopdown");
var data = [654,42,66,3,12,54,76];
		
sort(data, function(val1, val2) {
	return val1 - val2; 
});
```

```javascript
var sort = require("algo2/sort/mergetopdown");
var data = ["jerry", "tom", "daffy", "micky", "goofey"];
		
sort(data, function(val1, val2) {
	return val1.localeCompare(val2); 
}); 
```

#### Merge Sort (Bottom Up)

```javascript
var sort = require("algo2/sort/mergebottomup");
var data = [654,42,66,3,12,54,76];
		
sort(data, function(val1, val2) {
	return val1 - val2; 
});
```

```javascript
var sort = require("algo2/sort/mergebottomup");
var data = ["jerry", "tom", "daffy", "micky", "goofey"];
		
sort(data, function(val1, val2) {
	return val1.localeCompare(val2); 
}); 
```

#### Shell Sort

```javascript
var sort = require("algo2/sort/shell");
var data = [654,42,66,3,12,54,76];
		
sort(data, function(val1, val2) {
	return val1 - val2; 
});
```

```javascript
var sort = require("algo2/sort/shell");
var data = ["jerry", "tom", "daffy", "micky", "goofey"];
		
sort(data, function(val1, val2) {
	return val1.localeCompare(val2); 
}); 
```

#### Quick Sort

```javascript
var sort = require("algo2/sort/quick");
var data = [654,42,66,3,12,54,76];
		
sort(data, function(val1, val2) {
	return val1 - val2; 
});
```

```javascript
var sort = require("algo2/sort/quick");
var data = ["jerry", "tom", "daffy", "micky", "goofey"];
		
sort(data,function (val1, val2) {
	return val1.localeCompare(val2); 
}); 
```

#### Quick Sort (3 way)

```javascript
var sort = require("algo2/sort/quick3way");
var data = [654,42,66,3,12,54,76];
		
sort(data, function(val1, val2) {
	return val1 - val2; 
});
```

```javascript
var sort = require("algo2/sort/quick3way");
var data = ["jerry", "tom", "daffy", "micky", "goofey"];
		
sort(data, function (val1, val2) {
	return val1.localeCompare(val2); 
}); 
```

#### Heap Sort

```javascript
var sort = require("algo2/sort/heap");
var data = [654,42,66,3,12,54,76];
		
sort(data, function(val1, val2) {
	return val1 - val2; 
});
```

```javascript
var sort = require("algo2/sort/heap");
var data = ["jerry", "tom", "daffy", "micky", "goofey"];
		
sort(data, function (val1, val2) {
	return val1.localeCompare(val2); 
}); 
```

## TODO

### Types

* LinkedList
* HashTable

### Search

* BinarySearch
* BinarySearchTree
* BalancedSearchTree

### Graphs
### Strings