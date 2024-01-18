const { createUser } = require("../controllers/userControllers");

const router = require("express").Router();


router.post("/create-user",createUser);


module.exports = router;