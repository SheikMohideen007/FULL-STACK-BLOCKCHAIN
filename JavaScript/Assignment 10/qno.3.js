// 3. Give an example of a Higher Order function and a call back function
// used in the same program.

//call back function
function callBackPattern(num) {
  var str = "";
  for (i = 0; i < num; i++) {
    str += "* ";
  }
  console.log(str);
}

//Higher Order Function
function HigherPattern(callBackPattern, line) {
  for (let i = 1; i <= line; i++) {
    callBackPattern(i);
  }
}

var line = 5;
HigherPattern(callBackPattern, line);
