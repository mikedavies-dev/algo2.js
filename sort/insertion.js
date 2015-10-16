/*
	Insertion sort
	
	Works starting with a single array of 1 and assuming it to be
	sorted. It gets the current value at i, then scans from i to 0 backways,
	if value is greater than the current value they are swapped
	
	Performance:
	Best: O(n)
	Average: O(n^2)
	Worst: O(n^2)
	Space: O(1)
*/

module.exports = function (data, compare) {
	
	var Swap = function (data, index1, index2) {
		var temp = data[index1];
		data[index1] = data[index2];
		data[index2] = temp;
	};
	
	for (var index = 1; index < data.length; index++) {
		for (var inner = index; inner > 0 && data[inner] < data[inner - 1]; inner--) {
			Swap(data, inner, inner - 1);
		}
	}
};