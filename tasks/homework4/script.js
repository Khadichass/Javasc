"use script ";

// task 1

// let a = Number(prompt("a :"));
// let c = prompt("Choose operator :");
// let b = Number(prompt("b :"));

// let output;

// switch (c) {
//   case "*":
//     output = a * b;
//     break;
//   case "/":
//     output = a / b;
//     break;
//   case "+":
//     output = a + b;
//     break;
//   case "-":
//     output = a - b;
//     break;
//   default:
//     output = "topilmadi";
// }

// console.log(output);

// task 2

let a = Number(prompt("Birinchi sonni kirirting :"));
let b = Number(prompt("Ikkinchi sonni kirirting :"));
let c = prompt("Qaysi opratorni tanlaysiz :");

let output;

switch (c) {
  case "*":
    output = a * b;
    break;
  case "/":
    output = a / b;
    break;
  case "+":
    output = a + b;
    break;
  case "-":
    output = a - b;
    break;
  default:
    output = "topilmadi";
}

console.log(output);
