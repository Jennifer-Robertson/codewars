// In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

// make as few changes as possible.
// if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.

function solve(s){
    let numUppercase = s.split("")
    .filter(letter => letter == letter.toUpperCase()).length
     return numUppercase <= s.length/2 ? s.toLowerCase() : s.toUpperCase()
  }