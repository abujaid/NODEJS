const bookController = require("../../controller/bookController");
const express = require("express");
const router = express.Router();

// Book Routes
router.post("/create", bookController.create);
router.get("/book_lists", bookController.book_lists);

module.exports = router;
