// Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

    //   Parameters
//two arrays with integers inside, compare a to b
    
   // Returns
//return true if the integers in a are the square roots of integers in b
  //  Examples
//a = [121, 144, 19, 161, 19, 144, 19, 11]  , b = [121, 14641, 20736, 361, 25921, 361, 20736, 361] returns true
   // Pseudo Code
//sort a and b since they will not be in the same order.. and then map b so that it's an array of sq roots.. then return a === b

function comp(array1, array2){

    let sortedA = array1.sort()
    console.log(sortedA)
    
    let sqrtSortedB = array2.map(num => Math.sqrt(num)).sort()
    console.log(sqrtSortedB)
    
    return sortedA.every((num, index) => num == sqrtSortedB[index])
  }