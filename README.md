## Data Structures / Algorithms for Node.js

A collection of data structures and algorithms for JavaScript

## Installation

```
npm install algo2
```

```javascript
var Algo = require("algo2");
```

[![Build Status](https://travis-ci.org/ant-fx/algo2.js.svg?branch=master)](https://travis-ci.org/ant-fx/algo2.js)

[![NPM](https://nodei.co/npm/algo2.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/algo2/)
 

## Data Structures

### Stack

Sack is implemented via a linked list

```javascript
var stack = new Algo.Types.Stack();
        
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
var queue = new Algo.Types.Queue();

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

#### Bubble Sort

```javascript
var data = [654,42,66,3,12,54,76];
		
Algo.Sort.Bubble(data, function(val1, val2) {
	return val1 - val2; 
});
```

```javascript
var data = ["jerry", "tom", "daffy", "micky", "goofey"];
		
Algo.Sort.Bubble(data, function(val1, val2) {
	return val1.localeCompare(val2); 
}); 
```

#### Insertion Sort

```javascript
var data = [654,42,66,3,12,54,76];
		
Algo.Sort.Insertion(data, function(val1, val2) {
	return val1 - val2; 
});
```

```javascript
var data = ["jerry", "tom", "daffy", "micky", "goofey"];
		
Algo.Sort.Insertion(data, function(val1, val2) {
	return val1.localeCompare(val2); 
}); 
```

#### Selection Sort

```javascript
var data = [654,42,66,3,12,54,76];
		
Algo.Sort.Selection(data, function(val1, val2) {
	return val1 - val2; 
});
```

```javascript
var data = ["jerry", "tom", "daffy", "micky", "goofey"];
		
Algo.Sort.Selection(data, function(val1, val2) {
	return val1.localeCompare(val2); 
});
``` 

#### Merge Sort (Top Down)

```javascript
var data = [654,42,66,3,12,54,76];
		
Algo.Sort.MergeTopDown(data, function(val1, val2) {
	return val1 - val2; 
});
```

```javascript
var data = ["jerry", "tom", "daffy", "micky", "goofey"];
		
Algo.Sort.MergeTopDown(data, function(val1, val2) {
	return val1.localeCompare(val2); 
}); 
```

#### Merge Sort (Bottom Up)

```javascript
var data = [654,42,66,3,12,54,76];
		
Algo.Sort.MergeBottomUp(data, function(val1, val2) {
	return val1 - val2; 
});
```

```javascript
var data = ["jerry", "tom", "daffy", "micky", "goofey"];
		
Algo.Sort.MergeBottomUp(data, function(val1, val2) {
	return val1.localeCompare(val2); 
}); 
```

#### Shell Sort

```javascript
var data = [654,42,66,3,12,54,76];
		
Algo.Sort.Shell(data, function(val1, val2) {
	return val1 - val2; 
});
```

```javascript
var data = ["jerry", "tom", "daffy", "micky", "goofey"];
		
Algo.Sort.Shell(data, function(val1, val2) {
	return val1.localeCompare(val2); 
}); 
```

#### Quick Sort

```javascript
var data = [654,42,66,3,12,54,76];
		
Algo.Sort.Quick(data, function(val1, val2) {
	return val1 - val2; 
});
```

```javascript
var data = ["jerry", "tom", "daffy", "micky", "goofey"];
		
Algo.Sort.Quick(data,function (val1, val2) {
	return val1.localeCompare(val2); 
}); 
```

#### Quick Sort (3 way)

```javascript
var data = [654,42,66,3,12,54,76];
		
Algo.Sort.Quick3Way(data, function(val1, val2) {
	return val1 - val2; 
});
```

```javascript
var data = ["jerry", "tom", "daffy", "micky", "goofey"];
		
Algo.Sort.Quick3Way(data, function (val1, val2) {
	return val1.localeCompare(val2); 
}); 
```

## TODO

### Types

* PriorityQueue
* LinkedList
* HashTable

### Sort

* HeapSort

### Search

* BinarySearch
* BinarySearchTree
* BalancedSearchTree

### Graphs

* Shortest Paths

### Strings