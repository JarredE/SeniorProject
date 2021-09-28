function start() {
  var Fname = document.getElementById('fname').value;
  var Lname = document.getElementById('lname').value;
  var Box;
  if (document.getElementById('male').checked) {
    var Box = document.getElementById('male').value;
  }
  else if (document.getElementById('female').checked) {
  var Box = document.getElementById('female').value;
  }
sessionStorage.setItem("First", Fname);
sessionStorage.setItem("Last", Lname);
sessionStorage.setItem("Gen", Box);
location.href = "page.html";
}



function ShowText() {

var FirstName = sessionStorage.getItem("First");
var LastName = sessionStorage.getItem("Last");
var G = sessionStorage.getItem("Gen");

document.getElementById("f").innerHTML = FirstName;
document.getElementById("l").innerHTML = LastName;
document.getElementById("g").innerHTML = G;


}
