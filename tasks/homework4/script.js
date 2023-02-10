"use script ";

// task 1

let a = Number(prompt("Birinchi sonni kirirting :"));
let b = Number(prompt("Ikkinchi sonni kirirting :"));
let c = prompt("Qaysi operatorni tanlaysiz :");

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
