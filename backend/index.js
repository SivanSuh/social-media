const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
const cors = require("cors");
const errorHandling = require("./middleware/errorHandling");

app.use(cors());
const { PORT, MONGO_URL } = process.env;
app.use(express.json());
mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("MongoDB is  connected successfully");
  })
  .catch((err) => console.error(err));

app.use(errorHandling);
app.listen(PORT, () => console.log(`${PORT} ' da çalışıyor`));
