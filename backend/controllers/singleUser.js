const jwt = require("jsonwebtoken");
const Register = require("../model/Schema/Register");

const singleUser = async (req, res) => {
  const { _id } = jwt.verify(req.body.token, process.env.SECRET_KEY);
  Register.findById(_id, (err, result) => {
    if (err) return console.log(err);
    res.json(result);
  });
};

module.exports = singleUser;
