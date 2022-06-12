const { Route } = require("express");
const express=require("express");
const {signup, login}=require("./controler/auth.control")
const authrouter=require('./routes/auth.router')

const app=express();

app.use(express.json())
const cors =require("cors")
app.use(cors())

// app.use("/auth",signup)
app.use("/auth",authrouter)
// app.use("/auth",login)
module.exports=app;