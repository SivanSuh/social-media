const PostModel = require("../models/PostModel");
const UserModels = require("../models/UserModels");

const createPost = async (req, res) => {
  const { description, image, liked } = req.body;
  const { id } = req.params;
  try {
    const post = await PostModel.create({
      description,
      liked,
      user: id,
      image,
    }).then((item) =>
      PostModel.populate(item, { path: "user", select: "-password" })
    );

    res.status(200).json(post);
  } catch (error) {
    console.log(error);
  }
};

const getUserPost = async (req, res) => {
  const { id } = req.params;

  try {
    const users = await UserModels.findById(id);
    if (!users) {
      return res.status(400).json({ error: "User not found" });
    }
    const postAd = await PostModel.find({ user: users.id });
    res.status(200).json(postAd);
  } catch (error) {
    console.log(error);
  }
};

const getPost = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await PostModel.findById(id).populate({
      path: "user",
      select: "-password",
    });
    res.status(200).json(post);
  } catch (err) {
    console.log(err);
  }
};

const getAllPost = async (req, res) => {
  try {
    const post = await PostModel.find().populate({
      path: "user",
      select: "-password",
    });
    res.status(200).json(post);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  createPost,
  getPost,
  getUserPost,
  getAllPost,
};
