const bookController = require("../../controller/bookController");
const userController = require("../../controller/userController");
const authController = require("../../controller/authController");
const auth = require("../../middleware/auth");
const express = require("express");
const router = express.Router();
const path = require("path");
const multer = require("multer");
const DIR = "uploads";

let storage = multer.diskStorage({
  destination: function(req, file, callback) {
    callback(null, DIR);
  },
  filename: function(req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  }
});

let upload = multer({ storage: storage });

// Auth route
router.post("/auth", authController.auth);

// Book Routes
router.post(
  "/books/create",
  auth,
  upload.single("image"),
  bookController.create
);
router.get("/books/book_lists", auth, bookController.book_lists);
router.delete("/books/:id", auth, bookController.book_delete);
router.get("/books/:id", auth, bookController.get_book);

// User Routes
router.post("/users/create", userController.create);
router.get("/users", userController.users);

module.exports = router;
