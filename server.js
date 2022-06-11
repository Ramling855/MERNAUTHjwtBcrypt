 const app=require("./app");
 const dbconnect=require("./db")
// const express=require("express");
// const app=express();
require("dotenv").config();
const port=process.env.PORT||3000;
dbconnect(process.env.mongourl).then(()=>{
    
    app.listen(port,()=>{
        console.log(`server started at ${port}`)
        console.log("dbconnect connected ")
    })
    
}).catch(()=>{
    console.log("db err")
})


