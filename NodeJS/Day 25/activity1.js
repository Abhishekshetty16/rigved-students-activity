let express=require('express');
let app=express();
let fs=require('fs');
let parser=require('body-parser');
let port=3001;
app.listen(port,()=>console.log(`Server is running at ${port}`));
app.use(parser.json());

app.post('/user',(request,response)=>{
    let data=fs.readFileSync('activity.json');
    let dataString=data.toString();
    if(dataString.length<1 || dataString ==""){
        jsArray=[];
    }else {
        jsArray=JSON.parse(dataString);
    }
    let content=request.body;
    jsArray.push(content);
    let jsonObject=JSON.stringify(jsArray);
    fs.writeFileSync('activity.json',jsonObject);
    response.json('Done..')
});
app.get('/user',(request,response)=>{
    let data=fs.readFileSync('activity.json');
    let datastring=data.toString();
    let jsObject=JSON.parse(datastring);
    response.json(jsObject);
});
app.get('/user/:id',(request,response)=>{
    let id1=request.params.id;
    let data=fs.readFileSync('activity.json');
    let datastring=data.toString();
    let jsObject=JSON.parse(datastring);
    for(let i=0;i<jsObject.length;i++){
        if(jsObject[i].userId==id1){
            let show={userId: jsObject[i].userId, name: jsObject[i].name, age: jsObject[i].age};
            response.json(show);
        }
    }
});
app.delete('/user/:name',(request,response)=>{
    let id1=request.params.id;
    let data=fs.readFileSync('activity.json');
    let datastring=data.toString();
    let jsObject=JSON.parse(datastring);
    for(let i=0;i<jsObject.length;i++){
        if(jsObject[i].userId==id1){
            jsObject.splice(i,1);
            let jsonObject=JSON.stringify(jsObject);
            fs.writeFileSync('activity.json',jsonObject);
            response.json(jsObject);
        }
    }
});