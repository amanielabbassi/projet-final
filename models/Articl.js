const mongoose=require("mongoose");
const articlSchema =new mongoose.Schema({
    title:{type:String ,required : true},
    description:{type:String , required: true},
    nameNutri:{type:String , required: true}
})

module.exports=Articl=mongoose.model("articl",articlSchema);