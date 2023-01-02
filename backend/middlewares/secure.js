const jwt = require("jsonwebtoken");

const secure = (req, res, next) => {
  const headerToken = req.headers.authorization;
  console.log(headerToken);
  const token = headerToken.split(" ")[1];

  if (!token) {
    return res.status(203).json({
      message: "No Token Found",
    });
  }

  // Verifying
  const verify = jwt.verify(token, process.env.SECRET_KEY);

  if (!verify) {
    return res.status(203).json({
      message: "Please send a valid token id",
    });
  }

  next();
};

module.exports = secure;
