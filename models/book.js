const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  book_name: {
    type: String,
    required: true
  },
  book_description: {
    type: String,
    rerquired: true
  },
  book_author: {
    type: String
  },
  image: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Book", bookSchema);
