let arr = [1, 2, 3, 4, 5];

// a) Sum of all elements in the array using reduce()
let red = arr.reduce(function (sum, num) {
  return sum + num;
}, 0);

console.log(red);

// b) Average of all elements in the array using reduce()
let avg = arr.reduce(function (average, num, index, arr) {
  return average + num / arr.length;
}, 0);

console.log(avg);
