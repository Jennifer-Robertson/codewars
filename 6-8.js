// Complete the solution so that the function will break up camel casing, using a space between words.

//   Parameters
//given a string
    
   // Returns
//return a string with a space infront of a cap letter
  //  Examples
//"camelCasing"  =>  "camel Casing"
   // Pseudo Code - use map to make a new arr, use charCodeAt to find the uppercase letter, add space. Turnary operator.
//// complete the function
function solution(string) {
    return string.split("").map((letter,index) => string.charCodeAt(index)<91 ? " "+letter : letter).join("")
 }
 