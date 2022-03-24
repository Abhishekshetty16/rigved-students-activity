let fs =require('fs');
const { fstat } = require("fs");
let read=require("readline-sync");
 let id =read.question("Enter ID : ");
 let name=read.question("Enter your name : ");
 let salary=read.questionFloat("enter your salary : ");
 let z={id ,name , salary};
 let jsonString=JSON.stringify(z);
 console.log(jsonString)

 fs.writeFileSync('activity1.json',jsonString);
 console.log("Succesful");


