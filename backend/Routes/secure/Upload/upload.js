const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

// For saving video
const multer = require("multer");
const { GridFsStorage } = require("multer-gridfs-storage");
const Grid = require("gridfs-stream");

const path = require("path");
const crypto = require("crypto");

// Saving videos in database

// Mongo
const mongoURI =
  "mongodb+srv://ansh:anshviyogi@cluster0.gfpkgnf.mongodb.net/?retryWrites=true&w=majority";

// Mongo connection
const conn = mongoose.createConnection(mongoURI);

// Init gfs
let gfs, gridfsBucket;
conn.once("open", () => {
  gridfsBucket = new mongoose.mongo.GridFSBucket(conn.db, {
    bucketName: "uploads",
  });

  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection("uploads");
});

// Create storage object
const storage = new GridFsStorage({
  url: mongoURI,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }

        const filename = buf.toString("hex") + path.extname(file.originalname);
        // console.log(file)
        const fileInfo = {
          filename: filename,
          // Bucket name should be same as collection name
          bucketName: "uploads",
        };
        resolve(fileInfo);
      });
    });
  },
});

const upload = multer({ storage });

router.post("/upload", (req, res) => {
  // Image is saved
  console.log(req.file);
});

module.exports = router;
