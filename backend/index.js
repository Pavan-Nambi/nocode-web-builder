require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");
const UIroute = require("./UI/uiRouter");
const pageRoute = require("./pages/Page_route");
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(cors());

// template engine
app.use("/resources", express.static(path.join(__dirname, "public")));
app.use("views", express.static(path.join(__dirname, "views")));

//mongodb
const mongoURI = "mongodb://localhost:27017/webpage_builder";
mongoose.connect(
  mongoURI,

  (err) => {
    if (err) throw err;
    console.log("connect t mongo");
  }
);

app.set("view engine", "hbs");
app.use("/", UIroute);
app.use("/pages", pageRoute);

app.get("/", (req, res) => {
  console.log("home");
  res.render("HomePage", { title: "webpage builder" });
});

app.listen(PORT, () => {
  console.log("server is up!");
});
