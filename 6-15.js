

//   Parameters
//Complete the solution so that it returns the greatest sequence of five consecutive digits found within the number given
    
   // Returns
//1234567890 67890 is the greatest sequence of 5 consecutive digits.
  //  Examples
//
   // Pseudo Code
//



function solution(digits){
   let highest = 0;
   
   digits.split("").forEach((n,i,arr) => {
     let current = Number(arr.slice(i, i+5).join(""));
     if(current>highest){
       highest = current;
     }
   })
 return highest
 }