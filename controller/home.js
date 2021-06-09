var express=require("express")
var router=express.Router()
router.get('/page',function(req,res){
    var pagedata={"title":"Home page","pagename":"home"}
    res.render("layout",pagedata)
})
module.exports=router;