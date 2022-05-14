function findOutlier(integers){
    let even = integers.filter(a => a%2==0);
    let odd = integers.filter(a => a%2!=0);
    
    return even.length > odd.length ? odd[0] : even[0];
  }