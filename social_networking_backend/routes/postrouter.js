const express=require('express')
const router=express.Router()
const {createPosts,getfeed,getallpost,likePost,followuser}=require('../controllers/authcontroller_post')
const loggedin=require('../middlewares/isloggedin')
const upload=require('../config/multer_config')

router.get("/",function(req,res){
    res.send("hey its working");
});

router.post("/create",loggedin,upload.single('image'),createPosts);
router.get("/getfeed",loggedin,getfeed);
router.get("/getallpost",loggedin,getallpost);
router.patch("/like/:postId", loggedin, likePost);
router.patch("/follow/:postId", loggedin, followuser);

module.exports=router;
