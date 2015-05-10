/// <reference path="scripts/typings/node/node.d.ts" />

/*
Copyright Mike Davies <http://antfx.com>
Time/space complexities from http://bigocheatsheet.com/
*/

/*

TODO

Types

> PriorityQueue
> LinkedList
> HashTable

Sort

> Quick
> Selection
> Shell

Search

> BinarySearch
> BinarySearchTree
> BalancedSearchTree

Graphs

> Shortest Paths

Strings

*/

/* Container Types */

module AlgoJS.Types {
    
    
    /*
    Internal node class used in linked list structures
    */

    class LinkedListNode {
        item: any;
        next: LinkedListNode;

        constructor(item: any, next: LinkedListNode) {
            this.item = item;
            this.next = next;
        }
    }

    interface Itterate1 {
        (val1: Object): void
    }
    
    /*
    Linked list implementation of a stack
    */

    export class Bag {

        first: LinkedListNode;
        count: number;

        constructor() {
            this.first = null;
            this.count = 0;
        }

        public add(item): void {
            this.first = new LinkedListNode(item, this.first);
            this.count++;
        }

        public forEach(callback: Itterate1): void {
            for (var node = this.first; node != null; node = node.next)
                callback(node.item);
        }

        public size(): number {
            return this.count;
        }
    }

    /*
    Linked list implementation of a stack
    */

    export class Stack {

        first: LinkedListNode;
        count: number;
        
        constructor() {
            this.first = null;
            this.count = 0;
        }
        
        public push(item): void {
            this.first = new LinkedListNode(item, this.first);
            this.count++;
        }

        public pop(): any {

            if (this.size() == 0)
                return null;

            // get the return item
            var item = this.first.item;

            // set the new head
            this.first = this.first.next;
            this.count--;

            return item;
        }

        public peek(): any {

            if (this.size() == 0)
                return null;

            return this.first.item;
        }

        public forEach(callback: Itterate1): void {
            for (var node = this.first; node != null; node = node.next)
                callback(node.item);
        }

        public size(): number {
            return this.count;
        }
    }

    /*
    Linked list implementation of a stack
    */

    export class Queue {

        count: number;
        first: LinkedListNode;
        last: LinkedListNode;

        constructor() {
            this.count = 0;
            this.first = null;
            this.last = null;
        }

        public enqueue(item: any): void {

            // add a new item to the end of the list
            var newLast = new LinkedListNode(item, null);

            if (this.last != null)
                this.last.next = newLast;

            this.last = newLast;

            if (this.first == null)
                this.first = this.last;
            
            this.count++;
        }

        public dequeue(): any {

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
        }

        public forEach(callback: Itterate1): void {
            for (var node = this.first; node != null; node = node.next)
                callback(node.item);
        }

        public size(): number {
            return this.count;
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
			Best: O(n)
			Average: O(n^2)
            Worst: O(n^2)

            Space: O(1)
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
			
            Best: O(n log(n))
			Average: O(n log(n))
            Worst: O(n log(n))

            Space: O(n)

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

			Best: O(n)
			Average: O(n^2)
            Worst: O(n^2)

            Space: O(1)
		
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

        public static Selection(data: Object[], isLess: IsLessSortComparer) {

            for (var index = 0; index < data.length; index++) {

                for (var inner = index + 1; inner < data.length; inner++) {
                    var min = index;

                    if (isLess(data[inner], data[min]))
                        min = inner;

                    if (min != index)
                        this.Swap(data, min, index);
                }
            }
        }
    }
}

export = AlgoJS;