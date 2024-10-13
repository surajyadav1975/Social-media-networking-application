const jwt=require("jsonwebtoken");

const generatetoken =(user)=>{
    return jwt.sign({email:user.email},process.env.JWT_KEY);
}

module.exports.generatetoken=generatetoken;