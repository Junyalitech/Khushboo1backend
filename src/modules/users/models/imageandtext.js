const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("ImageText", userSchema);
