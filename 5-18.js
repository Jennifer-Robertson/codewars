var uniqueInOrder=function(iterable){
    let arr = iterable;
    if(typeof arr == 'string') { arr= arr.split("")}
    
    let newArr = [];
    
    arr.forEach((n, index, arr) => {
      if(n!==arr[index+1]){
        newArr.push(n)
      }
    })
    return newArr
  }



  var uniqueInOrder=function(iterable){
    return [...iterable].filter((a, i) => a !== iterable[i-1])
}