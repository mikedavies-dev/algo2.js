/*
The 3 way version of the quick sort improves slightly over the standard quick sort in that it
checks for equal values. If an equal value is encountered no swapping is performed.
*/
module.exports = function(data, compare) {

  var Swap = function(data, index1, index2) {
    var temp = data[index1];
    data[index1] = data[index2];
    data[index2] = temp;
  };

  var sort = function(low, high) {

    if (high <= low)
      return;

    // use data[low] as the pivot value
    var pivot = data[low];
    var lt = low,
      index = low + 1,
      gt = high;

    while (index <= gt) {
      // get the compare value of index
      var comp = compare(data[index], pivot);

      // if we are less than pivot value swap with current left value
      if (comp < 0)
        Swap(data, lt++, index++);
      else if (comp > 0)
        Swap(data, index, gt--);
      else
        index++;
    }

    sort(low, lt - 1);
    sort(gt + 1, high);
  };
  sort(0, data.length - 1);
};
