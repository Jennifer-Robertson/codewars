// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

function sumTwoSmallestNumbers(numbers) {  
    //Code here
    let sorted = numbers.sort((a,b) => a-b);
    return sorted[0]+sorted[1]
  }

//   Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

function oddOrEven(array) {
    let sum =  array.reduce((sum, c) => sum+c, 0)
    if(sum%2===0 || array ==="") {
      return "even"
    }
    else {
      return "odd"
    }
  
  }

//   Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.

function removeSmallest(numbers) {
    let smallest = Math.min(...numbers);
    let index = numbers.indexOf(smallest)
    let newArr = numbers.slice(0);
    newArr.splice(index, 1)
    return newArr
  }