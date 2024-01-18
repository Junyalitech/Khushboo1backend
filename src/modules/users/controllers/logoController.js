const User = require("../models/logoShema");

const register_user = async (req, res) => {
    try {
        // Check if a record already exists
        const existingData = await User.findOne({ /* your query criteria here */ });

        if (existingData) {
            // If data exists, update it
            if (!req.file) {
                return res.status(400).json({ status: 0, message: "Please upload image." });
            }

            existingData.image = req.file.filename; 
            await existingData.save();

            res.status(200).send({ success: true, data: existingData, message: "Data updated successfully." });
        } else {
            // If data doesn't exist, insert a new record
            if (!req.file) {
                return res.status(400).json({ status: 0, message: "Please upload image." });
            }

            const userData = new User({
                image: req.file.filename
            });

            await userData.save();

            res.status(201).send({ success: true, data: userData, message: "Data inserted successfully." });
        }
    } catch (error) {
        console.error("Error processing data:", error);
        res.status(500).send({ success: false, message: "Internal Server Error" });
    }
};

module.exports = { register_user };
