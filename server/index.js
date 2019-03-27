const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const PORT = 3000;

mongoose
  .connect("mongodb://localhost:27017/rickadvisor", {
    useNewUrlParser: true
  })
  .then(() => console.log("MongoDB Connected"))
  .catch(console.error);

app.use(express.static(path.join(__dirname, "../client/dist")));

app.listen(PORT, () => console.log("Server running"));
