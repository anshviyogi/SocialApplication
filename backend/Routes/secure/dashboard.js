const express = require("express");
const deletePosts = require("../../controllers/deletePosts");
const router = express.Router();
const userPosts = require("../../controllers/userPosts");

router.post("/posts", userPosts);
router.delete("/posts/delete/:id", deletePosts);

module.exports = router;
