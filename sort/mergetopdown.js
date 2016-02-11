/*
	Merge Sort (Top Down)

	Recursive function that splits the data into N sets of arrays each with one element.
	These sub arrays of one element can all be considered to be sorted as they only have
	one element.

	The algorithm then recombines the arrays into the original array, stepping through
	each element of both arrays and looking for the lower element, then putting
	that element into the current array index

	Performance:

		Best: O(n log(n))
		Average: O(n log(n))
		Worst: O(n log(n))
		Space: O(n)
*/

module.exports = function(data, compare) {

  // allocate the temp array only once for the whole operation O(n) space
  var aux = new Array(data.length);

  // shared merge funciton used by both Top down and bottom up
  var mergeInternal = function(data, aux, isLess, low, mid, high) {

    var left = low,
      right = mid + 1,
			index= 0;

    for (index = low; index <= high; index++)
      aux[index] = data[index];

    for (index = low; index <= high; index++) {
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

  var sort = function(low, high) {

    if (high <= low)
      return;

    // calc the mid point
    var mid = Math.floor(low + (high - low) / 2);

    sort(low, mid);
    sort(mid + 1, high);

    // merge the results
    mergeInternal(data, aux, compare, low, mid, high);
  };

  // perform the recursive sort
  sort(0, data.length - 1);
};
