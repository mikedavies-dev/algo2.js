/// <reference path="scripts/typings/node/node.d.ts" />

/* Container Types */

module AlgoJS.Types {
    export class Bag {
        public add(item) {
        }

        public isEmpty(): boolean {
            return true;
        }

        public size(): number {
            return 0;
        }
    }

    export class Stack {

        items: any[];
        length: number;

        constructor() {
            this.items = new Array(10);
            this.length = 0;
        }

        public push(item) {
            if (this.items.length == this.length)
                this.resize(this.length * 2);

            this.items[this.length++] = item;
        }

        public pop() {

            if (this.isEmpty())
                return null;

            var result = this.items[--this.length];

            if (this.length > 0 && this.length == this.items.length / 2)
                this.resize(this.items.length / 2);

            return result;
        }

        public peek() {

            if (this.isEmpty())
                return null;

            return this.items[this.length];
        }

        public isEmpty(): boolean {
            return this.length == 0;
        }

        private resize(newSize): void {
            var arr = new Array(newSize);

            for (var i = 0; i < this.items.length; i++)
                arr[i] = this.items[i];

            this.items = arr;
        }

        public size(): number {
            return this.length;
        }
    }
}

/* Sorting */

module AlgoJS {

    interface IsLessSortComparer {
        (val1: Object, val2: Object): boolean
    }

    export class Sort {

        private static Swap(data: Object[], index1, index2) {
            var temp = data[index1];
            data[index1] = data[index2];
            data[index2] = temp;
        }
		
		/*
		Bubble Sort (or sinking sort) 	
		
		The bubble sort works by iterating through the array and checking the index and index+1
		items. If data[index+1] > data[index] then a swap is performed and a 'swapped' flag is set
		
		After reaching the end of the array, if the swapped flag is set to true then 'swapped' is
		set back to false and another pass is performed.
		
		The process is repeated until a pass in performed in which the 'swapped' flag is not set
		
		Performance:
			Best: O(n^2)
			Average: O(n^2)
		*/

        public static Bubble(data: Object[], isLess: IsLessSortComparer) {

            var swapped = false,
                passes = 0;

            do {
                swapped = false;

                // once we have done one run we know that (data.length - passes) 
                // have been sorted so no need to do them again
                passes++;

                for (var index = 0; index < data.length - passes; index++) {
                    if (!isLess(data[index], data[index + 1])) {
                        this.Swap(data, index, index + 1);
                        swapped = true;
                    }
                }
            }
            while (swapped); // if nothing swapped then we are sorted.. return
        }
		
		/*
		Merge Sort
		
		Recursive function that splits the data into N sets of arrays each with one element. 
		These sub arrays of one element can all be considered to be sorted as they only have 
		one element.
		
		The algorithm then recombines the arrays into the original array, stepping through
		each element of both arrays and looking for the lower element, then putting
		that element into the current array index
		
		Performance:
			Best: 
			Average: 
		*/

        public static Merge(data: Object[], isLess: IsLessSortComparer) {

            if (data.length <= 1)
                return;
			
            // split the array into two parts, left and right
            var mid = data.length / 2;

            var left = data.slice(0, mid);
            var right = data.slice(mid);
			
            // recursive sorting (stops at length = 1)
            this.Merge(left, isLess);
            this.Merge(right, isLess);
			
            // re-combine the two parts
            var remaining = left.length + right.length;
			
            // reconstruct
            var leftIndex = 0,
                rightIndex = 0,
                targetIndex = 0;

            while (remaining > 0) {
                // check for end of the array.. if we have no more left then use right
                if (leftIndex >= left.length)
                    data[targetIndex] = right[rightIndex++];

                // if we have no more right then use left
                else if (rightIndex >= right.length)
                    data[targetIndex] = left[leftIndex++];

                // we have left and right so check (left is smaller)
                else if (isLess(left[leftIndex], right[rightIndex]))
                    data[targetIndex] = left[leftIndex++];

                // right is smaller
                else
                    data[targetIndex] = right[rightIndex++];

                targetIndex++;
                remaining--;
            }
        }
		
		/*
		Insertion sort
		
		Works starting with a single array of 1 and assuming it to be 
		sorted. It gets the current value at i, then scans from i to 0 backways, 
		if value is	greater than the current value they are swapped
		
		Performance:
			Best: 
			Average: 
		
		*/

        public static Insertion(data: Object[], isLess: IsLessSortComparer) {
            for (var index = 0; index < data.length; index++) {

                var nextValue = data[index];

                for (var inner = index; inner > 0 && isLess(nextValue, data[inner - 1]); inner--) {
                    data[inner] = data[inner - 1];
                }

                data[inner] = nextValue;
            }
        }
    }
}

export = AlgoJS;