//here document is a collection of json 
//mongo creates collection in which json is stored

const mongoose=require("./connection");
var Schema=mongoose.Schema;
var UserSchema=new Schema({userid:String,password:String});

//create schema
var usercollection=mongoose.model("users",UserSchema); //"users" or any name similar to this should be plural
module.exports=usercollection;
