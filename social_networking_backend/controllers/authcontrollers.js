const express=require('express');
const user=require('../models/user-model');
const bcrypt=require('bcrypt');
const {generatetoken}=require('../utils/generatetoken')
const jwt=require('jsonwebtoken')
// app.use(express.json());
exports.registerUser=async (req,res)=>{
    let {username,email,password}=req.body;
    
    let u=await user.findOne({email});
    if(u) return res.status(200).send("user already exist");
    try{

        bcrypt.genSalt(10,function(err,salt){
            bcrypt.hash(password,salt,async function(err,hash){
                if(err) return req.send(err.message);
                else{
                    let createduser= await user.create({
                        username,
                        password:hash,
                        email,
                    })
       
                    let token=generatetoken(createduser);
                    res.cookie("token",token);
                }
            })
        })
       }catch(err){
        res.send(err.message);
       }
       res.send("successfully registered");
}

exports.loginUser=async (req,res)=>{
    let {email,password}=req.body;

    let u=await user.findOne({email});
    if(!u) return res.status(200).send("user dont have any account, try to register");

    try{
        bcrypt.compare(password, u.password, function(err, result) {
            if(result){
                console.log(u);
                let token=generatetoken(u);
                res.cookie("token",token);
                return res.status(200).send("Successfully logged in");
            }
            else{
                return res.send("username or password is incorrect");
            }
        });
    }
    catch(err){
        return res.send(err.message);
    }
}

exports.getProfile = async (req, res) => {
    try {
      const u = await user.findById(req.u.id).select("-password");
      return res.json(u);
    } catch (err) {
      return res.status(500).send("Server error");
    }
}

exports.logoutUser=(req,res)=>{
    res.cookie("token","");
    res.send("loggedout");
}