let express=require('express');
let app=express();
let parser=require("body-parser");
let port=3000;

app.listen(port,() => console.log(`server running in ${port}`));
app.use(parser.json());
app.post('/user',(request,response)=>{
    let content=request.body;
    console.log(content);
    response.send(`hello,${content.name},your age is:${content.age}`);
});
app.post('/user/:id',(request,response)=>{
    let content=request.body;
    let id=request.params.id;
    console.log(id,content);
    let user={userid: id,username:content.name,age:content.age};
    response.json(user);
});