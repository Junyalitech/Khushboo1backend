const Logo = require("../models/logoShema");
//import "./public/css/style.css"

const getAllLogo = async (req, res, next) => {
  try {
    const logos = [];
    const getLogos = await Logo.find();

    if (!getLogos || getLogos.length === 0) {
      return res.status(404).json({ message: "No logo found" });
    }

    getLogos.forEach((logo)=>{
      logos.push({
     // image:'/public/userImages/'+logo.image
     image:'/public/userImages/'+logo.image,
     css: '/public/css/style.css', // Include the CSS file path

      })
    });
    console.log("Logo : ",logos);
     res.status(200).json(logos);
  } catch (error) {
    next(error);
  }
};

//update logo k leye controller start


//update logo k leye controller end


module.exports = getAllLogo;
