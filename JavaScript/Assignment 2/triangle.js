var a = parseInt(10),
  b = parseInt(10),
  c = parseInt(10);
function checkTriangle(a, b, c) {
  if (a == b && b == c && c == a) {
    console.log("This is Equilateral Triangle");
  }
  if (a == b || b == c || c == a) {
    console.log("This is Isoceles Traingle");
  }
  if (a != b && b != c && c != a) {
    console.log("This is Scalene Triangle");
  }
}
checkTriangle(a, b, c);
