const mongoose = require("mongoose");
const schema = mongoose.Schema;

const bookSchema = new schema({
  book_name: {
    type: String,
    required: true
  },
  book_author: {
    type: String
  }
});
module.exports = Book = mongoose.model("book", bookSchema);
