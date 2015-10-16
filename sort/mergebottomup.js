/*
	The bottom up version of the merge sort (badly named in my opinion) doesn't actually work form the bottom,
	like the top down merge version it splits the array into sub arrays and sorts them individually starting
	with a sub array size of 1.
	
	After each run the sub array size is doubled (2, 4, 8, 16, etc)
*/

module.exports = function (data, compare) {
	var aux = new Array(data.length);
	
	// shared merge funciton used by both Top down and bottom up
    var mergeInternal = function (data, aux, isLess, low, mid, high) {
		
		var left = low, right = mid + 1;
		
		for (var index = low; index <= high; index++)
			aux[index] = data[index];
			
		for (var index = low; index <= high; index++) {
			if (left > mid)
				data[index] = aux[right++];
			else if (right > high)
				data[index] = aux[left++];
			else if (isLess(aux[right], aux[left]) < 0)
				data[index] = aux[right++];
			else
				data[index] = aux[left++];
		}
	};
	
	for (var subArraySize = 1; subArraySize < data.length; subArraySize = subArraySize * 2) {
		for (var low = 0; low < data.length - subArraySize; low += subArraySize * 2)
			mergeInternal(data, aux, compare, low, low + subArraySize - 1, Math.min(low + (subArraySize * 2) - 1, data.length - 1));
	}
};