const Register = require("../model/Schema/Register");

const allUsers = async (req, res) => {
  const users = await Register.find().limit(10);

  res.status(200).json({
    users,
  });
};

module.exports = allUsers;
