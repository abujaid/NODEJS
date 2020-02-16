const bookController = require("../../controller/bookController");
const userController = require("../../controller/userController");
const express = require("express");
const router = express.Router();

// Book Routes

router.post("/books/create", bookController.create);
router.get("/books/book_lists", bookController.book_lists);
router.delete("/books/:id", bookController.book_delete);
router.get("/books/:id", bookController.get_book);

// User Routes
router.post("/users/create", userController.create);
router.get("/users", userController.users);

module.exports = router;
