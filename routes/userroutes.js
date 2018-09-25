//============================== Routing ========================================

const express=require("express");
const router=express.Router();   //now replace app with router

// app.get('/login',(req,res)=>{
//     res.send("This is login..."+req.param("userid")+""+req.param("pwd"));
// })

// app.post('/login',(req,res)=>{
//     var userid=req.body.userid;
//     var pwd=req.body.pwd;
//     if(userid==pwd){
//         res.send("Welcome "+userid);
//     }
//     else{
//         res.send("Invalid username or password");
//     }
// })

// router.get('/login',(req,res)=>{
//     res.send("This is login..."+req.param("userid")+""+req.param("pwd"));
// })

// router.post("/register",(req,res)=>{
//    res.send('<h1> Register </h1>');
// })

router.post('/register',(req,res)=>{
 var userid=req.body.userid;
 var pwd=req.body.pwd;
 const useroperations=require("../db/useroperations");
 const User=require("../model/user");
 var userObject=new User(userid,pwd);
 useroperations.register(userObject,res);
})

router.post('/login',(req,res)=>{
    var userid=req.body.userid;
    var pwd=req.body.pwd;
    // if(user==pwd){
    //     //res.send("Welcome "+userid);
    //     var menu=[{name:'home',url:"./home.html"},{name:'aboutus',url:"./aboutus.html"}];
    //     res.render('welcome',{"username":user,"menu":menu}); 
    //    // res.render('welcome',{"username":userid});       // welcome is the file name & username is the key name
    //                                                      // used in welcome file while showing dynamic data 
    // }
    // else{
    //     res.send("Invalid username or password");
    // }
console.log("userid : "+userid);
    const Useroperations=require("../db/useroperations");
    const User=require("../model/user");
    var userObject=new User(userid,pwd);
    Useroperations.login(userObject,res);
})
module.exports=router;
