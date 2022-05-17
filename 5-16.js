function alphabetPosition(text) {
    let newText = text.toUpperCase().match(/[a-z]/gi);
    if(newText){
      return newText.map(c => c.charCodeAt()-64).join(" ");
  }  
    else return ""
  }