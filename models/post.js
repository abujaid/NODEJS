const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  body: {
    type: String,
    required: true
  }
});

module.exports = Post = mongoose.model("post", PostSchema);
