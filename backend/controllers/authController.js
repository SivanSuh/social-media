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
module.exports = {
  register,
  login,
};
