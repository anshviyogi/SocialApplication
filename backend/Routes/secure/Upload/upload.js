const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

// For saving video
const multer = require("multer");
const { GridFsStorage } = require("multer-gridfs-storage");
const Grid = require("gridfs-stream");

const path = require("path");
const crypto = require("crypto");
const Posts = require("../../../model/Schema/Posts");
const secure = require("../../../middlewares/secure");

// Saving videos in database

// Mongo
const mongoURI =
  "mongodb+srv://ansh:ansh@cluster0.cyzrizt.mongodb.net/?retryWrites=true&w=majority";

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
  console.log(req.body);
  console.log(req.files);

  // const tokenData = jwt.verify(req.body.token, process.env.SECRET_KEY);
  // const contentType = req.file.contentType;

  // const data = {
  //   userId: tokenData._id,
  //   userName: tokenData.name,
  //   filename: req.file.filename,
  //   contentType: req.file.contentType,
  //   caption: req.body.caption,
  // };

  // if (
  //   contentType === "image/jpg" ||
  //   contentType === "image/png" ||
  //   contentType === "image/jpeg"
  // ) {
  //   const saveVideo = await new Posts(data);
  //   saveVideo.save();
  //   res.status(200).json({
  //     message: "Images added successfully",
  //   });
  //   console.log(`Data saved success`);
  // } else {
  //   console.log("Error occured");
  //   res.status(203).json({
  //     message: "Error occured !! Please provide a valid image",
  //   });
  // }
});

// Get image
// router.get("/image/:filename", (req, res) => {
//   gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
//     if (!file || file.length === 0) {
//       return res.status(404).json({
//         message: "No file Found",
//       });
//     }

//     // Check if image
//     if (
//       file.contentType === "image/jpg" ||
//       file.contentType === "image/png" ||
//       file.contentType === "image/jpeg" ||
//       file.contentType === "video/mp4"
//     ) {
//       const readStream = gridfsBucket.openDownloadStream(file._id);
//       readStream.pipe(res);
//     } else {
//       res.status(404).json({
//         err: "Not an image",
//       });
//     }
//   });
// });

module.exports = router;
