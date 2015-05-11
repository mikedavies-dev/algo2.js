# Data Structures / Algorithms for Node.js

## Installation

```
npm install algo2
```

[![NPM](https://nodei.co/npm/algo2.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/algo2/)

```javascript
var Algo = require("algo2");
```

## Data Structures

### Stack

Sack is implemented via a linked list

```javascript
var stack = new Algo.Types.Stack();
        
for (var index = 0; index < 10; index++)
    stack.push(index);
       
for (var index = 9; index >= 0; index--)
    stack.pop();
```

### Queue

Queue is implemented via a linked list

```javascript
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

#### Bubble Sort

```javascript
var data = [654,42,66,3,12,54,76];
		
Algo.Sort.Bubble(data,(val1: number, val2: number) => {
	return val1 - val2; 
});
```

```javascript
var data = ["jerry", "tom", "daffy", "micky", "goofey"];
		
Algo.Sort.Bubble(data,(val1: string, val2: string) => {
	return val1.localeCompare(val2); 
}); 
```

#### Merge Sort (Top Down)

```javascript
var data = [654,42,66,3,12,54,76];
		
Algo.Sort.MergeTopDown(data,(val1: number, val2: number) => {
	return val1 - val2; 
});
```

```javascript
var data = ["jerry", "tom", "daffy", "micky", "goofey"];
		
Algo.Sort.MergeTopDown(data,(val1: string, val2: string) => {
	return val1.localeCompare(val2); 
}); 
```

#### Merge Sort (Bottom Up)

```javascript
var data = [654,42,66,3,12,54,76];
		
Algo.Sort.MergeBottomUp(data,(val1: number, val2: number) => {
	return val1 - val2; 
});
```

```javascript
var data = ["jerry", "tom", "daffy", "micky", "goofey"];
		
Algo.Sort.MergeBottomUp(data,(val1: string, val2: string) => {
	return val1.localeCompare(val2); 
}); 
```



#### Shell Sort

```javascript
var data = [654,42,66,3,12,54,76];
		
Algo.Sort.Shell(data,(val1: number, val2: number) => {
	return val1 - val2; 
});
```

```javascript
var data = ["jerry", "tom", "daffy", "micky", "goofey"];
		
Algo.Sort.Shell(data,(val1: string, val2: string) => {
	return val1.localeCompare(val2); 
}); 
```

#### Quick Sort

```javascript
var data = [654,42,66,3,12,54,76];
		
Algo.Sort.Quick(data,(val1: number, val2: number) => {
	return val1 - val2; 
});
```

```javascript
var data = ["jerry", "tom", "daffy", "micky", "goofey"];
		
Algo.Sort.Quick(data,(val1: string, val2: string) => {
	return val1.localeCompare(val2); 
}); 
```

#### Quick Sort (3 way)

```javascript
var data = [654,42,66,3,12,54,76];
		
Algo.Sort.Quick3Way(data,(val1: number, val2: number) => {
	return val1 - val2; 
});
```

```javascript
var data = ["jerry", "tom", "daffy", "micky", "goofey"];
		
Algo.Sort.Quick3Way(data,(val1: string, val2: string) => {
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