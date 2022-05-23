function narcissistic(value) {
    if(value<10) return true;
    let pow = String(value).length
    let total = String(value).split("").reduce((sum, a) => sum + a**pow, 0)
    return value == total
  }