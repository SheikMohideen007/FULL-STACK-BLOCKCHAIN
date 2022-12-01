function thirdLargest(arr, arr_size) {
  /* There should be
at least three elements */
  if (arr_size < 3) {
    console.log(" Invalid Input ");
    return;
  }
  arr.sort();
  return arr[2];
}
let arr = [12, 13, 1, 10, 34, 16];
let n = arr.length;
console.log(
  `The third largest number in an array is .. ${thirdLargest(arr, n)}`
);
