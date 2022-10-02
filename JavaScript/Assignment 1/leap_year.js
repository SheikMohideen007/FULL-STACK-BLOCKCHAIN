var num = 2022;
var year = parseInt(num);

if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
  console.log(`${year} is Leap year`);
} else {
  console.log(`${year} is not a Leap year`);
}
