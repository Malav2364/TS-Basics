"use strict";
//Number Data Type
let b = 10;
const pi = 3.14;
//Boolean Data Type
let isTrue = true;
let isFalse = false;
//Null and undefined
let nothing = null;
let notAssigned = undefined;
//String Data Type
let str = "Malav Patel";
let str2 = `Hello ${str}`;
//Special Data Types
let anything = 10; //can be any datatype
anything = "Hello";
//unknown 
let value;
value = "Hello";
if (typeof value === 'string') {
    console.log(value.toUpperCase());
}
//void 
function logss(message) {
    console.log(message);
}
function throwError(msg) {
    throw new Error(msg);
}
//Typre inference
let num1 = 10; //nor always need to define type
//however, it is a good practice to define types for function parameters and return types
//challange 
function getUserInfo(name, age) {
    return `${name} is ${age} years old`;
}
getUserInfo("Malav", 23);
// Use const where possible to infer better types.
// Use let with type annotation if value changes.
// Avoid any unless absolutely necessary.Use const where possible to infer better types.
// Use let with type annotation if value changes.
// Avoid any unless absolutely necessary.
