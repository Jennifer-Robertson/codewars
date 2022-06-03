// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

//   Parameters
//given an array of numbers with even and odd numbers
    
   // Returns
//even numbers stay in place, odd numbers are replaced in ascending order
  //  Examples
//
   // Pseudo Code
//filter out odd numbers, sort array, and then map with new arr

function sortArray(array) {
    let oddArr = array.filter(number => Math.abs(number)%2===1).sort((a,b) => a-b);
    console.log(oddArr)
    return array.map((number, index) => {
      return number%2===0 ? number : oddArr.shift()
    })
  }