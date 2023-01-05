const express = require("express");
const login = require("../controllers/login");
const register = require("../controllers/register");
const router = express.Router();

// Link: http://localhost:5000/{route}

router.post("/register", register);
router.post("/login", login);

module.exports = router;
