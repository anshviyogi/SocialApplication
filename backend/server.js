require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");

// Database
require("./model/db");

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(methodOverride("_method"));

// Sending Routes
app.use("/", require("./Routes/home"));
app.use("/file/", require("./Routes/secure/Upload/upload"));

const PORT = 8080 || process.env.PORT;
app.listen(PORT, () => console.log(`Server started at ${PORT}`));
