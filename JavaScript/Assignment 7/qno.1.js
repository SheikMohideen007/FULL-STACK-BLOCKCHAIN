var str = "Icecream";

function truncate(str) {
  if (str.length > 4) {
    console.log(str.substring(0, 4) + "...");
  } else {
    console.log(str);
  }
}
truncate(str);
