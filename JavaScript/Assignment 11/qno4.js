let arr = [1, 2, 3, 2, 3, 4, 5];
let duplicateArr = [],
  withoutDup = [];
for (var i = 0; i < arr.length; i++) {
  val = false;
  for (var j = i + 1; j < arr.length; j++) {
    if (i != j && arr[i] == arr[j]) {
      duplicateArr.push(arr[i]);
      val = true;
    }
  }
  if (!val) withoutDup.push(arr[i]);
}
console.log(duplicateArr);
console.log(withoutDup);
