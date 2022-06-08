const mongoose=require("mongoose")
dbconnect=(url)=>{
   return mongoose.connect(url)
}

module.exports=dbconnect;