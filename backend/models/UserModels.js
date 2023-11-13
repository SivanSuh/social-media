const mongoose = require("mongoose");
const UserModels = mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
  },
  profilePicture: {
    type: String,
    default:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTph7EdNgE6hdgmsNjVDshDowbkzZJGT8rj1CPQA9t6bVxXALie1s97ZqxzEJvOszULgg0&usqp=CAU",
  },
  followers: {
    type: [String],
    default: 0,
  },
  liked: {
    type: [String],
    default: 0,
  },
});

module.exports = mongoose.model("User", UserModels);
