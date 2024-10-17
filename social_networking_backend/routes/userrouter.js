const express=require('express')
const router=express.Router()
const {registerUser,loginUser,logoutUser,getProfile,checkAuth,getfollowers}=require('../controllers/authcontrollers')
const authMiddleware=require('../middlewares/isloggedin')

router.get("/",function(req,res){
    res.send("hey its working");
});

router.post('/register',registerUser);
router.post('/login',loginUser);
router.get('/logout',logoutUser);
router.get('/profile', authMiddleware, getProfile);
router.get('/getfollowers', authMiddleware, getfollowers);
router.get('/check_auth',checkAuth)

module.exports=router;
