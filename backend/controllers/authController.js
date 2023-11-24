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

module.exports = {
  register,
  login,
  otherUser,
  getUser,
};
