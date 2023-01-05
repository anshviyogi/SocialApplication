const Posts = require("../model/Schema/Posts");

const userPosts = async (req, res) => {
  const id = req.body.id;
  const posts = await Posts.find({ userId: id });

  return res.status(200).json(posts);
};

module.exports = userPosts;
