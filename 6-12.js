// A child is playing with a ball on the nth floor of a tall building. The height of this floor, h, is known.

// He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).

// His mother looks out of a window 1.5 meters from the ground.

// How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing?

//   Parameters
//given 3 params, height, bounce, window. Determine how m any times the ball passes the window height 
    
   // Returns
//if h > 0, b 0 >= b <= 1, w < h, return the number of times the ball passes h. Otherwise, return -1
  //  Examples
//- h = 3, bounce = 0.66, window = 1.5, result is 3

//- h = 3, bounce = 1, window = 1.5, result is -1 
   // Pseudo Code
//check h, b, w for conditions. Start numOfPass = 1. While h > w, multiply h*b and then that h becomes the new h. Add 1 numOfPass.

function bouncingBall(h,  bounce,  window) {
    if(h<0 || bounce<=0 || bounce>=1 || window > h) return -1
    
    let numOfPass = -1;
    
    while(h>window){
      h = h * bounce;
      numOfPass+=2
    }
    return numOfPass;
  
  }
  


  function bouncingBall(h,  bounce,  window) {
    var rebounds = -1;
    if (bounce > 0 && bounce < 1) while (h > window) rebounds+=2, h *= bounce;
    return rebounds;
  }
  