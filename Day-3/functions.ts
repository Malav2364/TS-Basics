//functions with type annotations
function malav(a:number, b:number){
    return a+b;
}

//optional parameters
//optinal parameter are always written at last after required parameters
function opt(name:string, age?:number){
    if(age){
        console.log(`Name is ${name}  and age is ${age} .`)
    }else{
        console.log(`Name is ${name}  and age is not provided .`)
    }
}

//default parameters
function def(message:String = "Hello world"){
    return message;
}

//rest parameters
function sumAll(...nums:number[]):number{
    return nums.reduce((acc, crr)=>acc+crr, 0);
}

sumAll(1,2,3,4,5)//15

//Arrow functions
const multiply = (a:number,b:number):number=> a*b;

const addd = (n1:number, n2:number):number=>n1+n2;

//function types
type mathfunc = (n3:number, n4:number) => number;
const adddd : mathfunc = (x,y)=>x-y;

type mathfunc2 = (n5:number, n6:number)=>number;
const subt : mathfunc2=(x,y)=>x-y;


//Practice
type calcFuncs = (n7:number, n8:number)=> number;
const multFunc : calcFuncs=(x,y)=>x*y;
const divFunc : calcFuncs=(x,y)=>x/y;
const addFunc : calcFuncs=(x,y)=>x+y;
const subFunc : calcFuncs=(x,y)=>x-y;