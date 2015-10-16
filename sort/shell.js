/*
	Shell sort

	One of the disadvantages of the insertion sort is that smaller values to the right of the array
	need to me moved individually to the left one step at a time, if the value at N-1 is the smallest,
	it requires N operations to move it to the beginning.
	
	The shell sort attempts to speed up this process by adding an additional loop to create 'window'
	(also known as H sorting) starting at a width of approx N/3 and stepping through, this allows
	smaller values to move to the left at a much faster rate than a standard insertion sort
	After each outer loop the window size is decreased by a factor of 3.
	
	The increment sequence used in this sort is WindowSize = 3 / N + 1 which according to Sedewick
	has been shown to show acceptable results during testing
	
	This is one of the fastests 100% inline [space O(1)] sorting functions available

	Performance:
		Best: O(n)
		Average: O((nlog(n))^2)
		Worst: O((nlog(n))^2)
		Space: O(1)

*/

module.exports = function (data, compare) {
	
	var Swap = function (data, index1, index2) {
		var temp = data[index1];
		data[index1] = data[index2];
		data[index2] = temp;
	};
	
	// calculate the initial window size
	var windowSize = 1;
	while (windowSize < data.length / 3)
		windowSize = 3 * windowSize + 1;
		
	while (windowSize >= 1) {
		for (var index = windowSize; index < data.length; index++) {
			for (var inner = index; inner >= windowSize && compare(data[inner], data[inner - windowSize]) < 0; inner -= windowSize)
				Swap(data, inner, inner - windowSize);
		}
		
		// reduce the size of the window until 1 (1 = insertion sort)
		windowSize = Math.floor(windowSize / 3);
	}
};