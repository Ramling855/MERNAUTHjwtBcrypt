const bcrypt = require('bcrypt');
const encryptpassword=async(req,res,next)=>{

try {
    const hash=await bcrypt.hash(req.body.password,10)
    req.body.password=hash;
    console.log(hash)
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