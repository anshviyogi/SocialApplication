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
  imageId: {
    type: String,
    required: true,
  },
  date: {
    type: "String",
    required: true,
  },
  likes: [],
});

const Posts = mongoose.model("Posts", postsSchema);

module.exports = Posts;
