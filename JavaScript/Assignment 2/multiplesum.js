var sum = 0;
function sumOfMultiples(sum) {
  for (let i = 1; i < 1000; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      //getting the sum of multiples of 5 and 3 here
      sum += i;
    }
  }
  return sum;
}
console.log(sumOfMultiples(sum));
