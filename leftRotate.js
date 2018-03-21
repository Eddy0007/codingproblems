/*
A left rotation operation on an array of size N shifts each of the array's elements N units to the left. For example, if 2 left rotations are performed on array [1, 2, 3, 4, 5], then the array would become [3, 4, 5, 1, 2].
Given an array of N integers and a number, D, perform D left rotations on the array. Then print the updated array as a single line of space-separated integers.
*/


function leftRotate(arr, d) {
    // check if d is greater than the given size of the array and avoid looping so 
    // many times by equating d to the remeinder of the d divided by size of the array.
    if(arr.length < d){
      d = d%arr.length;
    }
    // remove the first d elements of the array
    removed = arr.splice(0,d);
    // append the removed element to the end ot the array
    arr = arr.concat(removed);
    return arr.join(' ');
  }