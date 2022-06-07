

//   Parameters
//given a sentence/string of lower case words
    
   // Returns
//returns the highest scoring word based on their location in the alphabet
  //  Examples
//
   // Pseudo Code
//create variable alpha, start with 0+aplha so that index corresponds with letter score. Create word obj to hold current highest score. For each word, use reduce to get the score and a conditional to update the highest word 

function high(x){
   let alpha = "0abcdefghijklmnopqrstuvwxyz".split("");
     let wordObj = {
       hWord: "temp",
       score: 0
     }
     x.split(" ").forEach(word => {
      let currentScore = word.split("").reduce((a,c) => a+alpha.indexOf(c),0)
   
      if(currentScore > wordObj.score) {
        wordObj.score = currentScore;
        wordObj.hWord = word;
      }
       })
     return wordObj.hWord;
   }