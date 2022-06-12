const { json } = require("express/lib/response")
const {passwordcompare,jwtgen}=require("../utils")
const user=require("../model/model")
const signup=(req,res)=>{
    console.log(req.body.name)
    var postd=req.body.name
const tata=new user({
    name:postd.name,
    email:postd.email,
    password:postd.password
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


const data=(req,res)=>{
    user.find().then((all)=>{
        res.send(all)
    }).catch(()=>{
        res.send("err")
    })
    
}
const onedelete=(req,res)=>{
   console.log(req.params.id) 
    user.findByIdAndDelete(req.params.id).then((all)=>{
        res.send(all)
    }).catch(()=>{
        res.send("err")
    })
    
}
const upone=(req,res)=>{
    console.log(req.params.id)
  var  _id=req.params.id
  var body= (req.body.values)
    console.log(body) 
     user.findByIdAndUpdate(_id,{name:body.name,email:body.email})
.then(()=>console.log("updated"))
.catch((err)=>console.log(err))   
   
   
     //  .then((all)=>{
        
    //      res.send(all)
    //  }).catch(()=>{
    //      res.send("err")
    //  })
     
 }

module.exports={
    signup,
    login,
    data,
    onedelete,
    upone
}