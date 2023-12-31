const express = require("express");
const router = express.Router();
const {
  register,
  login,
  otherUser,
  getUser,
  followUser,
  followingUser,
} = require("../controllers/authController");

router.post("/register", register);
router.post("/login", login);
router.get("/otherUser", otherUser);
router.get("/getUser/:id", getUser);
router.put("/followUser/:followUserId", followUser);
router.put("/follow/:follow", followingUser);
module.exports = router;
