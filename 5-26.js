function tribonacci(signature,n){
    if(n==0) return [];
    if(n==1) return signature.slice(0,1)
    let seq = signature;
    for(let i = 2; i<n-1; i++){
      seq.push(seq[i]+seq[i-1]+seq[i-2])
    }
    return seq
        
    //take the last 3  numbrs in an array, add them together, and push to the array
      
    //your code here
  }