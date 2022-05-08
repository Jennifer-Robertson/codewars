function digital_root(n) {
    if((""+n).length===1){
      return n
    }
    
    let arr = (n.toString()).split("").reduce((sum, a) => sum + +a, 0);
    return digital_root(+arr)
  
  }