decodeMorse = function(morseCode){
    let newSentence = "";
    let initialSentence = morseCode.split(" ");
    let test = MORSE_CODE['....'];
    return initialSentence.map((word, index, arr) => {
      if(word=="" && arr[index+1] != "") return " ";
      return MORSE_CODE[word];
     
    }).join("").trim()
    //your code here
  }