// Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).

function minValue(values){
    let sorted = values.sort()
    let noDups = new Set([...sorted])
    let smallestNum = ""
    for (items of noDups){
      smallestNum+=items
    }
    
     return parseInt(smallestNum)
   }

   function minValue(values){
    let arr = Array.from(new Set(values))
    return parseInt(arr.sort().join(''))
  }

  