//entry point of server
//ctrl+c to down the server
//modules are referred to as middleware in express
//www.abcd.com    abcd.com (web context or web root)

//----------------------- REQUIRING MODULES ------------------------------------
//module added
const express=require("express");        
const bodyparser=require("body-parser");
const userRoute=require("./routes/userroutes");
const adminRoute=require("./routes/adminroutes");
console.log("Express", typeof(express)); //typeof(express) gives function

//app represents the web root , it is at top level and everything goes inside this
const app=express();                     //calling express function and it return a function call app
console.log("app is :",typeof(app));     //typeof(app) gives function


//---------------------- USING MIDDLEWARES ----------------------------------------------
//it will do everything ie createserver,reading and writing file , if-else to check url 
//here we have to just provide folder where all static files are kept
app.use(express.static("public"));
app.use(bodyparser.urlencoded({encoding:false}));
app.use(bodyparser.json());
//Custom middleware
app.use(function(req,res,next){
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept");
  next();  //compulsory so that control can use next middleware
})

app.use('/',userRoute);
app.use('/admin',adminRoute);

//---------------------- USING TEMPLATING ENGINES (EJS) -----------------------------------
app.set('views','./view');       //"views" is a key defined by express and we have to set the path for this key which is ./view //in this path fpr rendering of html pages is provded
app.set('view engine','ejs');    //"view engine" is a key defining our templating engine name i.e. ejs templating engine

app.use(function(req,res,next){
    res.send("OOPS U TYPE SOMETHING WRONG IN URL");
    next();
})

function cache(){
    //call db only during start of server
    //pulls whole data in the start
    //Store all the data in the array
  console.log("Cache call");
}

app.listen(1234,()=>{
    console.log("server start at 1234 ...");
    cache();
})