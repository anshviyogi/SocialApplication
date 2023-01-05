const Register = require("../model/Schema/Register");

const singleUser = async (req, res) => {
  const { id } = req.body;

  Register.findById(id, (err, result) => {
    if (err) return console.log(err);
    return res.status(200).json(result);
  });
};

module.exports = singleUser;
