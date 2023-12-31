const UserModels = require("../models/UserModels");

const register = async (req, res) => {
  const { email, password, userName, profilePicture } = req.body;
  try {
    const user = await UserModels.register(
      email,
      password,
      userName,
      profilePicture
    );
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ hata: error.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModels.login(email, password);
    res.status(200).send(user);
  } catch (error) {
    res.status(400).json({ hata: error.message });
  }
};

const otherUser = async (req, res) => {
  try {
    const allUser = await UserModels.find({}).populate({
      path: "posts",
      select: "--password",
    });
    res.send(allUser);
  } catch (error) {
    console.log(error);
  }
};

const getUser = async (req, res) => {
  const { id } = req.params;
  try {
    const selectUser = await UserModels.findById(id)
      .populate({
        path: "posts",
        select: "-password",
      })
      .exec();
    res.status(200).json(selectUser);
  } catch (error) {
    console.log(error);
  }
};

const followUser = async (req, res) => {
  const { userID } = req.body;
  const { followUserId } = req.params;
  try {
    const user = await UserModels.findById(followUserId);
    if (!user.followers.includes(userID)) {
      await user.updateOne({ $push: { followers: userID } });
      res.status(200).json({
        data: userID,
        message: "takip ediliyor",
      });
    } else {
      await user.updateOne({ $pull: { followers: userID } });
      res.status(200).json({
        data: userID,
        message: "takip etmiyorsun",
      });
    }
  } catch (error) {
    console.log(error);
  }
};
const followingUser = async (req, res) => {
  const { userID } = req.body;
  const { follow } = req.params;
  try {
    const user = await UserModels.findById(follow);
    if (!user.following.includes(userID)) {
      await user.updateOne({ $push: { following: userID } });
      res.status(200).json("takip ediyoraunuz");
    } else {
      await user.updateOne({ $pull: { following: userID } });
      res.status(200).json("takip etmiyorsun");
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  register,
  login,
  otherUser,
  getUser,
  followUser,
  followingUser,
};
