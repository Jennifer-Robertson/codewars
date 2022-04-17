// Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits.

function isDivisible(n, x, y) {
    return(n%x===0 && n%y===0)
  }

//   Complete the solution so that it reverses all of the words within the string passed in.

function reverseWords(str){
    return str.split(" ").reverse().join(" "); // reverse those words
  }

//It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?

// Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.

// If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.

function bonusTime(salary, bonus) {
    return bonus ? "£"+(salary*10) : "£"+ salary;
  // your code here
  }

 