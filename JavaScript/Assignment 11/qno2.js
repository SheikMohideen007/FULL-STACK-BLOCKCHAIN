let arr1 = [1, 2, 3, 4, 5],
  arr2 = [4, 6, 1, 8, 2];
var val1 = false,
  val2 = false;

arr1.forEach((e) => (e == 4 ? (val1 = true) : val1));
arr2.forEach((e) => (e == 4 ? (val2 = true) : val2));

console.log(
  val1 && val2
    ? "Both array contains 4"
    : !val1 && val2
    ? "only array 2 contains 4"
    : val1 && !val2
    ? "only array 1 contains 4"
    : "Both array has not contains 4"
);
