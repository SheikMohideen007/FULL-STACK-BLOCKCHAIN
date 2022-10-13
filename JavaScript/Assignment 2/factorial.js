function primeFactorial(a, b) {
  let arr = []; //decalre the dummy array
  for (let i = 2; i <= 100; i++) {
    let count = 0;
    for (let j = 2; j <= i; j++) {
      if (i % j == 0) {
        count++;
      }
    }
    //checking for prime
    if (count == 1) {
      arr.push(i); //add the prime number to the dummy array
    }
  }
  arr.forEach((num) => {
    let fact = 1;
    //finding the prime number's factorial
    for (let i = 1; i <= num; i++) {
      fact *= i;
    }
    console.log(fact); //print statement
  });
}
primeFactorial(1, 100);
