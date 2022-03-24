let fs = require('fs');
let data = fs.readFileSync("activity2.json");
let jsonString = data.toString();
let jsObject = JSON.parse(jsonString);

for( let i = 0; i < jsObject.length; i++) {
    let{id,name,salary} = jsObject[i];
    console.log(`Id = ${id}, Name = ${name}, Salary = ${salary}`);
}