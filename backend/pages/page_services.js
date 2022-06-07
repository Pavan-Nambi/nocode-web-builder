const Pages = require("./page_modal");

const createPage = async (pageBody) => {
  const slug = pageBody.name.toLowerCase().split(" ").join("-");
  pageBody.slug = slug;
  const page = new Pages(pageBody);
  const pageResponse = await page.save();
  return pageResponse;
};
const listPages = async () => {
  const pages = await Pages.find({});
  return pages;
};
const deletePage = async (pageId) => {};
const updatePage = async (pageId) => {};
const pageDetails = async (pageId) => {};
const savePageContent = async (pageId, pageContent) => {};

module.exports = {
  createPage,
  listPages,
  deletePage,
  updatePage,
  pageDetails,
  savePageContent,
};
