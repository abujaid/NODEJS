const express = require("express");
const router = express.Router();
const Post = require("../../controller/postController");

router.post("/posts", Post);

module.exports = router;
