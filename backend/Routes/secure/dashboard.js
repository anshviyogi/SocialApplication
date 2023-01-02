const express = require("express");
const router = express.Router();
const userPosts = require("../../controllers/userPosts");
const secure = require("../../middlewares/secure");

router.post("/posts", secure, userPosts);

module.exports = router;
