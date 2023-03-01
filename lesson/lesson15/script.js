"use script";

const arr = [-1, -2, -3, -4, -5, -6, -7, -8, -9, -10];
let min = arr[0];

function arrfunct() {
  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
  }
  return min;
}
arrfunct();

console.log(min);
