function arrayDiff(a, b) {
    //   Parameters
    //2 arrays
    
   // Returns
    //returns array with numbers from array b removed
  //  Examples
    //arrayDiff([1,2],[1]) == [2]
   // Pseudo Code
    //filter list a to see if the numbers are included in b, if not, add to filtered arr

return a.filter(num => !b.includes(num))
}
