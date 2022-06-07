const {
  createPage,
  listPages,
  updatePage,
  savePageContent,
  deletePage,
  pageDetails,
} = require("./page_services");

const create = async (req, res) => {
  const pageBody = req.body;
  const page = await createPage(pageBody);
  res.json(page);
};
const details = async (req, res) => {
  const { pageId } = req.params;
  const details = await pageDetails(pageId);
  res.json(details);
};

const list = async (req, res) => {
  const pages = await listPages();
  res.json(pages);
};

const deletePageRecord = async (req, res) => {
  const { pageId } = req.params;
  const data = await deletePage(pageId);
  res.json(data);
};

const update = async (req, res) => {
  const { pageId } = req.params;
  const pageBody = req.body;
  const page = await updatePage(pageId, pageBody);
  res.json(page);
};

const changeContent = async (req, res) => {
  const { pageId } = req.params;
  const pageBody = req.body;

  const pageContent = await savePageContent(pageId, pageBody);
  res.json(pageContent);
};

module.exports = {
  create,
  details,
  list,
  deletePageRecord,
  update,
  changeContent,
};
