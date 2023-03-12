"use script";

let timeOut = setTimeout(alert("Hello"), 2000);

let time = setTimeout(
  (funct = (a, b) => {
    console.log(a + b);
  }),
  3000,
  23,
  24
);
