module.exports = function (data, compare) {
	
	var Swap = function (data, index1, index2) {
		var temp = data[index1];
		data[index1] = data[index2];
		data[index2] = temp;
	};
	
	var swapped = false, passes = 0;
	
	do {
		swapped = false;
		
		// once we have done one run we know that (data.length - passes) 
		// have been sorted so no need to do them again
		passes++;
		
		for (var index = 0; index < data.length - passes; index++) {
			if (compare(data[index], data[index + 1]) > 0) {
				Swap(data, index, index + 1);
				swapped = true;
			}
		}
	} while (swapped);
};