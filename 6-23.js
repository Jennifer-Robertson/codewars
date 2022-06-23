function switchItUp(number){
   let word
   switch(number){
       case 1:
       word = "One"
       break;
             case 2:
       word = "Two"
       break;
             case 3:
       word = "Three"
       break;
             case 4:
       word = "Four"
       break;
             case 5:
       word = "Five"
       break;
             case 6:
       word = "Six"
       break;
             case 7:
       word = "Seven"
       break;
             case 8:
       word = "Eight"
       break;
             case 9:
       word = "Nine"
       break;
       default:
       word = "Zero"
       break;
     
   }
   
       return word;
 //Write your own Code!
 }

 switchItUp=n=>["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"][n]