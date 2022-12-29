const upload = require("../middlewares/upload");
const express = require("express");
const router = express.Router();

router.post("/upload", upload.single("file"), async (req, res) => {
  if (req.file === undefined) return res.send("you must send a file");
  const imgUrl = `http://localhost:6000/file/${req.file.filename}`;
  return res.send(imgUrl);
});

module.exports = router;
