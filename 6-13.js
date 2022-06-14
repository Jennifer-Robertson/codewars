

//   Parameters

    
   // Returns
//
  //  Examples
//
   // Pseudo Code
//

function isAnagram (test, original) {
   return test.toLowerCase().split("").sort().join("") === original.toLowerCase().split("").sort().join("");
 }