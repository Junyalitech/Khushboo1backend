const Users = require("../models/index");

const getAllUsers= async(req,res)=>{
  try{
   const users=await Users.find();
   console.log(users);
   if(!users || users.length===0 ){
         return res.status(404).json({message:"No users found"});
   }
   return res.status(200).json(users)
  }
  catch(error){
        next(error);
  }
};

module.exports=getAllUsers;