const Joi = require("joi");

/** Create User Validation */
const createUser = {
  body: Joi.object().keys({
    firstname: Joi.string().trim().required(),
    lastname: Joi.string().trim().required(),
    email: Joi.string().trim().required(),
    password: Joi.string().required(),
    role: Joi.string().trim().valid("Admin", "User").default("User"),
    token: Joi.string().trim().required(),
  }),
};

/** Get User list validation */
const getUserList = {
  query: Joi.object().keys(),
};

/** Get User by Id validation */
const getUserById = {
  param: Joi.object().keys(),
};

/** User details update by Id validation */
const updateUser = {
  param: Joi.object().keys(),
  body: Joi.object().keys({
    firstname: Joi.string().trim().required(),
    lastname: Joi.string().trim().required(),
    email: Joi.string().trim().required(),
    password: Joi.string().required(),
    role: Joi.string().trim().valid("Admin", "User").default("User"),
    token: Joi.string().trim().required(),
  }),
};

module.exports = {
  createUser,
  getUserList,
  getUserById,
  updateUser,
};
