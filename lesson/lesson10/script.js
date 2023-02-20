"use script";

let mainTitle = document.querySelector(".main__left--title");
let mainDesc = document.querySelector(".main__left--desc");
let mainMore = document.querySelector(".main__more");
let mainRight = document.querySelector(".main__right");
let openBtn = document.getElementById("main__btn");
let closeBtn = document.getElementById("close__btn");

// mainTitle.textContent =
//   "Lorem ipsum dolor, sit amet consectetur adipisicing elit";

// openBtn.addEventListener("click", function () {
//   alert("Hello World");
//   mainRight.style.backgroundColor = "yellow";
// });

//----------

// let onClick = function () {
//   alert("Hello");
//   mainRight.style.backgroundColor = "yellow";
// };

// openBtn.addEventListener("click", onClick);

//-----------

let openMenubtn = function () {
  mainMore.style.display = "block";
};

openBtn.addEventListener("click", openMenubtn);

let closeMenubtn = function () {
  mainMore.style.display = "none";
};

closeBtn.addEventListener("click", closeMenubtn);
