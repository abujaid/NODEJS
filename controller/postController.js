const Post = require("../models/post");

module.exports = post = async (req, res) => {
  const post = new Post(req.body);
  try {
    await post.save();
    res.status(201).send(post);
  } catch (e) {
    res.status(400).send(e);
  }
};

// module.exports = post;
