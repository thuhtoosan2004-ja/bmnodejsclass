require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require('mongoose');
mongoose.connect(process.env.DB_URL);

app.use(express.json());
const userRoute = require("./routes/user_route");

app.use("/",userRoute);

app.use((error,req,res,next)=>{
    
})


app.listen(process.env.PORT,()=>{
    console.log("Server Starting !");
})