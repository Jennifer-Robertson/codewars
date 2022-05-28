function findUniq(arr) {
    return arr.filter(a => a==arr[0]).length == 1 ? arr[0] : arr.filter(a => a !==arr[0])[0]
  }
  