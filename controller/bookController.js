const Book = require("../models/book");

// Create Book
exports.create = async function(req, res) {
  try {
    const book = await new Book({
      ...req.body,
      user: req.user.id
    });
    await book.save();
    res.status(201).send(book);
  } catch (err) {
    res.status(500).send("Server Error");
  }
};

// Display list of all books
exports.book_lists = async (req, res) => {
  try {
    const book_list = await Book.find();
    res.json(book_list);
  } catch (err) {
    res.status(500).send("Server Error");
  }
};

exports.book_delete = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    book.remove();
    res.json({
      msg: "book removed",
      book
    });
  } catch (err) {
    res.status(500).send("Server Error");
  }
};

// Get a Book
exports.get_book = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id).populate("user");
    if (book) {
      res.json(book);
    } else {
      res.json({ msg: "book id not found" });
    }
  } catch (err) {
    res.status(500).send("server error");
  }
};
