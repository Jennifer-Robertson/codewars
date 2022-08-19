// The input is a string str of digits. Cut the string into chunks (a chunk here is a substring of the initial string) of size sz (ignore the last chunk if its size is less than sz).

// If a chunk represents an integer such as the sum of the cubes of its digits is divisible by 2, reverse that chunk; otherwise rotate it to the left by one position. Put together these modified chunks and return the result as a string.

// If

// sz is <= 0 or if str is empty return ""
// sz is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "".


function revrot(str, sz) {
    if(sz<=0 || str == ""  || sz>=str.length) return ""
  
    let runningString = "";
    for(let i = 0; i <= str.length; i+=sz){
      let currentString = str.slice(i,i+sz)
      console.log(currentString, sz, i, i+sz)
      if(currentString.length == sz){
        let totalCubedDivisibleByTwo = currentString.split("").reduce((a,c) => a+c**3, 0)%2===0
        totalCubedDivisibleByTwo ? runningString = runningString+(currentString.split("").reverse().join("")) : runningString = runningString+currentString.slice(1)+currentString[0]
      }
    }
    return runningString
  }