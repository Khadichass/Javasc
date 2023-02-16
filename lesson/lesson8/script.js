"use script";

// while

// let i = 1;
// while (i <= 10) {
//   console.log(i);

//   if (i > 5) {
//     break;
//   }
//   i++;
// }

// loops in loops

// const arr = [
//   ["year", "month", "week", "day", "hours", "minutes"],
//   [12, 13, 14, 15, 16, 17],
//   [true, false],
// ];

// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].length; j++) {
//     console.log(arr[i][j]);
//   }
// }

// String methods
let str = "Forntend Developer";
for (let i = 0; i < str.length; i++) {
  // console.log(str[i]);
}

let str1 = "Backend";

console.log(str.indexOf("F"));
console.log(str.lastIndexOf("D"));
console.log(str.startsWith("ort"));
console.log(str.endsWith("per"));
console.log(str.slice(0, 4));
console.log(str.substring(4, 0));
console.log(str.substr(0, 10));
console.log(str.replace("Developer", "Programmer"));
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.concat("", str1));
console.log(str.trim());
console.log(str.charAt(7));

let arr = ["s", "a", "l", "o", "m"];
console.log(str.charAt(7));
