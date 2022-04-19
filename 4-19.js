// After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

// You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.

// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

// Write a code that gives out the total amount for different days(d).

function rentalCarCost(d) {
    // Your solution here
    if(d>=7){
      return 40*d-50
    }
    else if(d>=3){
      return 40*d-20
    }
    else {
      return 40*d
    }
  }

  //Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

  function removeExclamationMarks(s) {
    return s.replace(/!/g, "");
  }


//   All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

// Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

// Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.

function feast(beast, dish) {
    return beast[0]===dish[0] && beast[beast.length-1] === dish[dish.length-1]
    }

    // The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

    function cockroachSpeed(s) {
        return Math.floor(s*27.777778)
        //Good Luck!
      }
      
      
//Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

function getGrade (s1, s2, s3) {
    const avg = (s1+s2+s3)/3
    
    if(avg >= 90) {
      return "A"
    }
    else if (avg >= 80) {
      return "B"
    }
      else if (avg >= 70) {
      return "C"
    }
      else if (avg >= 60) {
      return "D"
    }
    else {
      return "F"
    }
    // Code here
  }