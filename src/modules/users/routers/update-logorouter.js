// routes/logoRouter.js
const express = require("express");
const logoController = require("../controllers/update-logocontroller");
const router = express.Router();

router.put("/update", logoController.updateLogoById);

module.exports = router;
