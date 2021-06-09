var express=require("express");
var app=express();
var bodyParser=require("body-parser");
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({
    extended:false,
    limit:'50mb'
  }));
app.use(bodyParser.json({
    limit: '50mb'
  }));
app.use(require("./controller/default"));
app.listen(process.env.PORT || 2200,function(){
      console.log("server started at port 2200");
  });