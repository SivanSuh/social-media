const mongoose = require("mongoose");

const MessageModel = mongoose.Schema({
  sender: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  users: Array,
  seen: {
    type: Boolean,
    default: false,
  },
  message: {
    type: String,
    trim: true,
  },
  createDate: {
    type: String,
  },
});

module.exports = mongoose.model("Message", MessageModel);
