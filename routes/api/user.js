const express = require("express");
const user = require("../../controller/userController");
const router = express.Router();

router.post("/users", user);

module.exports = router;
