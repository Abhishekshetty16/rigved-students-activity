let fs = require('fs');
let data = fs.readFileSync("emp.json");
let jsonString = data.toString();
let jsObject = JSON.parse(jsonString);

for( let i = 0; i < jsObject.length; i++) {
    let{name,age} = jsObject[i];
    console.log(`Name = ${name}, AGE = ${age}`);
}