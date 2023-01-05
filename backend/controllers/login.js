const Register = require("../model/Schema/Register");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(203).json({
      message: "Please fill all the fields.",
    });
  }

  // Finding user
  const user = await Register.findOne({ email, password });

  if (!user) {
    return res.status(203).json({
      message: "Invalid Credentials",
    });
  }

  const token = jwt.sign(
    { _id: user._id, name: user.name },
    process.env.SECRET_KEY
  );

  res.status(200).json({
    message: "Logged in successfully",
    token,
    user,
  });
};

module.exports = login;
