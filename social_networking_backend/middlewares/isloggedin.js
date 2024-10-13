const jwt=require("jsonwebtoken");
const user_model=require("../models/user-model");

module.exports=async function(req,res,next){
    if(!req.cookies.token){
        return res.send("you havent loggedin");
    }

    try{

        let decoded=jwt.verify(req.cookies.token, process.env.JWT_KEY);
        let u=await user_model.findOne({email:decoded.email});
        req.u=u;
        next();
    }catch(err){
    
        return res.send("error occured");
        return res.redirect("/");
    }
}