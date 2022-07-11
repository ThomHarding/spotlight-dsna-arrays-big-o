function push(arr, item) {
    const i = arr.length; //find spot after end of array
    arr[i] = item; //put item there
    return(arr.length); //return array length
}

const arr1 = ['a', 'b', 'c'];
console.log(push(arr1, 'd')); //4
console.log(arr1); //[a, b, c, d]

module.exports = { push };
