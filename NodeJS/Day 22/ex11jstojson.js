let fs =require('fs');

let employee={id:3,name:"Rahul",salary:52400};
let jsonString=JSON.stringify(employee);

console.log(employee);
console.log(jsonString);
fs.writeFileSync("employee.json",jsonString);
console.log("done....");