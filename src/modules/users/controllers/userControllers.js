const Users = require("../models");


const createUser = async(req,res)=>{
    try{
        const body = req.body;

        const userData = {
            user_name:body.name,
            user_email:body.email,
            user_password:body.password,
            
        };
console.log("userData : ",userData);
const user = new Users(userData);
console.log("user : ",user);
await user.save();
console.log("123")
res.status(201).json({sttaus:1,user});

    }catch(e){
        console.log("Error : ",e);
        res.status(500).json({status:0,message:e});
    }
}

module.exports = {createUser};