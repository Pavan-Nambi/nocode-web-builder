const express = require("express");
const {
  create,
  changeContent,
  update,

  details,
  list,
  deletePageRecord,
  loadContent,
} = require("./Page_Controller");
const pageRoute = express.Router();

pageRoute.post("/", create);
pageRoute.post("/:pageId/content", changeContent);

pageRoute.put("/:pageId", update);
pageRoute.delete("/:pageId", deletePageRecord);

pageRoute.get("/", list);
pageRoute.get("/:pageId", details);
pageRoute.get("/:pageId/content", loadContent);

module.exports = pageRoute;
