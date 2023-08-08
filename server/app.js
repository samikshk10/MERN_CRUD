const express= require("express");
const app=express();
const dotenv = require("dotenv");
dotenv.config();

const mongoose = require("mongoose");
const studentRoutes = require("./routes/student.routes");

const PORT= process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use("/",studentRoutes);

async function init() {
    await mongoose.connect('mongodb://127.0.0.1:27017/samik');
    console.log("connected to mongodb");
  }


  init().then(()=>{
    app.listen(PORT || 8000,(req,res)=>{
        console.log("server is listening at PORT: "+PORT);
    })
    
  }).catch(err => console.log(err));

 

