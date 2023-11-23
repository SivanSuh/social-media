const express = require("express");
const {
  createPost,
  getPost,
  getUserPost,
  getAllPost,
} = require("../controllers/postController");
const router = express.Router();

router.post("/createPost/:id", createPost);
router.get("/getPost/:id", getPost);
router.get("/getUserPosts/:id", getUserPost);
router.get("/getAllPost", getAllPost);
module.exports = router;
