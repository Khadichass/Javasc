"use script";
//task 1

let weight = Number(prompt("Enter your weight:"));
let height = Number(prompt("Enter your height:"));
let height2 = height / 100;
let A = weight / height2 ** 2;
console.log(A);

if (A < 18.5) {
  console.log("underweight");
} else if (18.5 <= A && A <= 24.9) {
  console.log("normal");
} else if (25 <= A && A <= 29.9) {
  console.log("overweight");
} else if (30 <= A && A <= 34.9) {
  console.log("obese");
} else if (35 < A) {
  console.log("extremely_obese");
}

// task 2

// let num = Number(prompt("Enter a number:"));
// // console.log(num % 2);
// if (num % 2) {
//   console.log("toq");
// } else {
//   console.log("juft");
// }
