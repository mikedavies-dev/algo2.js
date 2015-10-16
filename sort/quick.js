/*

	the quick sort works by selecting a pivot point and ordering all
	values greater than the pivot to the right and all vlues less
	than the pivot to the left leaving the pivot value in the middle
	This process is repeated for smaller and smaller array sizes until
	the array is finally 100% sorted
	
	Performance:
		Best: O(n log(n))
		Average: O(n log(n))
		Worst: O(n^2)
		Space: O(log(n))
		
*/

module.exports= function (data, compare) {
	
	var Swap = function (data, index1, index2) {
		var temp = data[index1];
		data[index1] = data[index2];
		data[index2] = temp;
	};
	
	var partition = function (low, high) {
		
		var left = low, right = high + 1, pivot = data[low]; // use position [low] as pivot value
		while (true) {
			
			while (compare(data[++left], pivot) < 0) {
				if (left == high)
					break;
			}
			while (compare(pivot, data[--right]) < 0) {
				if (right == low)
					break;
			}
			
			// if we didn't find any break
			if (left >= right)
				break;
				
			// swap the two around
			Swap(data, left, right);
		}
		
		// finally swap the right value with pivot to put pivot in its correct location
		Swap(data, low, right);
		return right;
	};
	
	var sort = function (low, high) {
		if (high <= low)
			return;
		
		var pivot = partition(low, high);
		
		// recursive (assume position pivot is in correct position)
		sort(low, pivot - 1);
		sort(pivot + 1, high);
	};
	
	sort(0, data.length - 1);
};