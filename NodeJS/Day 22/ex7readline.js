let read=require("readline-sync");
let name=read.question("Enter your name:");
let age=read.question("enter your age:");
console.log(`hello ${name}, your age is ${age}`);

let num1=read.questionInt("num1 :");
let num2=read.questionInt("num2 :");
let result=num1+num2;
console.log(`result=${result}`);