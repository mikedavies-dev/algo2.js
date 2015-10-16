/*
Linked list implementation of a stack
*/
var Stack = (function () {
	
	var LinkedListNode = function(item, next) {
		return {
			item: item,
			next: next
		}
	}
	
	var first = null;
	var count = 0;
	
	var push = function(item) {
		first = LinkedListNode(item, first);
		count++;
	}
	
	var pop = function() {
		
		if (!count)
			return null;
			
		var item = first.item;
		first = first.next;
		count--;
		
		return item;
	}
	
	var peek = function () {
		if (!count)
			return null;
			
		return first.item;
	};
	
	var forEach = function (callback) {
		for (var node = first; node != null; node = node.next)
			callback(node.item);
	};
	
	var size = function () {
		return count;
	};
	
	return {
		push: push,
		peek: peek,
		pop: pop,
		forEach: forEach,
		size: size
	};
});

module.exports = Stack;