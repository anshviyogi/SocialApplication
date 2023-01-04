const jwt = require("jsonwebtoken");
const Register = require("../model/Schema/Register");

const followUser = async (req, res) => {
  const { token, followUserId } = req.body;

  const { _id } = jwt.verify(token, process.env.SECRET_KEY);

  // Following
  await Register.update({ _id: _id }, { $push: { following: followUserId } });

  // Giving the user followers
  await Register.update({ _id: followUserId }, { $push: { followers: _id } });

  res.json({
    message: "Followed Successfully",
  });
};

module.exports = followUser;
