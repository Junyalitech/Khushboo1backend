const router=require("express").Router();
// const user_route=express().Ro;

//  const bodyParser=require("body-parser");

//  user_route.use(bodyParser.json());
//  user_route.use(bodyParser.urlencoded({extended:true}));

//   const multer=require("multer");
//   const path=require("path");

//   user_route.use(express.static('public'));

//   const storage=multer.diskStorage({
//     destination:function(req,file,cb){
//         return cb(null,path.join(__dirname,'../public/userImages'),function(error,success){
//           if(error) throw error
//         });
//     },
//     filename:function(req,file,cb){
//         const name=  Date.now()+'-'+file.originalname;
//       cb(null,name,function(error1,success1){
//             if(error1) throw error1
//       })
//     }
//   });

//   const upload=multer({storage:storage});

  const {register_user}=require("../controllers/logoController");
const upload = require("../image-file");

  router.post('/logo',upload.single("image"),register_user);

  module.exports=router;