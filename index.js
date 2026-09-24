const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const router = require("./routes/userRoute");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

let isConnected = false;

app.use(async (req, res, next) => {
  try {
    if (!isConnected) {
      await mongoose.connect(process.env.MONGOURL);
      isConnected = true;
      console.log("Database Connected");
    }

    next();
  } catch (error) {
    console.log("Database Connection Error:", error);
    res.status(500).json({ error: "Database connection failed" });
  }
});

app.use("/users", router);

module.exports = app;