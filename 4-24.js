 //Rock Paper Scissors
//Let's play! You have to return which player won! In case of a draw return Draw!.

const rps = (p1, p2) => {
    if(p1===p2) {
      return "Draw!"
    }
    else if((p1 === 'scissors' && p2 === 'paper') || (p1 === 'paper' && p2 === 'rock') || (p1 === 'rock' && p2 === 'scissors')){
      return "Player 1 won!"
    }
    else {
      return "Player 2 won!"
    }
  };

  //Your task is to create the functionisDivideBy (or is_divide_by) to check if an integer number is divisible by both integers a and b.

  function isDivideBy(number, a, b) {
    return number%a=== 0 && number%b===0
    // good luck
  }

//   Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

// Use conditionals to return the proper message:

function greet (name, owner) {
    return name === owner ? "Hello boss" : "Hello guest"
    // Add code here
  }

  