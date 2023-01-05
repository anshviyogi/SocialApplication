const Register = require("../model/Schema/Register");

const followUser = async (req, res) => {
  const { id, followUserId } = req.body;

  // Following
  await Register.update({ _id: id }, { $push: { following: followUserId } });

  // Giving the user followers
  await Register.update({ _id: followUserId }, { $push: { followers: id } });

  res.json({
    message: "Followed Successfully",
  });
};

module.exports = followUser;
