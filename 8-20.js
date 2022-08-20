// Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.

// Examples:

// encrypt("012345", 1)  =>  "135024"
// encrypt("012345", 2)  =>  "135024"  ->  "304152"
// encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

// encrypt("01234", 1)  =>  "13024"
// encrypt("01234", 2)  =>  "13024"  ->  "32104"
// encrypt("01234", 3)  =>  "13024"  ->  "32104"

function encrypt(text, n) {
    let encrypted = text;
      for(let i = 0; i<n; i++){
        let odds = encrypted.split("").filter((n,i) => i%2==1);
        let evens = encrypted.split("").filter((n,i) => i%2==0);
        encrypted = odds.concat(evens)
      }
      return encrypted.join("")
    }
    