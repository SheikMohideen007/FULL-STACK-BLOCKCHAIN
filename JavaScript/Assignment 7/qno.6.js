// What string method can be used to check the occurrence of a specified
// text in a string?

var str = "this is the cat, this is the dog";
var d = str.match(/this/g); // match with the regex expression g-globally in the string
console.log(d.length); //print -> 2
