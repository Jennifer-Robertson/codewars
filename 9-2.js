// Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?
function roundToNext5(n){
    // ...
    if(n%5==0) return n
    let number = n;
    while(number%5!==0){
      number+=1
    }
    return number
  }