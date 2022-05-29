function dontGiveMeFive(start, end)
{let arr = [];
  for(let i = start; i<=end; i++){
          arr.push(i)
  }
 return arr.filter(num => !String(num).split("").includes('5')).length

}