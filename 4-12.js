// Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).

function isTriangle(a,b,c)
{ 
   return ((a+b) > c && (a+c) > b && (c+b) > a);
}

// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

function longest(s1, s2) {
    let str = s1.concat(s2).split("").sort();
    let newList = [];
    for(let i=0; i<str.length; i++) {
      if(!newList.includes(str[i])) {
        newList.push(str[i])
      }
    }
    return newList.join("")
  }