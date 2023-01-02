require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const secure = require("./middlewares/secure");
const fileUpload = require("express-fileupload");

// Database
require("./model/db");

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use(fileUpload());

// Sending Routes
app.use("/", require("./Routes/home"));
app.use("/file/", require("./Routes/secure/Upload/upload"));
app.use("/user/", require("./Routes/secure/dashboard"));

app.get("/secure", secure, (req, res) => {
  res.send("Secured Page");
});

const PORT = 5000 || process.env.PORT;
app.listen(PORT, () => console.log(`Server started at ${PORT}`));
