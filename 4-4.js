// Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.

function divisibleBy(numbers, divisor){
    return numbers.filter( number => number % divisor === 0)
  
  }

//   Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:

// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]
// None of the arrays will be empty, so you don't have to worry about that!

function removeEveryOther(arr){
    return arr.filter((element, index) => index%2===0)


  }

//   You will be given a vector of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

//   The returned value must be a string, and have "***" between each of its letters.
  
//   You should not remove or add elements from/to the array.
  function twoSort(s) {
    return s.sort().shift().split("").join("***");
  
  }
  

//   Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

// I love you
// a little
// a lot
// passionately
// madly
// not at all
// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

// Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.