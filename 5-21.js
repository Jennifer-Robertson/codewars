function nbDig(n, d) {
    let arr = []
    for(let i = 0; i<=n; i++){
      arr.push(String(i**2))
    }
    return arr.join("").split("").filter(num => num==d).length
  
  }