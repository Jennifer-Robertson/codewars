// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

function maskify(cc) {
    return cc.slice(0, -4).split("").map(number => "#").join("") + cc.slice(-4)
    
    
    }

//     It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

function getAverage(marks){
    //TODO : calculate the downward rounded average of the marks array
    return Math.floor(marks.reduce((sum, c) => sum+c, 0)/marks.length)
  }


//   Sentence Smash
// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

function smash (words) {
    return words.join(" ")
 };

//  Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

//  Return your answer as a number. 

function sumMix(x){
    return x.reduce((sum, c) => sum + Number(c), 0)
  
  }