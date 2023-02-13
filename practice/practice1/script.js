"use script";

//Kirish, chiqarish va o'zlashtirish operatorlariga oid masalalar

// 1-masala

// let a = Number(prompt("tomon:"));

// let P = 4 * a;
// alert(P);

// 2-masala

// let a = Number(prompt("kvadrat tomoni:"));
// let S = a ** 2;
// alert(S);

// 3-masala

// let a = Number(prompt("a tomon:"));
// let b = Number(prompt("b tomon:"));
// let S = a * b;
// alert(S);

// let P = 2 * (a + b);
// alert(P);

// 4-masala

// let p = 3.14;
// let d = Number(prompt("d tomon:"));
// let L = p * d;
// alert(L);

// 5-masala

// let a = Number(prompt("a tomon:"));
// let V = a ** 3;
// let S = 6 * a ** 2;
// alert(V);
// alert(S);

// 6-masala

// let a = Number(prompt("a tomon:"));
// let b = Number(prompt("b tomon:"));
// let c = Number(prompt("c tomon:"));

// let V = a * b * c;
// let S = 2 * (a * b + b * c + a * c);

// alert(V);
// alert(S);

// 7-masala

// let p = 3.14;
// let R = Number(prompt("Radius:"));
// let L = 2 * p * R;
// let S = p * R ** 2;
// alert(L);
// alert(S);

// 8-masala

// let a = Number(prompt("a son:"));
// let b = Number(prompt("b son:"));
// let Average = (a + b) / 2;
// alert(Average);

// 9-masala

// let a = Number(prompt("a son:"));
// let b = Number(prompt("b son:"));
// let I = (a * b) ** 1 / 2;
// alert(I);

// 10-masala

// let a = Number(prompt("a son:"));
// let b = Number(prompt("b son:"));
// let Y = a + b;
// let K = a * b;
// let Kv1 = a ** 2;
// let Kv2 = b ** 2;
// alert(Y);
// alert(K);
// alert(Kv1);
// alert(Kv2);

// 11-masala

// let a = Number(prompt("a son:"));
// let b = Number(prompt("b son:"));
// let c = a + b;
// let d = a * b;

// alert(c);
// alert(d);
// if (a < 0) {
//   alert(-a);
// } else if (a > 0) {
//   alert(a);
// }

// if (b < 0) {
//   alert(-b);
// } else if (b > 0) {
//   alert(b);
// }

// alert(Math.abs(a));
// alert(Math.abs(b));

// 12-masala

// let a = Number(prompt("a :"));
// let b = Number(prompt("b :"));

// let c = (a ** 2 + b ** 2) ** 1 / 2;
// let P = a + b + c;

// alert(c);
// alert(P);

// 13-masala

// let R1 = Number(prompt("radius 1:"));
// let R2 = Number(prompt("radius 2:"));
// let p = 3.14;

// let S1 = p * R1;
// let S2 = p * R2;
// let S3 = p * (R1 - R2);

// alert(S1);
// alert(S2);
// alert(S3);

// 14-masala

// let L = Number(prompt("L :"));
// let p = 3.14;

// let R = (L / 2) * p;
// let S = p * R;

// alert(R);
// alert(S);

// 15-masala

// let S = Number(prompt("S :"));
// let p = 3.14;

// let R = (S / p) ** 1 / 2;
// let d = R * 2;

// alert(R);
// alert(d);

// 16-masala

// let x1 = Number(prompt("x1 :"));
// let x2 = Number(prompt("x2 :"));

// let distance = x1 - x2;

// alert(Math.abs(distance));

// 17-masala

// let A = Number(prompt("A :"));
// let B = Number(prompt("B :"));
// let C = Number(prompt("C :"));

// let AC = C - A;
// let BC = C - B;
// let ABC = AC + BC;

// alert(AC);
// alert(BC);
// alert(ABC);

// 18-masala

// let A = Number(prompt("A :"));
// let B = Number(prompt("B :"));
// let C = Number(prompt("C :"));

// let AC = A + C;
// let BC = B + C;
// let ABC = AC * BC;

// alert(AC);
// alert(BC);
// alert(ABC);

// 19-masala

// let x1 = Number(prompt("x1 :"));
// let x2 = Number(prompt("x2 :"));
// let y1 = Number(prompt("y1 :"));
// let y2 = Number(prompt("y2 :"));

// let a = x2 - x1;
// let b = y2 - y1;

// let S = a * b;
// let P = (a + b) * 2;

// alert(S);
// alert(P);

// 20-masala

// let x1 = Number(prompt("x1 :"));
// let x2 = Number(prompt("x2 :"));
// let y1 = Number(prompt("y1 :"));
// let y2 = Number(prompt("y2 :"));

// let distance = ((x2 - x1) ** 2 + (y2 - y1) ** 2) ** 0.5;

// alert(distance);

// 21-masala

let x1 = Number(prompt("x1 :"));
let x2 = Number(prompt("x2 :"));
let x3 = Number(prompt("x3 :"));
let y1 = Number(prompt("y1 :"));
let y2 = Number(prompt("y2 :"));
let y3 = Number(prompt("y3 :"));

let a = ((x2 - x1) ** 2 + (y2 - y1) ** 2) ** 0.5;
let b = ((x3 - x1) ** 2 + (y3 - y1) ** 2) ** 0.5;
let c = ((x3 - x2) ** 2 + (y3 - y2) ** 2) ** 0.5;

let p = (a + b + c) / 2;
let S = (p * (p - a) * (p - b) * (p - c)) ** 0.5;

alert(p);
alert(S);

// 22-masala

// let A = prompt("A :");
// let B = prompt("B :");
// let C = A;

// A = B;
// B = C;
// alert(A);
// alert(C);

// 23-masala

// let A = prompt("A :");
// let B = prompt("B :");
// let C = prompt("C :");

// let e = A;
// let f = B;
// let h = C;

// A = f;
// B = h;
// C = e;

// alert(B);
// alert(C);
// alert(A);

// 24-masala

// let A = prompt("A :");
// let B = prompt("B :");
// let C = prompt("C :");

// let d = A;
// let e = B;
// let f = C;

// A = f;
// B = d;
// C = e;

// alert(A);
// alert(B);
// alert(C);

// 25-masala

// let x = Number(prompt("x :"));

// let y = 3 * x ** 5 - 6 * x ** 2 - 7;

// alert(y);

// 26-masala

// let x = Number(prompt("x :"));

// let y = 4 * (x - 3) ** 6 - 7 * (x - 3) ** 3 + 2;

// alert(y);

// 27-masala

// let A = Number(prompt("A :"));

// let A2 = A ** 2;
// let A4 = A ** 4;
// let A8 = A ** 8;

// alert(A2);
// alert(A4);
// alert(A8);

// 28-masala

// let A = Number(prompt("A :"));

// let A2 = A ** 2;
// let A3 = A ** 3;
// let A5 = A ** 5;
// let A10 = A ** 10;
// let A15 = A ** 15;

// alert(A2);
// alert(A3);
// alert(A5);
// alert(A10);
// alert(A15);

// 29-masala

// let a = Number(prompt("a :"));
// let p = 3.14;
// let rad = a * (p / 180);

// alert(rad);

// 30-masala

// let a = Number(prompt("a :"));
// let p = 3.14;
// let deg = a * (180 / p);

// alert(deg);

// 31-masala

// let Tf = Number(prompt("Tf :"));
// let Tc = ((Tf - 32) * 5) / 9;

// alert(Tc);

// 32-masala

// let Tc = Number(prompt("Tc :"));
// let Tf = (Tc * 9) / 5 + 32;
// alert(Tf);

// 33-masala

// let X = Number(prompt(" X kg :"));
// let A = Number(prompt(" A so'm :"));
// // let Y = Number(prompt(" Y kg :"));

// let B = A / X;
// let Y = (X * B) / A;

// alert(B);
// alert(Y);

// 34-masala

// let X = Number(prompt(" candy (kg) :"));
// let A = Number(prompt(" candy (sum) :"));
// let Y = Number(prompt(" chocolate (kg) :"));
// let B = Number(prompt(" chocolate (sum) :"));

// let x = A / X;
// let y = B / Y;

// let minus = y - x;
// alert(minus);

// 35-masala

// let V = Number(prompt(" V :"));
// let U = Number(prompt(" U :"));
// let T1 = Number(prompt("T1 :"));
// let T2 = Number(prompt("T2 :"));

// let S = (U + V) * T1 - T2 * U;
// alert(S);

// 36-masala
// let V1 = Number(prompt(" V1 :"));
// let V2 = Number(prompt(" V2 :"));
// let T = Number(prompt("T :"));

// let S = V1 * T + V2 * T;
// alert(S);

// 37-masala

// let V1 = Number(prompt(" V1 :"));
// let V2 = Number(prompt(" V2 :"));
// let T = Number(prompt("T :"));

// let S = V1 * T - V2 * T;
// alert(S);

// 38-masala

// let A = Number(prompt("A :"));
// let B = Number(prompt("B :"));

// let x = -B / A;

// alert(x);

// 39-masala

// let A = Number(prompt("A :"));
// let B = Number(prompt("B :"));
// let C = Number(prompt("C :"));

// let D = B ** 2 - 4 * A * C;
// let x1 = ((-B + D ** 1 / 2) / 2) * A;
// let x2 = ((-B - D ** 1 / 2) / 2) * A;

// alert(x1);
// alert(x2);

// 40-masala

// let A1 = Number(prompt("A1 :"));
// let B1 = Number(prompt("B1 :"));
// let C1 = Number(prompt("C1 :"));
// let A2 = Number(prompt("A2 :"));
// let B2 = Number(prompt("B2 :"));
// let C2 = Number(prompt("C2 :"));

// let D = A1 * B2 - A2 * B1;
// let x = (C1 * B2 - C2 * B1) / D;
// let y = (A1 * C2 - A2 * C1) / D;

// alert(D);
// alert(x);
// alert(y);
