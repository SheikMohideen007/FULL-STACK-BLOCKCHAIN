// Write a Javascript function to test whether the first character of a string
// is lowercase.

var str = "APPLE";
function isFirstCharCaps(str) {
  var regex = /[a-z]/;
  if (regex.test(str)) {
    return true;
  } else {
    return false;
  }
}
console.log(
  isFirstCharCaps(str)
    ? "First char is in LowerCase"
    : "First char is not in Lowercase"
);
