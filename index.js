// const express=require("express")
const dbconnect=require("./db")
const app =require("./app")
require("dotenv").config();

const port=process.env.PORT||2000
app.get("/",(req,res)=>{
    res.send("all data shon by url")
})
const authrouter=require("./routes/auth.router")

dbconnect(process.env.mongourl).then(()=>{
    console.log("db connect")
}).catch((e)=>{
    console.log(e,"err")
})

app.use("/",authrouter)
app.listen(port,()=>{
    console.log(`connected ${port}`)
})