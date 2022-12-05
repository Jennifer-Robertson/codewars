
// Given an array of strings of the same letter type. Return a new array, which will differ in that the length of each element is equal to the average length of the elements of the previous array.

function averageLength(letters) { 
    let avg = Math.round(letters.reduce((a,c) => a + c.length, 0)/letters.length)
    return letters.map(a => a[0].repeat(avg))
  }