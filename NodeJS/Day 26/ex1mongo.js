let express=require("express");
let cors=require("cors");
let mongoClient=require("mongodb").MongoClient;
let parser=require("body-parser");
const { response } = require("express");
const req = require("express/lib/request");
////importing all the libraries
let app=express();
let dbURL="mongodb://localhost:27017";
let port=3001;
app.listen(port,() => console.log(`server running in ${port}`));

app.use(parser.json());
app.use(cors());
/////// getting the data in mongodb
app.get('/users',(request,response) =>{
    mongoClient.connect(dbURL,{useNewUrlParser:true},(error,client)=>{
        if(error) throw error;
        let db =client.db("mydb");
        let cursor=db.collection("user").find();
        let users=[];
        cursor.forEach((doc,err)=>{
            if(err) throw err;
            users.push(doc);
        },() =>{
            response.json(users);
            client.close();
        });
    });
});


///////storing the data in mongodb

app.post("/users",(request,response)=>{
    let userDocument=request.body;
    mongoClient.connect(dbURL,{useNewUrlParser:true},(error,client)=>{
        if(error) throw error;
        let db =client.db("mydb");
        db.collection("user").insertOne(userDocument,(err,res)=>{
            if(err){
                response.status(409).json({"message":`user with an id${userDocument._id} exists`})
            }
            response.status(201).json(res);
            client.close();
        });

    });
});

////get the single data in mongodb

app.get("/users/:id",(request,response)=>{
    let id =parseInt(request.params.id);
    mongoClient.connect(dbURL,{useNewUrlParser:true},(error,client)=>{
        if(error) throw error;
        let db=client.db("mydb");
        db.collection("user").findOne({_id:id})
        .then((doc)=>{
            if(doc !=null){
                response.json(doc);
            }else{
                response.status(404).json({"message":`sorry ${id} doesn't exist`})
            }
            client.close();
        });
    });
});

/////deleting single data in mongodb

app.delete("/users/:id",(request,response)=>{
    let id=parseInt(request.params.id);
    mongoClient.connect(dbURL,{useNewUrlParser:true},(error,client)=>{
        if(error) throw error;
        let db=client.db("mydb");
        db.collection("user").deleteOne({_id:id})
        .then((doc)=>{
            response.json(doc);
            client.close();
        });
    });
});

///updating the mongodb

app.put("/users/:id/:age",(request,response)=>{
    let id=parseInt(request.params.id);
    let ageNew=parseInt(request.params.age);
    mongoClient.connect(dbURL,{useNewUrlParser:true},(error,client)=>{
        if(error) throw error;
        let db=client.db("mydb");
        db.collection("user").updateOne({_id:id},{$set:{age:ageNew}})
        .then((doc)=>{
            response.json(doc);
            client.close();
        });
    });
});