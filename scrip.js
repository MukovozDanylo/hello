"use strict"  
let vopros = prompt('Для вибору умови напишіть 1. Для вибору циклу напишіть 2. Для вибору циклу з передумовою напишіть 3. Для вибору циклу з післяумовою напишіть 4',21);
switch (true) {
case (vopros == 1) :
alert('Все гаразд');
break;
case (vopros == 2) :
alert('Все гаразд');
break;
case (vopros == 3) :
alert('Все гаразд');
break;
case (vopros == 4) :
alert('Все гаразд');
break;
default:
alert('Напишить 1,2,3 або 4!');
}
function a1() {
let x;
x = prompt('Введіть Х');
let y;
y = prompt('Введіть У');
let z;
z = prompt('Введіть z');
let numb1 = Number(x);
let numb2 = Number(y);
let numb3 = Number(z);
let A;
let B;
if (numb1<numb3) {
A = 1+2*Math.sin(numb1+numb3)**2;
console.log('A=',A); }
else {
B = 1+ numb3/12+Math.exp(-numb1);
console.log('B=',B); }
}
function a2() {
let a;
a = prompt('Введіть a');
let x1;
x1 = prompt('Введіть x1');
let x2;
x2 = prompt('Введіть x2');
let n;
n = prompt('Введіть n');
let num1 = Number(a);
let num2 = Number(x1);
let num3 = Number(x2);
let num4 = Number(n);
let y1;
for( num2 ; num2<=num3 ; num2=num2+num4) {
y1 = (Math.log(Math.sqrt(num2))**2)/(num1*Math.sqrt(num2));
console.log('y=',y1); }
}
function a3() {
let a;
a = prompt('Введіть a');
let x1;
x1 = prompt('Введіть x1');
let x2;
x2 = prompt('Введіть x2');
let x3;
x3 = prompt('Введіть x3');
let x4;
x4 = prompt('Введіть x4');
let x5;
x5 = prompt('Введіть x5');
let numbe1 = Number(a);
let numbe2 = Number(x1);
let numbe3 = Number(x2);
let numbe4 = Number(x3);
let numbe5 = Number(x4);
let numbe6 = Number(x5);
let arr = [numbe2 , numbe3 , numbe4 , numbe5 , numbe6];
let f1;
let y2;
f1 = 0;
while (f1 <= numbe2+numbe3+numbe4+numbe5+numbe6 ) {
let i;
for ( i = 0; i < arr.length; i++) {
y2 = (Math.log(Math.sqrt(arr[i]))**2)/(a*Math.sqrt(arr[i]));
console.log('y=',y2); }  
f1 = f1 + arr[i]; }  
}
function a4() {
let a;
a = prompt('Введіть a');
let x1;
x1 = prompt('Введіть x1');
let x2;
x2 = prompt('Введітьx2');
let x3;
x3 = prompt('Введіть x3');
let x4;
x4 = prompt('Введіть x4');
let x5;
x5 = prompt('Введіть x5');
let number1 = Number(a);
let number2 = Number(x1);
let number3 = Number(x2);
let number4 = Number(x3);
let number5 = Number(x4);
let number6 = Number(x5);
let arr = [number2 , number3 , number4 , number5 , number6];
let f1;
let y2;
f1 = 0;
do {
let i;
for ( i = 0; i < arr.length; i++) {
y2 = (Math.log(Math.sqrt(arr[i]))**2)/(a*Math.sqrt(arr[i]));
console.log('y=',y2); }  
f1 = f1 + arr[i]; }
while (f1 <= number2+number3+number4+number5+number6 ) ;
}
if (vopros == 1) {
a1();
}
if (vopros == 2) {
a2();
}
if (vopros == 3) {
a3();
}
if (vopros == 4) {
a4();
}