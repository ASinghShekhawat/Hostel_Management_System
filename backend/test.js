const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require("cors")  // these are the imports


app.use(cors());  //cross orgin connection
app.use(express.json())  // to parse JSON requests

const db = mysql.createConnection({ //This create a connection pool
    host: 'localhost',
    user: 'root',
    password: 'Aditya@backend',
    database: 'projectdb'
})      

app.post('/admin', (req, res) => {
    const username = req.body.username
    const password = req.body.password
    console.log(req.body)

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

app.post('/student', (req, res)=>{
    const username = req.body.email
    const password = req.body.password

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

app.post('/api/saveAccountDetails', (req, res)=>{
    const accountdetails = req.body
    console.log(accountdetails)
})

app.listen(3001, ()=> {
    console.log("running on the port 3001")
})