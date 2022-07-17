// strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

// Concatenate the consecutive strings of strarr by 2, we get:

// treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
// folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
// trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
// blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
// abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

// Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
// The first that came is "folingtrashy" so 
// longest_consec(strarr, 2) should return "folingtrashy".

//cycle through from 0 to length-2, put each combo of i and i+1 in a var, check length and compare to current longest

function longestConsec(strarr, k) {
    if(k<=0 || k > strarr.length) return ""
    let longestWord = "";
    for(let i = 0; i < strarr.length; i++){
        let word = strarr.slice(i,i+k).join("")
      word.length > longestWord.length ? longestWord = word : longestWord;
    }
    return longestWord
  }