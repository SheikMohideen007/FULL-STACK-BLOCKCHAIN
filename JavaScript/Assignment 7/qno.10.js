// Given a String S, achieve following tasks

var str = "hi, how are you ?";

// a) Convert the String into upper case.

console.log(str.toUpperCase());

// b) Convert only the first character to uppercase

console.log(str[0].toUpperCase() + str.substring(1));

// c) Convert the String into lower case.

console.log(str.toLowerCase());

// d) Break the string into two halves and swap them.

var num = str.length / 2;
console.log(str.substring(num) + "..." + str.substring(0, num));

// e) Count the repeating characters.
var s = "abccdeef";
var sp = s.split("");
var set = new Set();
sp.forEach((e) => set.add(e));
console.log(s.length - set.size);

//f) Reverse the string
var sp = str.split("");
sp.reverse();
var join = sp.join("");
console.log(join);
