const express=require('express')
const router=express.Router()
const {createPosts,getfeed}=require('../controllers/authcontroller_post')
const loggedin=require('../middlewares/isloggedin')

router.get("/",function(req,res){
    res.send("hey its working");
});

router.post("/create",loggedin,createPosts);
router.get("/getfeed",loggedin,getfeed)
module.exports=router;
