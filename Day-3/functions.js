"use strict";
//functions with type annotations
function malav(a, b) {
    return a + b;
}
//optional parameters
//optinal parameter are always written at last after required parameters
function opt(name, age) {
    if (age) {
        console.log(`Name is ${name}  and age is ${age} .`);
    }
    else {
        console.log(`Name is ${name}  and age is not provided .`);
    }
}
//default parameters
function def(message = "Hello world") {
    return message;
}
//rest parameters
function sumAll(...nums) {
    return nums.reduce((acc, crr) => acc + crr, 0);
}
sumAll(1, 2, 3, 4, 5); //15
//Arrow functions
const multiply = (a, b) => a * b;
const addd = (n1, n2) => n1 + n2;
const adddd = (x, y) => x - y;
const subt = (x, y) => x - y;
const multFunc = (x, y) => x * y;
const divFunc = (x, y) => x / y;
const addFunc = (x, y) => x + y;
const subFunc = (x, y) => x - y;
