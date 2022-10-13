let arr = [3, 45, 6, 7, 23, 5, 7, 8];
function nthLargest(n) {
  arr.sort(function (a, b) {
    return a - b;
  });
  largest = arr[arr.length - 1];
  count = 1;
  for (let i = arr.length - 2; i >= 0; i--) {
    if (arr[i] < largest && count != n) {
      largest = arr[i];
      count++;
    }
  }
  return largest;
}
let print = nthLargest(5);
console.log(print);
