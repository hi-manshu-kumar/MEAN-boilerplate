const usercollection=require("./userschema");
const UserOperations={
    register(UserObject,response){
        usercollection.create(UserObject,function(err){         //insert query 
            if(err){                                            //here function is callback
             //  response.send("Cant Register, Some error occured ",err);
             response.json({message:'Cant Register, Some error occured'+err});
            }
            else{
              // response.send("Register successfully");
              response.json({message:'Register Successfully'});
            }
        });
    },

    login(UserObject,response){                             //functions are asynchronous
        usercollection.find({userid:UserObject.userid,password:UserObject.password},  //where query
                            function(err,docs){                          //callback function 
                                if(err){
									 response.json({message:'Error Occured During Login'});
                                   //response.send("Error occured during login ",err);
                                }   
                                else{
                                    if(docs && docs.length>0){
										 var object = {message:"Welcome "+UserObject.userid};
                                         response.json(object);
                                      // response.send("Welcome "+UserObject.userid);
                                    }
                                    else{
										var object = {message:"Invalid Userid or Password "};
                                         response.json(object);
                                      //response.send("Invalid username or password");
                                    }
                                }
                            });
    }
}
module.exports=UserOperations;