const Logo = require("../models/imageandtext");

const getAlltextandImage = async (req, res, next) => {
  try {
    const logos = [];
    const getLogos = await Logo.find();

    if (!getLogos || getLogos.length === 0) {
      return res.status(404).json({ message: "No logo found" });
    }

    getLogos.forEach((logo) => {
      logos.push({
        photo: '/public/userImages/' + logo.photo,
        text: logo.text, // Add text data
        css: '/public/css/style.css',
      });
    });

    res.status(200).json(logos);
  } catch (error) {
    next(error);
  }
};

module.exports = getAlltextandImage;
