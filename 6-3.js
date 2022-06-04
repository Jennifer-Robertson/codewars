// Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.

//   Parameters
//given a number of floors in int
    
   // Returns
//a tower built of astrics, odd numbers increasing
  //  Examples
// //3 floors - [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]
   // Pseudo Code
//a loop starting with 1 and i+=2

function towerBuilder(nFloors) {
    var tower = [];
    for (var i = 0; i < nFloors; i++) {
      tower.push(" ".repeat(nFloors - i - 1)
               + "*".repeat((i * 2)+ 1)
               + " ".repeat(nFloors - i - 1));
    }
    return tower;
  }