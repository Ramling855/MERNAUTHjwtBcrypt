const express=require("express");
const {encryptpassword}=require("../middleware/auth.middleware")
const authrouter=express.Router()
const {signup, login,data,onedelete,upone}=require("../controler/auth.control")
authrouter.post("/signup",signup)
authrouter.post("/login",login)
authrouter.get("/data",data)

authrouter.delete("/delete/:id",onedelete)
authrouter.put("/update/:id",upone)

module.exports=authrouter