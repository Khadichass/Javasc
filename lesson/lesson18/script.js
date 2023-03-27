"use script";

let mainMore = document.querySelector(".main__more");
let openBtn = document.getElementById("main__btn");
let closeBtn = document.getElementById("close__btn");

let openMenubtn = function () {
  mainMore.style.display = "block";
};

openBtn.addEventListener("click", openMenubtn);

let closeMenubtn = function () {
  mainMore.style.display = "none";
};

closeBtn.addEventListener("click", closeMenubtn);

btn__sb;

let submit = document.getElementById("btn__sb");

submit.addEventListener("click", function () {
  console.log("click");
});

submit.addEventListener("click", (e) => {
  e.preventDefault();
});
