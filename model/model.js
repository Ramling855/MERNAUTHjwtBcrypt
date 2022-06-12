const mongoose=require("mongoose")
const Scemamodel=new mongoose.Schema({
    name:{
        type:String,
    },
    price:{
        type:String,
    },
    quantity:{
        type:String,
    },
    brand:{
        type:String,
    }

},{
    timestamps:true
}

)
module.exports=mongoose.model("user1",Scemamodel)
