const mongoose = require("mongoose");

const dbConnection = mongoose.connect(process.env.DB, (err, result) => {
  if (err) return console.log(err);
  console.log("Database Connected successfully");
});

module.exports = { dbConnection };
