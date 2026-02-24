function Prime(arr) {
  return arr
    .filter(num => {
      if (num < 2) return false;
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
      }
      return true;
    })
    .map(num => String(num));
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(Prime(numbers));