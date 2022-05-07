function createPhoneNumber(numbers){
    let num1 = numbers.slice(0,3).join("");
    let num2 = numbers.slice(3,6).join("");
    let num3 = numbers.slice(6).join("");
    return `(${num1}) ${num2}-${num3}`
    
  }