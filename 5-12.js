var countBits = function(n) {
    //   Parameters
  //an int
  
 // Returns
  //number of 1s in the binary #
//  Examples
  //1234 is 10011010010, so the function should return 5 
 // Pseudo Code
  //convert number to binary, filter out 1s, get length
let binary = n.toString(2);
return binary.split("").filter(num => num == 1).length
};