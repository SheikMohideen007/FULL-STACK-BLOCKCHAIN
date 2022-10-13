var num = parseInt(407);

function amstrong(num) {
  let sum = 0;
  while (num != 0) {
    sum += Math.pow(num % 10, 3);
    num = parseInt(num / 10); //convert float to integer otherwise it will assign the float value
  }
  return sum;
}
console.log(
  amstrong(num) == num
    ? "This is Amstrong Number"
    : "This is not an Amstrong number"
);
