const mongoose=require("mongoose");

 const user=mongoose.Schema({
     image:{
         type:String,
         reqired:true
        //  default:"default.png",
     },
});

 module.exports=mongoose.model("logo",user);
