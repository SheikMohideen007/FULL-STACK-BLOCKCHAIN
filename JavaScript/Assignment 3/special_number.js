function specialNumber(num) {
  let temp = num; //store the num to the variable temp for the sake of comparison
  let sum = 0;
  while (num != 0) {
    let fact = 1;
    for (let i = 1; i <= num % 10; i++) {
      fact *= i;
    }
    sum += fact; //adding the factorialized number to sum;
    num = parseInt(num / 10);
  }
  //checking the condition
  if (sum == temp) {
    console.log("This is a Special Number");
  } else {
    console.log("This is not a Special Number");
  }
}
var num = parseInt(145);
specialNumber(num);
