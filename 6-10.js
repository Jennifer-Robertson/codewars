

//   Parameters
//given two arrays, compare the two and return an array of substrings in alpha order

  //  Examples
//   a1 = ["arp", "live", "strong"]

//   a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
  
//   returns ["arp", "live", "strong"]
   // Pseudo Code
//garbage loops with conditionals because I am brute forcing this

function inArray(array1,array2){
    let newArr = [];
    for(let i=0; i<array2.length; i++){
      for(let j = 0; j < array1.length; j++){
        if(!newArr.includes(array1[j]) && array2[i].indexOf(array1[j]) >= 0) {
          newArr.push(array1[j])
        }
      }
    }
    return newArr.sort();
  }

  function inArray(a1, a2) {
    var str = a2.join(' ');
    return a1.filter(s => str.indexOf(s) !== -1).sort();
  }