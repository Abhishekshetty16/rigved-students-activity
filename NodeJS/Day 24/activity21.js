const { response } = require("express");
let express=require("express");
let fs=require("fs");
port=3005;
let app=express();
app.listen(port,() => console.log("this is running on port${port}"));
let data =fs.readFileSync("simple.json");
app.get('/',(request,response) =>{
    response.send(data);
});