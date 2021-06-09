var express=require("express");
var router=express.Router();
var allQueries=require("../model/allQueries");
router.post('/registration',function(req,res){
    allQueries.find("users",{email:req.body.email},function(err0,result){
        if(result.length==0){
            allQueries.insert("users",req.body,function(err,result2){
                if(err){
                    res.send(err)
                }
                if(result2){
                    var pagedata={"title":"Redirect","pagename":"redirect"}
                    res.render("layout",pagedata)
                }
            })
        }
        else{
            res.send("Entered email id already exists")
        }
    })
    })
router.post('/signin',function(req,res){
    allQueries.find("users",{email:req.body.email},function(err,result){
        if(err){
            res.send(err)
        }
        if(result.length>0){
            if(result[0].password==req.body.password){
                allQueries.find("details",{email:result[0].email},function(err2,result2){
                if(err2){
                    res.send("Error in displaying profile...please try again later!")
                }
                var pagedata={"title":"Profile","pagename":"details",user:result[0].unm,email:result[0].email,details:result2}
                res.render("layout",pagedata)
            })
            }
            else{
                res.send("Incorrect password")
            }
        }
        else{
            res.send("Email id does not exist")
        }
    })
})
router.post('/details',function(req,res){
    allQueries.insert("details",req.body,function(err,result){
        if(err){
            res.send(err)
        }
        if(result){
            res.send("Thankyou!")
        }
    })
})
module.exports=router;