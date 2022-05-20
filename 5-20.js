

//   Parameters
//you're given an a rray of numbers, and each number can only repeat n times
    
   // Returns
//returns a new array with numbers limited to n times
  //  Examples
//[1,2,3,1,2,1,2,3], n=2 returns [1,2,3,1,2,3]
   // Pseudo Code
//make an obj to store counts, use filter to make new arr


function deleteNth(arr,n){
    let obj = {};
  
    return arr.filter(num => {
      if(!(num in obj)){
        obj[num] = 0;
      }
      obj[num]++
      if(obj[num] <= n) return num
    })
  }