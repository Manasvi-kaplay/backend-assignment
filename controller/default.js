var express=require("express")
var router=express.Router();
router.use("/home",require("./home"));
router.use("/users",require("./users"));
module.exports=router;