const mongoose = require("mongoose");
const schema = mongoose.Schema;

const bookSchema = new schema({
  users: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  book_name: {
    type: String,
    required: true
  },
  book_author: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Book", bookSchema);
