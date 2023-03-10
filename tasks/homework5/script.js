"use script";

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
const generate = () => {
  const minEl = document.getElementById("min");
  const maxEl = document.getElementById("max");
  const min = Number(minEl.value);
  const max = Number(maxEl.value);

  // // if (minEl.value === "" || max.maxEl.value === "") {
  // //   alert("Iltimos min va max qiymatlar kiriting!");
  // //   // return;
  // // } else if (minEl.value === "") {
  // //   alert("Iltimos min qiymat kiriting!");
  // //   // return;
  // // } else if (max.maxEl.value === "") {
  // //   alert("Iltimos max qiymat kiriting!");
  // //   // return;
  // // }

  // // if (min > max) {
  // //   alert("Min maxdan kichik bo'lishi kerak!");
  // //   // return;
  // }

  const placeholder = document.querySelector("#placeholder");
  placeholder.textContent = getRandomNumber(min, max);
};
const button = document.getElementById("btn");
button.addEventListener("click", generate);
