const { Blog } = require("../models");

/** Create Blog service */
const createBlog = async (reqBody) => {
  return await Blog.create(reqBody);
};

/** Get Blog list service */
const getBlogList = async () => {
  return await Blog.find();
};

/** Get Blog By Id service */
const getBlogById = async (blogId) => {
  return await Blog.findById(blogId);
};

/** Update Blog service */
const updateBlog = async (blogId, updateBody) => {
  return await Blog.findByIdAndUpdate(blogId, { $set: { updateBody } });
};

/** Delete Blog Service */
const deleteBlog = async (blogId) => {
  return await Blog.findByIdAndDelete(blogId);
};

module.exports = {
  createBlog,
  getBlogList,
  getBlogById,
  updateBlog,
  deleteBlog,
};
