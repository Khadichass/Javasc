"use script";

let stringArr = ["Aziza", "Sevinch", "Kamola"];
stringArr[0] = "Salima";
stringArr.push = "Nozima";
stringArr.unshift = "Day";
stringArr.pop();
stringArr.shift();

console.log(stringArr);

console.log(stringArr.indexOf("Sevinch"));
console.log(stringArr.indexOf(14));

console.log(stringArr.includes("Sevinch"));
console.log(stringArr.includes(14));

stringArr.splice(0, 3);
console.log(stringArr);

// console.log(stringArr.length);

// let numbArr = [1, 2, 3];
// numbArr[0] = 5;
// numbArr.push = 6;
// console.log(numbArr);
// console.log(numbArr.length);

// let mixArr = ["Aziza", 10, "Sevinch"];
// mixArr[3] = "Madina";
// mixArr.push = 30;
// console.log(mixArr);
// console.log(mixArr.length);

// let stringArr1 = new Array("Aziza", "Sevinch", "Kamola");
// console.log(stringArr1);
// console.log(stringArr1.length);

// let numbArr1 = new Array(1, 2, 3);
// console.log(numbArr1);
// console.log(numbArr1.length);

// let mixArr1 = new Array("Aziza", 10, "Sevinch");
// console.log(mixArr1);
// console.log(mixArr1.length);
