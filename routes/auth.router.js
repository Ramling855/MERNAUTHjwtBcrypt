const express=require("express");
const {encryptpassword}=require("../middleware/auth.middleware")
const authrouter=express.Router()
const {signup, login}=require("../controler/auth.control")
authrouter.post("/signup",encryptpassword,signup)
authrouter.post("/login",login)

module.exports=authrouter