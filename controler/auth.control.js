const { json } = require("express/lib/response")
const {passwordcompare,jwtgen}=require("../utils")
const user=require("../model/model")
const signup=(req,res)=>{
    console.log(req.body)
const tata=new user({
    name:req.body.name,
    email:req.body.email,
    password:req.body.password
})
tata.save()
.then(()=>{
    res.json({
        message:"data inserted"
    })
})
.catch((err)=>{
    res.json({
        message:"err.message"
    })
})
}

const login=(req,res)=>{
    user.findOne({name:req.body.name})
    .then((result)=>{
        passwordcompare(req.body.password,result.password).then(data=>{
console.log("result await",result.password)
console.log("req.body pass",req.body.password)
console.log(data)
            if(data){
     jwtgen(result.name).then(token=>{

        return  res.json({
            message:"login success data matched",
           pass: "password true",
           token:token
        })
     })
}
// else{res.json({
//     message:"login failed"
// })}
      })
        
            
    

    }).catch((err)=>{
        console.log(err)
res.json({
    message:"errerr"
})
    })

}





module.exports={
    signup,
    login
}