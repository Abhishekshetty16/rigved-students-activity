let express=require("express");
let app=express();
app.listen(3003,() =>console.log("server is running in 3003"));
app.get('/',(request,response)=>{
    response.send("hello Abhishek");
});

app.get("/employee",(request,response)=>{
    let emp={id:100,name:"Abhi",salary:36000};
    response.json(emp);
});

app.get("/employees",(request,response)=>{
    let employeeArray =[
        {id:103, name:'Arun',salary:45200},
        {id:109, name:'Ajit',salary:136600},
        {id:108, name:'Abhi',salary:466200},
        {id:106, name:'Ampadi',salary:7800}
    ];
    response.json(employeeArray);
});