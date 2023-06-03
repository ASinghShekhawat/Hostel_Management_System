const express =require('express');
const app =express();
const mysql=require("mysql");
const cors =require("cors");

app.use(cors());
app.use(express.json());

const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Aditya@backend",
    database:"projectdb"
});
db.connect(function(error){
    if(error) throw error
    else console.log("connection successfully");
})

app.post("/admin",(req,res)=>{
    const username =req.body.username
    const password =req.body.password
    
    db.query("SELECT * FROM admin WHERE email =? AND password=?",[username,password],(err,result)=>{
        if(err){
            req.setEncoding({err:err});
        }else{
            if(result.length>0){
                console.log(result);
                res.send(result);
            }else{
                res.send({message:"WRONG USERNAME OR PASSWORD "});
            }   
        }   
    })
})  
app.post("/student",(req,res)=>{
    const email =req.body.email;
    const password =req.body.password;
    db.query("SELECT * FROM student WHERE email =? AND password=?",[email,password],
    (err,result)=>{
        if(err){
            req.setEncoding({err:err});
        }else{
            if(result.length>0){
                res.send(result);
                console.log(result);
            }else{
                res.send({message:"WRONG USERNAME OR PASSWORD "});
            }   
        }   
    })
})
app.post("/query",(req,res)=>{
    const query=req.body.query;
    console.log(query);
    db.query("INSERT INTO student_profile (query) VALUES (?) ",[query],(err,result)=>{
        if(err){
            // req.setEncoding({err:err});
            console.log(err);
        }else{
            console.log(result);
            res.send(result);
            }     
    })
})
app.post("/studentdetails",(req,res)=>{
    const email =req.body.email;
    db.query("SELECT * FROM student where email = ?",[email],(err,result)=>{
        if(err){
            req.setEncoding({err:err});
        }
        else{
            res.send(result);
        }
    })
})

app.listen(3001,()=>{
    console.log("Running on port 3001");
});