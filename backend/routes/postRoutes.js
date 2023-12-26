const express = require("express");
const {
  createPost,
  getPost,
  getUserPost,
  getAllPost,
  likePost,
  deletePost,
} = require("../controllers/postController");
const router = express.Router();

router.post("/createPost/", createPost);
router.put("/likes/:postId", likePost);
router.get("/getPost/:id", getPost);
router.get("/getUserPosts/:id", getUserPost);
router.get("/getAllPost", getAllPost);
router.delete("/deletePost/:data", deletePost);
module.exports = router;
