// The drawing below gives an idea of how to cut a given "true" rectangle into squares ("true" rectangle meaning that the two dimensions are different).

// alternative text

// Can you translate this drawing into an algorithm?

// You will be given two dimensions

// a positive integer length
// a positive integer width
// You will return a collection or a string (depending on the language; Shell bash, PowerShell, Pascal and Fortran return a string) with the size of each of the squares.

function sqInRect(lng, wdth){
    if(lng===wdth) return null
    let squares = [];
    let length = lng
    let width = wdth
    while((length>0 && width>0)){
      if(length > width) {
        squares.push(width)
        length-=width
      }else{
              squares.push(length)
        width-=length
      }
    }
    return squares
  }
  
  