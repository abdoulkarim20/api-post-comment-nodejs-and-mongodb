const { post } = require("../routes/postsController");
const components = require("./components");
const basicInfo = require("./info");
const pubications = require("./pubications");
const server = require("./server");
const { tags } = require("./tags");

module.exports={
    ...basicInfo,
    ...server,
    ...tags,
    ...components,
    ...pubications
}