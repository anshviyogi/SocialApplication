const Posts = require("../model/Schema/Posts");

const deletePosts = async (req, res) => {
  const { id } = req.params;
  Posts.findByIdAndDelete(id, (err, result) => {
    if (err) return console.log(err);
  });

  res.json({
    message: "Deleted success",
  });
};

module.exports = deletePosts;
