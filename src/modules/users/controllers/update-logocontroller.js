// controllers/logoController.js
const Logo = require("../models/logoShema");

exports.updateLogoById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = await Logo.findOne({ _id: id });
        return res.status(200).json(data);
    } catch (error) {
        next(error);
    }
};

//module.exports = exports;
