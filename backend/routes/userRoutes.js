const express = require("express");
const router = express.Router();
const {
  register,
  login,
  otherUser,
  getUser,
} = require("../controllers/authController");

router.post("/register", register);
router.post("/login", login);
router.get("/otherUser", otherUser);
router.get("/getUser/:id", getUser);

module.exports = router;
