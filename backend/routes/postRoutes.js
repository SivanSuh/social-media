const express = require("express");
const { createPost, getPost } = require("../controllers/postController");
const router = express.Router();

router.post("/createPost/:id", createPost);
router.get("/getPost/:id", getPost);

module.exports = router;
