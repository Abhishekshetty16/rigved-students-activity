let express = require('express');
let bodyParser = require('body-parser');
let app = express();
let mysql = require('mysql'); 
app.use(bodyParser.json());
let port=3002;
app.listen(port,() => console.log(`server running in ${port}`));
var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root', 
    database: 'employeedb' 
  });
conn.connect((err) =>{
    if(err) throw err; 
    console.log('Mysql Connected');
  });
     /////
app.get('/employee',(req, res) => {
let sqlQuery = "SELECT * FROM employee";

let query = conn.query(sqlQuery, (err, results) => {
    if(err) 
    throw err;
    res.send((results));
});
});
app.get('/employee/:id',(req, res) => {
    let sqlQuery = "SELECT * FROM employee WHERE id=" + req.params.id;
      
    let query = conn.query(sqlQuery, (err, results) => {
      if(err) throw err;
      res.send((results));
    });
});

   /////
app.post('/employee',(req, res) => {
    let data = {id: req.body.id,name: req.body.name, salary: req.body.salary};
    
    let sqlQuery = "INSERT INTO employee SET ?";
    
    let query = conn.query(sqlQuery, data,(err, results) => {
      if(err) throw err;
      res.send((results));
    });
});

  //////
app.put('/employee/:id',(req, res) => {
    let sqlQuery = "UPDATE employee SET salary='"+req.body.salary+"', name='"+req.body.name+"' WHERE id="+req.params.id;
    
    let query = conn.query(sqlQuery, (err, results) => {
      if(err) throw err;
      res.send((results));
    });
  });

    //////
app.delete('/employee/:id',(req, res) => {
    let sqlQuery = "DELETE FROM employee WHERE id="+req.params.id+"";
      
    let query = conn.query(sqlQuery, (err, results) => {
      if(err) throw err;
        res.send((results));
    });
  }); 
