const router=require("express").Router();

const {register_user}=require("../controllers/imageandtextcontroller");
const upload = require("../image-file");

  router.post('/textimage',upload.single("photo"),register_user);

  module.exports=router;