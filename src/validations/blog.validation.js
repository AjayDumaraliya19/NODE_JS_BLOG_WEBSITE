const Joi = require("joi");

/** Create Blog validation */
const createBlog = {
  body: Joi.object().keys({
    Image: Joi.string().allow(""),
    Date: Joi.string().required().trim(),
    Tag: Joi.string().required().trim(),
    Title: Joi.string().required().trim(),
    Desc: Joi.string().required().trim(),
    Founder_Name: Joi.string().required().trim(),
    Position: Joi.string().required().trim(),
  }),
};

/** Get Blog list validation */
const getBlogList = {
  query: Joi.object().keys(),
};

/** Get Blog by Id validation */
const getBlogById = {
  param: Joi.object().keys(),
};

/** Blog details update by Id validation */
const updateBlog = {
  param: Joi.object().keys(),
  body: Joi.object().keys({
    Image: Joi.string().allow(""),
    Date: Joi.string().required().trim(),
    Tag: Joi.string().required().trim(),
    Title: Joi.string().required().trim(),
    Desc: Joi.string().required().trim(),
    Founder_Name: Joi.string().required().trim(),
    Position: Joi.string().required().trim(),
  }),
};

module.exports = {
  createBlog,
  getBlogList,
  getBlogById,
  updateBlog,
};
