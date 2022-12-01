let arr = [1, 2, 3, 4, 5];
avg = 0;
(evensum = 0), (oddsum = 0);
arr.forEach((e, i) => {
  if (i % 2 == 0) oddsum += e;
  else evensum += e;
  avg += e;
});
console.log(`sum of the numbers in odd position = ${oddsum}`);
console.log(`sum of the numbers in even position = ${evensum}`);
console.log(`difference = ${oddsum - evensum}`);
console.log(`average = ${avg / arr.length}`);
console.log(`GCD = ${findGcd(evensum, oddsum)}`);

function findGcd(a, b) {
  while (b > 0) {
    temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}
