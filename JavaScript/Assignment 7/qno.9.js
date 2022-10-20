// Give a correct verdict to users input if he enters "yes", "YES","Yes" ,etc
// (any combination) using string methods.
// How will you handle that ?

var str = "yEs";

// handle 1:  this is used only for three combination of "yes"

if (str == "yes" || str == "YES" || str == "Yes") {
  console.log("Handle 1 is successfully executed");
} else {
  console.log("Handle 1 is not successfully executed");
}

//handle 2: this is used for all combination of "yes"

var str2 = str.toUpperCase();
if (str2 == "YES") {
  console.log("Handle 2 is successfully executed");
}
