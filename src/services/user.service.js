const { User } = require("../models");

/** Register/Create User service */
const createUser = async (reqBody) => {
  return await User.create(reqBody);
};

/** Get User list service */
const getUserList = async () => {
  return await User.find();
};

/** Get User by Email service */
const getUserByEmail = async (email) => {
  return await User.fintOne(email);
};

/** Get User by Id service */
const getUserById = async (userId) => {
  await User.findById(userId);
};

/** User update by Id service */
const updateUser = async (userId, token) => {
  return await User.findByIdAndUpdate(
    userId,
    { $set: { token } },
    { new: true }
  );
};

/** Delete User service */
const deleteUser = async (userId) => {
  return await User.findByIdAndDelete(userId);
};

/** Get all User service */
const getAllUser = async (role) => {
  return await User.find(role);
};

module.exports = {
  createUser,
  getUserList,
  getUserByEmail,
  getUserById,
  updateUser,
  deleteUser,
  getAllUser,
};
