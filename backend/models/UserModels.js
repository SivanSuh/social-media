const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");
const Schema = mongoose.Schema;

const UserModels = new Schema(
  {
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
    },
    liked: {
      type: [String],
      default: 0,
    },
    posts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "PostModel",
      },
    ],
  },
  {
    timestamps: true,
  }
);

UserModels.statics.register = async function (
  email,
  password,
  userName,
  profilePicture
) {
  if (!email || !password || !userName) {
    throw Error(" Register Alanları boş geçilemez");
  }
  if (!validator.isEmail(email)) {
    throw Error("Email Kurallarına Uygun Değil");
  }
  if (!validator.isStrongPassword(password)) {
    throw Error("parola güçlü değil");
  }
  const user = await this.findOne({ email });
  if (user) {
    throw Error("Email Mevcut");
  }
  const salt = await bcrypt.genSalt(10);
  const pass = await bcrypt.hash(password, salt);
  const createUser = await this.create({
    email,
    password: pass,
    userName,
    profilePicture,
  });
  return createUser;
};

UserModels.statics.login = async function (email, password) {
  if (!email || !password) {
    throw Error("Alanları Boş Bırakmayınız");
  }
  const user = await this.findOne({ email });
  if (!user) {
    throw Error("Email Bulunamadı");
  }
  const pass = await bcrypt.compare(password, user.password);
  if (!pass) {
    throw Error("Paralolar Eşleşmiyor");
  }
  return user;
};
module.exports = mongoose.model("User", UserModels);
