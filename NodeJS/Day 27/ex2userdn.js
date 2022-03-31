let mongoose=require("mongoose");
let dbURL="mongodb://localhost:27017/mydb";
mongoose.connect(dbURL);
let db=mongoose.connection;
db.once("open",()=>{
    let doc={_id:121,name:"Abhi",age:23}
    let userSchema=mongoose.Schema({_id:Number,name:String,age:Number});
    let Usermodel=mongoose.model("user",userSchema,'user');
    let user=new Usermodel(doc);
    user.save((err,res)=>{
        if(err) throw err;
        console.log(`stored ${res.name}`)
    });
});