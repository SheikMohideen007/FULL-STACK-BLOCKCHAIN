let set = new Set();
while (set.size != 4) {
  set.add(Math.floor(Math.random() * 10) + 1);
}
var flag = false;
set.forEach((e) => (e == 8 ? (flag = true) : flag));
console.log(set);
console.log(`Number 8 is ${flag ? "exists" : "not exists"} in the set`);
