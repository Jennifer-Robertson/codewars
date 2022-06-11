// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

//   Parameters
//given an array of faces
    
   // Returns
//need to return the number of valid faces - string that contains : or ; AND ) or D
  //  Examples
//countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
   // Pseudo Code
//filter if smiley params met, return length?


//return the total number of smiling faces in the array
function countSmileys(arr) {

    let newarr =  arr.filter(str => {
      if(str.length<=3){
        return (str.indexOf(":") >= 0 || str.indexOf(";") >= 0) && (str.indexOf(")") >= 0 || str.indexOf("D") >= 0)
    
      }
      })
    
    return newarr.filter(str => {
      if(str.length===2) return str
      return (str.indexOf("-") >= 0 || str.indexOf("~") >= 0)
    }).length
    }