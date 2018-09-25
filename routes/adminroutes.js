const express=require("express");
const router=express.Router();

router.get('/login',(req,res)=>{
    res.send("Admin Login");
})

router.get('/dashboard',(req,res)=>{
    res.send("Admin Dashboard");
})

module.exports=router;