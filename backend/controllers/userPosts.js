const jwt = require("jsonwebtoken");
const Posts = require("../model/Schema/Posts");

const userPosts = async (req, res) => {
  console.log("Posts here");
  const token = req.body.token;
  const userInfo = jwt.verify(token, process.env.SECRET_KEY);
  const posts = await Posts.find({ userId: userInfo._id });

  return res.status(200).json(posts);
};

module.exports = userPosts;
