/*
	Selection Sort

	Iterate the data list from I = 0 to data.length, for each I iterate
	from I+1 to N to find the smallest value in the array. If found exchange
	with I

	Performance:

		Best: O(n^2)
		Average: O(n^2)
		Worst: O(n^2)
		Space: O(1)
*/

module.exports = function(data, compare) {

  var Swap = function(data, index1, index2) {
    var temp = data[index1];
    data[index1] = data[index2];
    data[index2] = temp;
  };

  for (var index = 0; index < data.length; index++) {
    for (var inner = index + 1; inner < data.length; inner++) {
      var min = index;

      if (compare(data[inner], data[min]) < 0)
        min = inner;

      if (min != index)
        Swap(data, min, index);
    }
  }
};
