//flatten the array

let arr = [1, 2, [3, [4, 6, [8, 9]], [5, 7], 6]];
arr.forEach((e) => {
  flattenRecursion(e);
});

function flattenRecursion(array) {
  if (typeof array == "object") {
    array.forEach((e) => {
      flattenRecursion(e);
    });
  } else {
    console.log(array);
  }
}
