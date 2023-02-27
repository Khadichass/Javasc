"use script";

// call and apply

let user = {
  fName: "Umar",
  lName: "Hamidov",
  login: "umar",
  pass: "password",
  email: "email@gmail.com",
  currenty: 2023,

  countby: function (age) {
    let birthy = this.currenty - age;
    return birthy;
  },
};

console.log(user.countby(30));
