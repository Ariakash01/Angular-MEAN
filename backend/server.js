const mango=require('mongoose');
const express=require('express');
const cors=require('cors');
const jtoken = require('jsonwebtoken');
const bcrypt=require('bcryptjs');
const route = require('./Routes/auth');
const app=express();
app.use(cors());
 app.use(express.json());
const PORT = process.env.PORT || 8000;
// app.use(express.urlencoded({ extended: true }));
mango.connect("mongodb+srv://ariakash01:ARIakash067@cluster0.ljlxnio.mongodb.net/fullstack").then(()=>{
    console.log("Db connect")
}).catch((error)=>console.log("hello"))


app.use("/api",route);

app.listen(PORT,()=>{
    console.log("Port Connected on 8000");
});