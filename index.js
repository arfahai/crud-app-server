const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const dns = require("dns");

dns.setServers(["8.8.8.8", "1.1.1.1"]);

const router = require("./routes/userRoute");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/users", router);

mongoose
  .connect(process.env.MONGOURL)
  .then(() => console.log("Database Connected"))
  .catch((error) => console.log("Database Connection Error:", error));

module.exports = app;