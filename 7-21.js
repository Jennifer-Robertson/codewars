// Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.


function isValidIP(str) {
    let split = str.split(".")
    if(split.length !== 4) return false;
    return split.filter(num => {
      if(0 <= Number(num) <= 255 && (num[0] != 0 && num.length != 1)) {
        console.log("filtered num", num)
         return num
         }
    }).length == 4
  }

  //does not get all edge cases