/*
	Heap Sort
	The heap sort uses a max heap structure. The first step is to arrange the data so
	that it forms a valid max-heap. (all values below are lower than those above but
	dont have to be in order).
	
	1) This is done by going from I = N/2, I-- and checking node against it's children.
	If either of the children are larger swap with the largest of the two children, then
	continue down to the next set of children completing the same process
	
	2) Once in max-heap valid format we know that the first element is the highest value so we
	take that value and swap it with the last element in the array data[N-1], then we decrease
	the heap size and run step 1 again with an index of 0 to check to see if it has any
	larger children, if so swap (see step 1 above).
	
	3) We continue this process until our heapsize reaches 1 at which point the array is sorted.
	This sorting algorithm is very attractive because it is relativley fast O(n log(n)) but
	does not require any additional processing space
	
	Performance:
		Best: O(n log(n))
		Average: O(n log(n))
		Worst: O(n log(n))
		Space: O(1)
*/

module.exports = function (data, compare) {
	
	var Swap = function (data, index1, index2) {
		var temp = data[index1];
		data[index1] = data[index2];
		data[index2] = temp;
	};
	var heapSize = data.length;
	
	var sink = function (index) {
		while (heapSize - 1 > index * 2) {
			
			// calculate first child
			var toCheck = (index * 2) + 1;
			
			// do we have a second child? if so, is it bigger?
			if (toCheck < heapSize - 1 && compare(data[toCheck], data[toCheck + 1]) < 0)
				toCheck++;
				
			// check the values2
			if (compare(data[index], data[toCheck]) < 0)
				Swap(data, index, toCheck);
				
			// check next set of children
			index = toCheck;
		}
	};
	
	for (var index = Math.floor(heapSize / 2); index >= 0; index--)
		sink(index);
		
	for (var index = data.length - 1; index > 0; index--) {
		// swap with the end
		Swap(data, 0, index);
		heapSize--;
		sink(0);
	}
};