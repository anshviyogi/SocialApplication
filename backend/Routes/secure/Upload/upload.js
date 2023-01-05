const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

// Link: http://localhost:5000/file/{route}

// For saving video
const multer = require("multer");
const { GridFsStorage } = require("multer-gridfs-storage");
const Grid = require("gridfs-stream");

const path = require("path");
const crypto = require("crypto");
const Posts = require("../../../model/Schema/Posts");

// Saving videos in database

// Mongo URI
const mongoURI =
  "mongodb+srv://ansh:ansh@cluster0.cyzrizt.mongodb.net/socialApp?retryWrites=true&w=majority";

// Create mongo connection
const conn = mongoose.createConnection(mongoURI);

// Init gfs
let gfs, gridfsBucket;

conn.once("open", () => {
  // Init stream
  gridfsBucket = new mongoose.mongo.GridFSBucket(conn.db, {
    bucketName: "uploads",
  });

  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection("uploads");
});

// Create storage engine
const storage = new GridFsStorage({
  url: mongoURI,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = buf.toString("hex") + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          bucketName: "uploads",
        };
        resolve(fileInfo);
      });
    });
  },
});

const upload = multer({ storage });

// Uploads file to DB
router.post("/upload", upload.single("file"), async (req, res) => {
  const tokenData = jwt.verify(req.body.token, process.env.SECRET_KEY);
  const contentType = req.file.contentType;

  const date = new Date();

  const data = {
    userId: tokenData._id,
    userName: tokenData.name,
    filename: req.file.filename,
    contentType: req.file.contentType,
    caption: req.body.caption,
    imageId: req.file.id.toString(),
    date: `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`,
  };

  if (
    contentType === "image/jpg" ||
    contentType === "image/png" ||
    contentType === "image/jpeg"
  ) {
    const saveVideo = await new Posts(data);
    saveVideo.save();
    return res.status(200).json({
      message: "Images added successfully",
    });
  } else {
    return res.status(203).json({
      message: "Error occured !! Please provide a valid image",
    });
  }
});

// Get image
router.get("/image/:filename", (req, res) => {
  gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
    // Check if file
    if (!file || file.length === 0) {
      return res.status(404).json({
        err: "No file exists",
      });
    }

    // Check if image
    if (file.contentType === "image/jpeg" || file.contentType === "image/png") {
      // Read output to browser
      const readstream = gridfsBucket.openDownloadStream(file._id);
      readstream.pipe(res);
    } else {
      res.status(404).json({
        err: "Not an image",
      });
    }
  });
});

module.exports = router;
