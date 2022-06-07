const express = require("express");

const UIroute = express.Router();

UIroute.get("/", (req, res) => {
  res.render("HomePage", { title: "webpage builder" });
});

// UIroute.all("*", (req, res) => {
//   res.render("404");
// });

module.exports = UIroute;
