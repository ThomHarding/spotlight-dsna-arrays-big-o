function push(arr, item) {
    const i = arr.length; //find spot after end of array
    arr[i] = item; //put item there
    return(arr.length); //return array length
}

const arr1 = ['a', 'b', 'c'];
console.log(push(arr1, 'd')); //4
console.log(arr1); //[a, b, c, d]

module.exports = { push };


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
