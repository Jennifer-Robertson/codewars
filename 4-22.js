function stray(numbers) {
    let filter1 = numbers.filter(num => num === numbers[0])
    let filter2 = numbers.filter(num => num !== numbers[0])
    return filter1.length === 1 ? numbers[0] : filter2[0]
  }