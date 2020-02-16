const bookController = require("../../controller/bookController");
const express = require("express");
const router = express.Router();

// Book Routes

router.post("/create", bookController.create);
router.get("/book_lists", bookController.book_lists);
router.delete("/:id", bookController.book_delete);
router.get("/:id", bookController.get_book);

module.exports = router;
