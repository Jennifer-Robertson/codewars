function solution(str, ending){
    return str.slice(str.length-ending.length) === ending;
  }

  function solution(str, ending){
    return str.endsWith(ending);
  }