function push(arr, item) {
    const i = arr.length; //find spot after end of array
    arr[i] = item; //put item there
    return(arr.length); //return array length
}

const arr1 = ['a', 'b', 'c'];
// console.log(push(arr1, 'd')); //4
// console.log(arr1); //[a, b, c, d]



//////////////////////////////////////


function pop(arr) {
    //find the last item in the array
    const i = arr.length - 1;
    //store last item as a variable to later be returned
    const x = arr[i];
    //remove that item from the array
    arr[i] = null
    //decrement length of array by 1
    arr.length = arr.length - 1;
    //return item that was removed from array
    return x;
}

////////////////////////////

function shift(arr) {
    //remove first item
    const item = arr[0];
    //move the rest of em over
    //assuming it has at least 2 elements
    for (let i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i+1];
    }
    //decrement length
    arr.length = arr.length - 1;
    //return removed item
    return item;
}

////////////////////////////

function unshift(arr, item) {
    //increase length of array to make room for new item to be added
    arr.length = arr.length + 1; //[a, b, c, ~]
    
    //["a", "b", "c"]
    //moves items in array to an index of +1, leaving an open space at beginning (i[0]) for new item
    for (let i = arr.length - 1; i > 0; i--) {
        arr[i] = arr[i - 1];
    }
    //new item as added to beginning of array
    arr[0] = item;
    //returns new length of array
    return arr.length;
}

///////////////////////////////

function hasDuplicates(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let t = i + 1; t < arr.length; t++) {
            if (arr[i] == arr[t]) {
                return true;
            }
        }
        // O(n^2). bad
    }
    return false;
}

function betterHasDuplicates(arr) {
    arr.sort(); //sort the array to put all the values in order
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] === arr[i+1]) {
        // since the array is sorted
        // if there's a duplicate, it's right next to it
            return true;
        }
    }
    // if we're here, there are no duplicates, so return false
    return false;
}

console.log(hasDuplicates(['j', 'o', 'w', 'w']));
console.log(hasDuplicates(['m', 'b', 'p', 'x']));
console.log(betterHasDuplicates(['j', 'o', 'w', 'w']));
console.log(betterHasDuplicates(['m', 'b', 'p', 'x']));


module.exports = { push, pop, shift, unshift };