const express=require('express');
const post_model=require('../models/post-model');
const User=require('../models/user-model');


exports.createPosts=async (req,res)=>{
    let {content}=req.body;
    // console.log(content);
    // console.log(req.file,req.file.buffer);
    try{
        let post=await post_model.create({
            userId: req.u._id,
            image:req.file.buffer.toString('base64'),
            content,
        })
        const user = await User.findById(req.u.id);
        user.posts.push(post.id);
        await user.save();
        return res.json(post);
    }
    catch(err){
        return res.json({message:err.message});
    }
}

exports.getfeed=async (req,res)=>{
    try{
        const posts = await post_model.find({ userId: req.u._id });
        // const postsWithImages = posts.map(post => ({
        //     ...post._doc,
        //     image: post.image.toString('base64'), // Convert buffer to base64 string
        // }));
        return res.json(posts);
    }
    catch(err){
        return res.json(err.message);
    }
}