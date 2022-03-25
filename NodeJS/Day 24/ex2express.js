const { response } = require("express");
let express=require("express");
const { request } = require("http");
let app=express();
let port=3002
app.listen(port,() => {console.log(`Express is running at ${port}`)});
app.get('/',(request,response)=>{
    response.send("requesting GET");
});

app.post('/',(request,response)=>{
    response.send("requesting post");
});

app.put('/',(request,response) =>{
    response.send('requesting put')
});

app.delete('/',(request,response) =>{
    response.send("requesting delete");
});