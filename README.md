# Data Structures / Algorithms for Node.js

## Installation

TODO

## Data Structures

### Stack

Sack is implemented via a linked list

```javascript
var stack = new Algo.Types.Stack();
        
for (var index = 0; index < 10; index++)
    stack.push(index);

expect(stack.size()).to.equal(10);
        
for (var index = 9; index >= 0; index--)
    expect(stack.pop()).to.equal(index);
```

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

#### Merge (Top Down)

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

#### Merge (Bottom Up)

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

#### Insertion Sort

```javascript
var data = [654,42,66,3,12,54,76];
		
Algo.Sort.Insertion(data,(val1: number, val2: number) => {
	return val1 - val2; 
});
```

```javascript
var data = ["jerry", "tom", "daffy", "micky", "goofey"];
		
Algo.Sort.Insertion(data,(val1: string, val2: string) => {
	return val1.localeCompare(val2); 
}); 
```

#### Selection Sort

```javascript
var data = [654,42,66,3,12,54,76];
		
Algo.Sort.Selection(data,(val1: number, val2: number) => {
	return val1 - val2; 
});
```

```javascript
var data = ["jerry", "tom", "daffy", "micky", "goofey"];
		
Algo.Sort.Selection(data,(val1: string, val2: string) => {
	return val1.localeCompare(val2); 
}); 

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

#### Shell Sort

```javascript
var data = [654,42,66,3,12,54,76];
		
Algo.Sort.Quick3Way(data,(val1: number, val2: number) => {
	return val1 - val2; 
});
```

```javascript
var data = ["jerry", "tom", "daffy", "micky", "goofey"];
		
Algo.Sort.Shell(data,(val1: string, val2: string) => {
	return val1.localeCompare(val2); 
}); 

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