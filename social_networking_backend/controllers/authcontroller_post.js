const express=require('express');
const post_model=require('../models/post-model');
const User=require('../models/user-model');

exports.createPosts=async (req,res)=>{
    let {content,image}=req.body;

    try{
        let post=await post_model.create({
            userId: req.u.id,
            content,
            image,
        })
        const user = await User.findById(req.u.id);
        user.posts.push(post.id);
        await user.save();
        return res.json(post);
    }
    catch(err){
        return res.send(err.message);
    }
}

exports.getfeed=async (req,res)=>{

    try{
        const user=await User.findById(req.u.id).populate('posts');
        return res.json(user.posts);
    }
    catch(err){
        return res.send(err.message);
    }
}