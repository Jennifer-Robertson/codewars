function isPangram(string){
    let alpha = "abcdefghijklmnopqrstuvwxyz".split("")
    return alpha.filter(letter => string.toLowerCase().includes(letter)).length == 26;
  }