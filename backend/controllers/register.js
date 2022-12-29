const Register = require("../model/Schema/Register");

const register = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(203).json({
      message: "Please fill all the fields.",
    });
  }

  const emailExists = await Register.findOne({ email });
  if (emailExists) {
    return res.status(203).json({
      message: "Email alrady exists",
    });
  }

  const registerData = new Register({ name, email, password });
  registerData.save();

  res.status(200).json({
    message: "User Registered Successfully",
  });
};

module.exports = register;
