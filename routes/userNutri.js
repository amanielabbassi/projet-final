const express=require("express")
const router=express.Router()
const User=require("../models/User")
const isAuth=require("../middlewares/passport")
router.get("/profilnutri",isAuth(),async(req,res)=>{
    try {
       const result=await User.findOne({_id:req.user._id})
       res.send(result) 
    } catch (error) {
        res.status(500).json({errors:error})
    }
})
module.exports=router