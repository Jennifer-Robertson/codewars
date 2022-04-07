// What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

function addLength(str) {
    return str.split(" ").map(word => `${word} ${word.length}`)
  //start-here
  }
  
//Find the mean (average) of a list of numbers in an array.

var findAverage = function (nums) {
    return (nums.reduce((sum, c) => sum+c,0))/nums.length
    // Code here
  }

  //You will be given an array (a) and a value (x). All you need to do is check whether the provided array contains the value, without using a loop.

//Array can contain numbers or strings. X can be either. Return true if the array contains the value, false if not. With strings you will need to account for case.

function check(a,x){
    return a.includes(x)
  };

  //I would like to be able to pass an array with two elements to my swapValues function to swap the values. However it appears that the values aren't changing.

  function swapValues(args) {

    var temp = args[0];
    args[0] = args[1];
    args[1] = temp;
  return args
}