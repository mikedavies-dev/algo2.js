/// <reference path="scripts/typings/node/node.d.ts" />
/*
Copyright Mike Davies <http://antfx.com>
Time/space complexities from http://bigocheatsheet.com/
*/
/* Container Types */
var AlgoJS;
(function (AlgoJS) {
    var Types;
    (function (Types) {
        /*
        Internal node class used in linked list structures
        */
        var LinkedListNode = (function () {
            function LinkedListNode(item, next) {
                this.item = item;
                this.next = next;
            }
            return LinkedListNode;
        })();
        /*
        Linked list implementation of a stack
        */
        var Bag = (function () {
            function Bag() {
                this.first = null;
                this.count = 0;
            }
            Bag.prototype.add = function (item) {
                this.first = new LinkedListNode(item, this.first);
                this.count++;
            };
            Bag.prototype.forEach = function (callback) {
                for (var node = this.first; node != null; node = node.next)
                    callback(node.item);
            };
            Bag.prototype.size = function () {
                return this.count;
            };
            return Bag;
        })();
        Types.Bag = Bag;
        /*
        Linked list implementation of a stack
        */
        var Stack = (function () {
            function Stack() {
                this.first = null;
                this.count = 0;
            }
            Stack.prototype.push = function (item) {
                this.first = new LinkedListNode(item, this.first);
                this.count++;
            };
            Stack.prototype.pop = function () {
                if (this.size() == 0)
                    return null;
                // get the return item
                var item = this.first.item;
                // set the new head
                this.first = this.first.next;
                this.count--;
                return item;
            };
            Stack.prototype.peek = function () {
                if (this.size() == 0)
                    return null;
                return this.first.item;
            };
            Stack.prototype.forEach = function (callback) {
                for (var node = this.first; node != null; node = node.next)
                    callback(node.item);
            };
            Stack.prototype.size = function () {
                return this.count;
            };
            return Stack;
        })();
        Types.Stack = Stack;
        /*
        Linked list implementation of a stack
        */
        var Queue = (function () {
            function Queue() {
                this.count = 0;
                this.first = null;
                this.last = null;
            }
            Queue.prototype.enqueue = function (item) {
                // add a new item to the end of the list
                var newLast = new LinkedListNode(item, null);
                if (this.last != null)
                    this.last.next = newLast;
                this.last = newLast;
                if (this.first == null)
                    this.first = this.last;
                this.count++;
            };
            Queue.prototype.dequeue = function () {
                if (this.first == null)
                    return null;
                // get the result
                var result = this.first.item;
                // set the new first
                this.first = this.first.next;
                if (this.first == null)
                    this.last = null;
                this.count--;
                return result;
            };
            Queue.prototype.forEach = function (callback) {
                for (var node = this.first; node != null; node = node.next)
                    callback(node.item);
            };
            Queue.prototype.size = function () {
                return this.count;
            };
            return Queue;
        })();
        Types.Queue = Queue;
    })(Types = AlgoJS.Types || (AlgoJS.Types = {}));
})(AlgoJS || (AlgoJS = {}));
/* Sorting */
var AlgoJS;
(function (AlgoJS) {
    var Sort = (function () {
        function Sort() {
        }
        Sort.Swap = function (data, index1, index2) {
            var temp = data[index1];
            data[index1] = data[index2];
            data[index2] = temp;
        };
        /*
        Bubble Sort (or sinking sort)
        
        The bubble sort works by iterating through the array and checking the index and index+1
        items. If data[index+1] > data[index] then a swap is performed and a 'swapped' flag is set
        
        After reaching the end of the array, if the swapped flag is set to true then 'swapped' is
        set back to false and another pass is performed.
        
        The process is repeated until a pass in performed in which the 'swapped' flag is not set
        
        Performance:
            Best: O(n)
            Average: O(n^2)
            Worst: O(n^2)
            Space: O(1)
        */
        Sort.Bubble = function (data, compare) {
            var swapped = false, passes = 0;
            do {
                swapped = false;
                // once we have done one run we know that (data.length - passes) 
                // have been sorted so no need to do them again
                passes++;
                for (var index = 0; index < data.length - passes; index++) {
                    if (compare(data[index], data[index + 1]) > 0) {
                        this.Swap(data, index, index + 1);
                        swapped = true;
                    }
                }
            } while (swapped);
        };
        /*
        Insertion sort
        
        Works starting with a single array of 1 and assuming it to be
        sorted. It gets the current value at i, then scans from i to 0 backways,
        if value is	greater than the current value they are swapped
        
        Performance:

            Best: O(n)
            Average: O(n^2)
            Worst: O(n^2)
            Space: O(1)
        
        */
        Sort.Insertion = function (data, compare) {
            for (var index = 0; index < data.length; index++) {
                var nextValue = data[index];
                for (var inner = index; inner > 0 && compare(nextValue, data[inner - 1]) < 0; inner--)
                    data[inner] = data[inner - 1];
                data[inner] = nextValue;
            }
        };
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
        Sort.Shell = function (data, compare) {
            // calculate the initial window size
            var windowSize = 1;
            while (windowSize < data.length / 3)
                windowSize = 3 * windowSize + 1;
            while (windowSize >= 1) {
                for (var index = windowSize; index < data.length; index++) {
                    for (var inner = index; inner >= windowSize && compare(data[inner], data[inner - windowSize]) < 0; inner -= windowSize)
                        this.Swap(data, inner, inner - windowSize);
                }
                // reduce the size of the window until 1 (1 = insertion sort)
                windowSize = Math.floor(windowSize / 3);
            }
        };
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
        Sort.Selection = function (data, compare) {
            for (var index = 0; index < data.length; index++) {
                for (var inner = index + 1; inner < data.length; inner++) {
                    var min = index;
                    if (compare(data[inner], data[min]) < 0)
                        min = inner;
                    if (min != index)
                        this.Swap(data, min, index);
                }
            }
        };
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
        Sort.Quick = function (data, compare) {
            var _this = this;
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
                    _this.Swap(data, left, right);
                }
                // finally swap the right value with pivot to put pivot in its correct location
                _this.Swap(data, low, right);
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
        Sort.Quick3Way = function (data, compare) {
            var _this = this;
            var sort = function (low, high) {
                if (high <= low)
                    return;
                // use data[low] as the pivot value
                var pivot = data[low];
                var lt = low, index = low + 1, gt = high;
                while (index <= gt) {
                    // get the compare value of index
                    var comp = compare(data[index], pivot);
                    // if we are less than pivot value swap with current left value
                    if (comp < 0)
                        _this.Swap(data, lt++, index++);
                    else if (comp > 0)
                        _this.Swap(data, index, gt--);
                    else
                        index++;
                }
                sort(low, lt - 1);
                sort(gt + 1, high);
            };
            sort(0, data.length - 1);
        };
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
        Sort.MergeTopDown = function (data, compare) {
            // allocate the temp array only once for the whole operation O(n) space
            var aux = new Array(data.length);
            var sort = function (low, high) {
                if (high <= low)
                    return;
                // calc the mid point
                var mid = Math.floor(low + (high - low) / 2);
                sort(low, mid);
                sort(mid + 1, high);
                // merge the results
                Sort._mergeInternal(data, aux, compare, low, mid, high);
            };
            // perform the recursive sort
            sort(0, data.length - 1);
        };
        /*
        
        The bottom up version of the merge sort (badly named in my opinion) doesn't actually work form the bottom,
        like the top down merge version it splits the array into sub arrays and sorts them individually starting
        with a sub array size of 1.

        After each run the sub array size is doubled (2, 4, 8, 16, etc)

        */
        Sort.MergeBottomUp = function (data, compare) {
            var aux = new Array(data.length);
            for (var subArraySize = 1; subArraySize < data.length; subArraySize = subArraySize * 2) {
                for (var low = 0; low < data.length - subArraySize; low += subArraySize * 2)
                    Sort._mergeInternal(data, aux, compare, low, low + subArraySize - 1, Math.min(low + (subArraySize * 2) - 1, data.length - 1));
            }
        };
        // shared merge funciton used by both Top down and bottom up
        Sort._mergeInternal = function (data, aux, isLess, low, mid, high) {
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
        return Sort;
    })();
    AlgoJS.Sort = Sort;
})(AlgoJS || (AlgoJS = {}));
module.exports = AlgoJS;
//# sourceMappingURL=algo.js.map