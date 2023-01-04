const Register = require("../model/Schema/Register");

const searchedUser = async (req, res) => {
  const { id } = req.body;
  await Register.findById(id, (err, result) => {
    if (err) return console.log(err);
    else console.log(result);
  });
};

module.exports = searchedUser;
