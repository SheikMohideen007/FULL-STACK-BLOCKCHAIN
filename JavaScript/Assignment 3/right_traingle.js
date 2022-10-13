var num = parseInt(10);
let start = 1;
for (let i = 1; i <= num; i++) {
  str = "";
  for (let j = 1; j <= i; j++) {
    str += start++ + " ";
  }
  console.log(str);
}
