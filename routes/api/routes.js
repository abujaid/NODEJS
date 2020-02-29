const bookController = require("../../controller/bookController");
const userController = require("../../controller/userController");
const authController = require("../../controller/authController");
const auth = require("../../middleware/auth");
const express = require("express");
const router = express.Router();

// Auth route
router.post("/auth", authController.auth);

// Book Routes
router.post("/books/create", auth, bookController.create);
router.get("/books/book_lists", auth, bookController.book_lists);
router.delete("/books/:id", auth, bookController.book_delete);
router.get("/books/:id", auth, bookController.get_book);

// User Routes
router.post("/users/create", userController.create);
router.get("/users", userController.users);

module.exports = router;
