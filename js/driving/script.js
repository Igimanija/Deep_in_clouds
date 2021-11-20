console.log("Hello world!");

var speed = document.getElementById("speed");

var first = document.getElementById("first");
var second = document.getElementById("second");
var third = document.getElementById("third");
var fourth = document.getElementById("fourth");
var fifth = document.getElementById("fifth");
var r = document.getElementById("R");

first.addEventListener("mouseover", function (event) {
  speed.innerHTML = 1;
});

second.addEventListener("mouseover", function (event) {
  speed.innerHTML = 2;
});

third.addEventListener("mouseover", function (event) {
  speed.innerHTML = 3;
});

fourth.addEventListener("mouseover", function (event) {
  speed.innerHTML = 4;
});

fifth.addEventListener("mouseover", function (event) {
  speed.innerHTML = 5;
});
r.addEventListener("mouseover", function (event) {
  speed.innerHTML = "R";
});
