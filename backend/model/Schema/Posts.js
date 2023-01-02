const mongoose = require("mongoose");

const postsSchema = mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  filename: {
    type: String,
    required: true,
  },
  contentType: {
    type: String,
    required: true,
  },
  caption: {
    type: String,
    required: true,
  },
});

const Posts = mongoose.model("Posts", postsSchema);

module.exports = Posts;
