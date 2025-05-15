//Number Data Type
let b:number = 10;
const pi:number = 3.14;

//Boolean Data Type
let isTrue:boolean = true;
let isFalse:boolean = false;

//Null and undefined
let nothing:null = null;
let notAssigned:undefined = undefined;

//String Data Type
let str:string = "Malav Patel";
let str2:string = `Hello ${str}`;

//Special Data Types
let anything:any = 10 ; //can be any datatype
anything = "Hello";

//unknown 
let value:unknown;
value = "Hello";

if(typeof value === 'string'){
    console.log(value.toUpperCase());
}

//void 
function logss(message:string):void {
    console.log(message);
}

function throwError(msg:string):never {
    throw new Error(msg);
}

//Typre inference
let num1= 10; //nor always need to define type
//however, it is a good practice to define types for function parameters and return types

//challange 
function getUserInfo(name:string, age:number) {
    return`${name} is ${age} years old`
}

getUserInfo("Malav", 23);

// Use const where possible to infer better types.

// Use let with type annotation if value changes.

// Avoid any unless absolutely necessary.Use const where possible to infer better types.

// Use let with type annotation if value changes.

// Avoid any unless absolutely necessary.