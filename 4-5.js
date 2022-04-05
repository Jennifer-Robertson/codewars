// You're at the zoo... all the meerkats look weird. Something has gone terribly wrong - someone has gone and switched their heads and tails around!

// Save the animals by switching them back. You will be given an array which will have three values (tail, body, head). It is your job to re-arrange the array so that the animal is the right way round (head, body, tail).

// Same goes for all the other arrays/lists that you will get in the tests: you have to change the element positions with the same exact logics

function fixTheMeerkat(arr) {
    return arr.reverse()
   //your code here 
  }

//   For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

function well(x){
    let xCount = x.filter( x => x === 'good');
    if(xCount.length === 1 || xCount.length ===2) {
      return "Publish!"
    }
    else if(xCount.length > 2) {
      return "I smell a series!"
    }
    else {
      return "Fail!"
    }
    
  }

//   The geese are any strings in the following array, which is pre-populated in your solution:

//   ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
// For example, if this array were passed as an argument:

//  ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
// Your function would return the following array:

// ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
// The elements in the returned array should be in the same order as in the initial array passed to your function, albeit with the 'geese' removed. Note that all of the strings will be in the same case as those provided, and some elements may be repeated.

function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    return birds.filter(birds => !geese.includes(birds))
    // return an array containing all of the strings in the input array except those that match strings in geese
  };

//   Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

function arrayMadness(a, b) {
    return a.reduce((sum, c) => sum + c**2, 0) > b.reduce((sum, c) => sum + c**3, 0)
    // Ready, get set, GO!!!
  }

//   We want an array, but not just any old array, an array with contents!

// Write a function that produces an array with the numbers 0 to N-1 in it.

// For example, the following code will result in an array containing the numbers 0 to 4:

// arr(5) // => [0,1,2,3,4]
const arr = N => {
    let newList = [];
    for(let i=0; i<N; i++) {
      newList.push(i);
    }
    return newList;
  };

//   If the number has an integer square root, take this, otherwise square the number.

function squareOrSquareRoot(array) {
    return array.map(number => {
     return Math.sqrt(number)%1 === 0 ? Math.sqrt(number) : number**2
    });  
  }

  