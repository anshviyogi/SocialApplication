const express = require("express");
const deletePosts = require("../../controllers/deletePosts");
const allUsers = require("../../controllers/allUsers");
const router = express.Router();
const userPosts = require("../../controllers/userPosts");
const followUser = require("../../controllers/followUser");
const singleUser = require("../../controllers/singleUser");
const searchedUser = require("../../controllers/searchedUser");

router.post("/posts", userPosts);

router.get("/users", allUsers);

router.post("/single/user", singleUser);

router.post("/searchUser", searchedUser);

// Updateing following array
router.put("/follow", followUser);

router.delete("/posts/delete/:id", deletePosts);

module.exports = router;
