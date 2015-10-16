var Queue = function() {
	
	var count = 0;
	var first = null;
	var last = null;
	
	var LinkedListNode = function(item, next) {
		return {
			item: item,
			next: next
		}
	}
	
	var enqueue = function (item) {
		
		// add a new item to the end of the list
		var newLast = LinkedListNode(item, null);
		if (last != null)
			last.next = newLast;
			
		last = newLast;
		
		if (first == null)
			first = last;
			
		count++;
	};
	
	var dequeue = function () {
		
		if (first == null)
			return null;
			
		// get the result
		var result = first.item;
		
		// set the new first
		first = first.next;
		if (first == null)
			last = null;
			
		count--;
		return result;
	};
	
	var forEach = function (callback) {
		for (var node = first; node != null; node = node.next)
			callback(node.item);
	};
	
	var size = function () {
		return count;
	};
	
	return {
		enqueue: enqueue,
		dequeue: dequeue,
		forEach: forEach,
		size: size
	}
};

module.exports = Queue;