const bcrypt = require('bcrypt');
const encryptpassword=async(req,res,next)=>{

try {
    const hash=await bcrypt.hash(req.body.password,1)
    hash=req.body.password;
    // console.log(hash)
    next();
} catch (error) {
    console.log(error)
    res.send({
        message:" error in password"
    })
}

}
module.exports={
    encryptpassword
}