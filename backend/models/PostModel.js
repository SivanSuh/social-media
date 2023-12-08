const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const PostModel = new Schema(
  {
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    liked: {
      type: [String],
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    comment: {},
  },
  {
    timestamp: true,
  }
);

module.exports = mongoose.model("PostModel", PostModel);
