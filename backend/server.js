require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const upload = require("./Routes/upload");
const grid = require("gridfs-stream");
const { mongoose } = require("mongoose");

// Database
require("./model/db");

app.use(express.json());
app.use(cors());

let gfs, gridfsBucket; // declare one more variable with name gridfsBucket
const conn = mongoose.connection;
conn.once("open", () => {
  // Add this line in the code
  gridfsBucket = new mongoose.mongo.GridFSBucket(conn.db, {
    bucketName: "photos",
  });
  gfs = grid(conn.db, mongoose.mongo);
  gfs.collection("photos");
});

const getImage = async (request, response) => {
  try {
    const file = await gfs.files.findOne({ filename: request.params.filename });
    const readStream = gridfsBucket.openDownloadStream(file._id);
    readStream.pipe(response);
  } catch (error) {
    console.log(error);
  }
};

// Sending Routes
app.use("/", require("./Routes/home"));
app.use("/file", upload);

app.get("/file/:filename", getImage);

const PORT = 8080 || process.env.PORT;
app.listen(PORT, () => console.log(`Server started at ${PORT}`));
