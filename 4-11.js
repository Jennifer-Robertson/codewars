// In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?

//failed 1 test
function nbYear(p0, percent, aug, p) {
    let years = 0;
    let pop = p0;
    
    while(pop <= p) {
      pop += (pop*percent/100) + aug;
      years += 1;
    }
    return years;
  
  }

//   Make a program that filters a list of strings and returns a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

function friend(friends){
    //your code here
    return friends.filter(n => n.length === 4)
  }


//   The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

//   To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.



  function openOrSenior(data){
    return data.map(arr => {
      return arr[0] >= 55 && arr[1] > 7 ? "Senior" : "Open"
    })
  }


//   In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

// The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

// Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

// You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

// The string has a length greater or equal to one and contains only letters from ato z.

function printerError(s) {
    let errors = s.match(/[n-z]/gi) 
    errors===null ? errors = 0 : errors = errors.length
    return `${errors}/${s.length}`
  
  }