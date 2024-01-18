const express = require("express");
const mongoose = require('mongoose');

require("./db/mongoose");
const path=require("path");
const cors = require("cors");


const app = express();
const runPORT = process.env.PORT ;
// console.log("__dirname : ",__dirname);
//static files
app.use('/public', express.static(path.join(__dirname, '../public')));

console.log("App listen at port 5000");
app.use(express.json());
app.use(cors());



// User Routes Start

const userRouter = require("./modules/users/routers/userRouer");

app.use(userRouter);
// User Routes End
const adminRouter=require("./modules/users/routers/admin-router");
 
app.use(adminRouter);
//admin route start

//admin route end
//logo routes
const user_routes=require("./modules/users/routers/logoRoute");
app.use('/api',user_routes);

//showlogo
const adminLogoRoute=require("./modules/users/routers/showlogo-router")
app.use(adminLogoRoute);

//update logo 
const logoRouter = require("./modules/users/routers/update-logorouter");
app.use("/api/logo", logoRouter);

//upload photo and image 
const user_data=require("./modules/users/routers/imageandtextRout");
app.use(user_data)

//show all photo and image 
const user_phtoimage=require("./modules/users/routers/showalltextandiamgerouter");
app.use(user_phtoimage);

app.listen(runPORT, () => {
     console.log(runPORT, "Run successfully..");
 });

//  app.get("/",(req,res)=>{
//         res.send("connection created");
//  });

// copy from geeksfor geeks start
//  app.post("/register", async (req, resp) => {
//      try {
//          const user = new User(req.body);
//          let result = await user.save();
//          result = result.toObject();
//          if (result) {
//              delete result.password;
//              resp.send(req.body);
//              console.log(result);
//          } else {
//              console.log("User already register");
//          }
  
//      } catch (e) {
//          resp.send("Something Went Wrong");
//      }
//  });
 // copy from geeksfor geeks end 