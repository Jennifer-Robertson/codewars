function alphabetPosition(text) {
    //   Parameters
//you are given a string

// Returns
//returns the string with the letter position instead of the letter itself

// Pseudo Code
//join and split sentence into letters. Use map and find to make a new array with the corresponding numbers
let alpha = {"a": "1", "b" : "2", "c" : "3", "d" : "4", "e" : "5", "f" : "6","g" : "7","h" : "8", "i" : "9", "j" : "10","k" : "11","l" : "12",
            "m" : "13","n" : "14","o" : "15","p" : "16","q" : "17","r" : "18","s" : "19","t" : "20","u" : "21","v" : "22","w" : "23",
            "x" : "24","y" :"25","z" : "26"}
console.log(text.replace(/[^\w]/g,'').toLowerCase().split(""))

return (text.replace(/[^\w]/g,'').toLowerCase().split("").map(letter => alpha[letter])).join(" ")

}

alphabetPosition("f  g{y:1")

//DIDNT GET ALL EDGE CASES

function alphabetPosition(text) {
    return text
      .toUpperCase()
      .match(/[a-z]/gi)
      .map( (c) => c.charCodeAt() - 64)
      .join(' ');
  }