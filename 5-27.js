function solution(str){
    //split string into 2 string chunks
    let arr = [];
    for(let i = 0; i<str.length; i+=2){
      str[i+1] == undefined ? arr.push(str[i]+"_") : arr.push(str[i]+str[i+1]);
    }
     return arr
  }


  function solution(s){
    return (s+"_").match(/.{2}/g)||[]
 }