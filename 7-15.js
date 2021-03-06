// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.


function count (string) {  
    let letters = {};
    string.split("").forEach(letter => {
      if(!letters[letter]){
        letters[letter] = 0;
      }
      letters[letter]++
    })
    return letters;
  }

  function count (string) {  
    var count = {};
    string.split('').forEach(function(s) {
       count[s] ? count[s]++ : count[s] = 1;
    });
    return count;
  }