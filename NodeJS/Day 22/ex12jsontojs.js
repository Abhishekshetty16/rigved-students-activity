let fs =require('fs');
let data=fs.readFileSync("employee.json");
let jsonString=data.toString();
let jsObject=JSON.parse(jsonString);
console.log(jsonString);
console.log(jsObject);

let {id,name,salary}=jsObject;
console.log(`ID=${id},NAME=${name},SALARY=${salary}`);