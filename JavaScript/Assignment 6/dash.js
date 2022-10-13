var num = "025468056";
function insertDash(num) {
  var str = num[0];
  for (let i = 1; i < num.length; i++) {
    if (parseInt(num[i - 1]) % 2 == 0 && parseInt(num[i]) % 2 == 0) {
      str += "-" + num[i];
    } else {
      str += num[i];
    }
  }
  console.log(str);
}
insertDash(num);
