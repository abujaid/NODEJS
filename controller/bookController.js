const Book = require("../models/book");

// Create Book
exports.create = async function(req, res) {
  const book = new Book(req.body);
  try {
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

// Delete Book
exports.book_delete = async () => {
  try {
  } catch (err) {
    res.status(500).send("Server Error");
  }
};
