function findEvenIndex(arr)
{
 let index;
 
 for(let i = 0; i<arr.length; i++){
   let arrL = arr.slice(0,i);
   let arrR = arr.slice(i+1);
   
   let sumL = arrL.reduce((sum, a) => sum+a, 0)
    let sumR = arrR.reduce((sum, a) => sum+a, 0)
    
    if(sumL==sumR) index = i;
 }
 return index==undefined ? -1 : index
}