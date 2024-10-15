const jwt=require("jsonwebtoken");
const user_model=require("../models/user-model");

module.exports=async function(req,res,next){
    // console.log(req.cookies.token);
    if(!req.cookies.token){
        return res.json({message:"you havent loggedin"});
    }

    try{

        let decoded=jwt.verify(req.cookies.token, process.env.JWT_KEY);
        let u=await user_model.findOne({email:decoded.email});
        req.u=u;
        next();
    }catch(err){
    
        return res.json("error occured");
        return res.redirect("/");
    }
}