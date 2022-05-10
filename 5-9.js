function spinWords(string){
    //   Parameters
      //string of at least 1 word
      
     // Returns
      //returns string with words of 5 or more letters reversed
    //  Examples
      //"Hey fellow warriors" => "Hey wollef sroirraw"
     // Pseudo Code
      //split string, map with conditional
      //TODO Have fun :)
      
      return string.split(" ").map(word => word.length >= 5 ? word.split("").reverse().join("") : word).join(" ")
    }