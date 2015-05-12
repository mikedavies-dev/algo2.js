
var swap = (data: Object[], index1, index2) => {
    var temp = data[index1];
    data[index1] = data[index2];
    data[index2] = temp;
}

var insertion = (data: Object[]) => {

    for (var outer = 0; outer < data.length; outer++) {

        for (var inner = outer; inner > 1; inner--) {
            if (data[inner] < data[inner-1]) {
                swap(data, inner - 1, inner);
            }
        }
    }
}

/* 
the selection sort goes through the array one at a time finding the smallest value
when it finds the smallest value index it swaps it with the current index
*/

var selection = (data: Object[]) => {

    for (var outer = 0; outer < data.length; outer++) {

        var min = null;

        for (var inner = outer; inner < data.length; inner++) {
            if (min == null || data[inner] < data[min])
                min = inner;
        }

        if (min != null)
            swap(data, outer, min);
    }
}

/*
The bubble sort works by going throught the array mutliple times and looking for values that
need swapping, if it finds  value that needs swapping it swaps them then starts the loop again

*/

var bubble = (data: Object[]) => {

    var swapped = false,
        counter= 0;
    
    do {
        swapped = false;

        for (var index = counter; index < data.length - 1; index++) {
            if (data[index] > data[index + 1]) {
                swap(data, index, index + 1);
                swapped = true;
            }
        }

        counter++;

    } while (swapped);
}

/*
The top down merge sort is recurisve that splits the array into smaller and smaller two arrays at the mid 
point, until we get to an array size of 1, with an array size of 1 we can assume the array to be sorted.

We then merge the two arrays in the correct order

*/

var mergeTopDown = (data: Object[], low: number, high: number) => {

    // if we have an array size of 1 then return, nothing to do.
    if (high - low == 1)
        return;

    if (high <= low)
        return;

    var mid = low + Math.floor((high - low) / 2);

    mergeTopDown(data, low, mid);
    mergeTopDown(data, mid+1, high);

    // copy this section
    var aux = data.slice();

    var right = mid+1, left = low;

    for (var index = low; index <= high; index++) {

        if (right > high)
            data[index] = aux[left++];

        else if (left > mid)
            data[index] = aux[right++];

        else if (aux[left] < aux[right])
            data[index] = aux[left++];

        else
            data[index] = aux[right++];
    }
    
}

/*

The bottom up merge works differently to the top down in that it starts with array sizes 
of 1 and then works its way up, doubling each time

i.e.

3 4 6 2 1 5 7 9 0 4 2 3 4
[3 4] [6 2] [1 5] [7 9] [0 4] [2 3]
[3 4 2 6] [1 5 7 9] [0 4 2 3]
[2 3 4 6 1 5 7 9 ] [0 2 3 4]

*/

var mergeBottomUp = (data: Object[]) => {

    var merge = (low: number, mid: number, high: number) => {
        
        var aux = data.slice();

        var right = mid + 1, left = low;

        for (var index = low; index <= high; index++) {

            if (right > high)
                data[index] = aux[left++];

            else if (left > mid)
                data[index] = aux[right++];

            else if (aux[left] < aux[right])
                data[index] = aux[left++];

            else
                data[index] = aux[right++];
        }
    }

    for (var arraySize = 1; arraySize < data.length; arraySize = arraySize * 2) {
        for (var low = 0; low < data.length - arraySize; low += arraySize) {
            merge(low, low + arraySize - 1, Math.min(low + (arraySize * 2) - 1, data.length - 1));
        }
    }

}

/*

The quick sort works by selecting a pivot value in the array (typeically the first value
in the sub array) and moving all values less than this value to the left and all values
greater thant his value to the right.

We keep doign this for smaller and smaller arrays until we get to an array size of 1 where
no pivoting is required

*/

var quick = (data: Object[]) => {

    var partition = (low: number, high: number): number => {

        var aux = data.slice();

        var value = data[low];
        var left = low,
            right = high+1;

        while (true) {

            while (data[++left] < value) {
                if (left == high)
                    break;
            }

            while (data[--right] > value) {
                if (right == low)
                    break;
            }

            if (left >= right)
                break;

            swap(data, left, right);
        }

        swap(data, low, right);

        return right;
    }

    var sort = (low: number, high: number) => {

        if (high <= low)
            return;

        var partitionIndex = partition(low, high);

        sort(low, partitionIndex);
        sort(partitionIndex + 1, high);
    }
    
    sort(0, data.length - 1);
}

var toSort = [4, 22, 6, 121, 5, 14, 53];

console.log(toSort);
quick(toSort);
console.log(toSort);

