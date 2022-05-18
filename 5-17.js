function isValidWalk(walk) {
    let vert = 0;
    let hori = 0;
    if(walk.length !== 10){
      return false
    }
    else{walk.forEach(direction => {
      switch(direction){
          case "n":
          vert++;
          break;
                  case "s":
          vert--;
          break;
                  case "e":
          hori++;
          break;
                  case "w":
          hori--;
          break;
      }
    })
    return hori == 0 && vert == 0 ? true : false;}
    //insert brilliant code here
  }