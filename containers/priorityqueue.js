var PriorityQueue = function(compare) {
	
	var data = [];
	var count = 0;
	
	// clear the queue of all its contents
	var clear = function () {
		data = [0];
		count = 1;
	};
	
	var size = function () {
		return count - 1;
	};
	
	clear();
	
	// returns the current next item but do not remove it from the queue
	var peek = function () {
		
		if (size() < 0)
			return null;
			
		return data[1];
	};
	
	var isGreater = function (index1, index2) {
		return compare(data[index1], data[index2]) > 0;
	};
	
	// return the next item and remove it from the queue
	var dequeue = function () {
		
		if (size() < 0)
			return null;
			
		// get the first item
		var ret = data[1];
		
		// move the last item to the top
		swap(1, count - 1);
		
		// remove old reference to alst
		data[count - 1] = null;
		
		// decrement size
		count--;
		
		// rearrange the list (top down)
		sink(1);
		
		// free up memory
		if (count <= data.length / 2)
			data = data.slice(0, (data.length / 2) + 1);
			
		return ret;
	};
	
	var poll = function () {
		return dequeue();
	};
	
	// add a new item to the queue
	var enqueue = function (item) {
		// set the new array item
		data[count] = item;
		// rearrange the list (bottom up)
		swim(count);
		count++;
	};
	
	var offer = function (item) {
		enqueue(item);
	};
	
	
	
	// check the parent node recursivley, if the parent is less than the 
	// child swap them then move up again until we get to the top
	var swim = function (index) {
		
		// after adding an item check the child's parent, 
		// if its less than us swap the move up a level
		
		while (index > 1) {
			if (isGreater(Math.floor(index / 2), index))
				swap(Math.floor(index / 2), index);
			index = Math.floor(index / 2);
		}
	};
	
	var sink = function (index) {
		
		while (count > index * 2) {
			var toCheck = index * 2;
			
			// do we have a second child? if so compare
			if (toCheck < count - 1 && isGreater(toCheck, toCheck + 1))
				toCheck++;
				
			// check the values2
			if (isGreater(index, toCheck))
				swap(index, toCheck);
				
			// check next set of children
			index = toCheck;
		}
	};
	
	var swap = function (index1, index2) {
		var temp = data[index1];
		data[index1] = data[index2];
		data[index2] = temp;
	};
	
	return {
		peek: peek,
		enqueue: enqueue,
		dequeue: dequeue,
		poll: poll,
		offer: offer,
		size: size,
		clear: clear
	};
};

module.exports = PriorityQueue;