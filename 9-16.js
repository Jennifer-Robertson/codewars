// Task
// Given an array/list of integers, find the Nth smallest element in the array.

// Notes
// Array/list size is at least 3.
// Array/list's numbers could be a mixture of positives , negatives and zeros.
// Repetition in array/list's numbers could occur, so don't remove duplications.

function nthSmallest(arr, pos){
    //your code here
    console.log(arr, arr.sort(), pos)
    return(arr.sort((a,b) => (a-b))[pos-1])
    
  }