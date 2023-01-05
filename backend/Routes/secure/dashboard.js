const express = require("express");
const deletePosts = require("../../controllers/deletePosts");
const allUsers = require("../../controllers/allUsers");
const router = express.Router();
const userPosts = require("../../controllers/userPosts");
const followUser = require("../../controllers/followUser");
const singleUser = require("../../controllers/singleUser");

// Link: http://localhost:5000/user/{route}

// Finding post of the logged in person using jsonwebtoken
router.post("/posts", userPosts);

// Showing limited users to show in the search page
router.get("/users", allUsers);

// Showing the details of logged in user with the help of its jwt
router.post("/single/user", singleUser);

// Updating following and followers array
router.put("/follow", followUser);

// Delete posts
router.delete("/posts/delete/:id", deletePosts);

module.exports = router;
