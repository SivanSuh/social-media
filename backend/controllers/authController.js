const UserModels = require("../models/UserModels");

const register = async (req, res) => {
  try {
    const { email, userName, password } = req.body;
    const existingUser = await UserModels.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User mevcut" });
    }
  } catch (err) {
    console.log(err);
  }
};
