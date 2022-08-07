// Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James. Since James doesn't know how to make this happen, he needs your help.

// Task
// You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

// Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.

function diamond(n){
    if(n<=0 || n%2==0) return null
    let diam = []
    
    for(let i = n; i>=0; i-=2){
      let spaces = (n-i)/2
      let newString = " ".repeat(spaces)+"*".repeat(i)+ "\n"
      console.log(newString)
      diam.push(newString)
      if(i !== n){
            diam.unshift(newString)
      }
    }
    return diam.join("");
  }