const express = require('express');
const getAlltextandImage = require("../controllers/showalltextandiamgecontroller");

const router = express.Router();

router.route('/showalltextandImage').get(getAlltextandImage);

module.exports = router;
