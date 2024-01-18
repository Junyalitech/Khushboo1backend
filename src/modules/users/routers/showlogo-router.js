const express=require('express');
const getAlllogo =require("../controllers/showlogo-controller")

const router=express.Router();

router.route('/showlogo').get(getAlllogo);

//upadte logo k leye router start 
//router.put('/:id', updateImage);

//upadte logo k leye router end

module.exports=router;