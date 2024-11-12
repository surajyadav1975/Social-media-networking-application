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
    const userId = req.u._id;
    // console.log(userId);
    try{
        const posts = await post_model.find({ userId: req.u._id });
        const user= await User.findById(userId);
        // console.log(user);
        // const postsWithImages = posts.map(post => ({
        //     ...post._doc,
        //     image: post.image.toString('base64'), // Convert buffer to base64 string
        // }));
        return res.json({posts,user});
    }
    catch(err){
        return res.json(err.message);
    }
}

exports.getallpost=async (req,res)=>{
    // const userId = req.u._id;
    try{
        const posts = await post_model.find().populate('userId', 'username picture');
        return res.json({posts});
    }
    catch(err){
        return res.json(err.message);
    }
}

exports.likePost = async (req, res) => {
    const { postId } = req.params;
    const userId = req.u._id;

    try {
        const post = await post_model.findById(postId);
        const thisuser = await User.findById(userId);

        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        }

        if (!post.likes.includes(thisuser.username)) {
            post.likes.push(thisuser.username);
            await post.save();
        } else {
            return res.status(400).json({ message: "you already liked this post" });
        }

        return res.json(post);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};

exports.followuser = async (req, res) => {
    const { postId } = req.params;
    const userId = req.u._id;

    try {
        const post = await post_model.findById(postId);
        const thisuser = await User.findById(userId);
        const postuser=await User.findById(post.userId);
        // console.log(postuser._id,userId);

        if (postuser._id.toString() === userId.toString()) {
            return res.status(400).json({message: "This is your post, you can't follow yourself, you dumb"});
        }
        if (!postuser.followers.includes(thisuser.username)) {
            postuser.followers.push(thisuser.username);
            await postuser.save();
        } else {
            return res.status(400).json({ message: "you already followed this user" });
        }

        return res.json(postuser);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};