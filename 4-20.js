function getDivisorsCnt(n){
    let collection = [];
  for(let i=1; i <= n; i++) {
    if(n%i===0) {
      collection.push(i)
    }
  }
  return collection.length
}