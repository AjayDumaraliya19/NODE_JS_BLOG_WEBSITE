const { userService } = require("../services");
const moment = require("moment");
const jwt = require("jsonwebtoken");
const config = require("../config/config");
const bcrypt = require("bcryptjs");

/** Register/Create User controller */
const createUser = async (req, res) => {
  try {
    const reqBody = req.body;

    let option = {
      firstname: reqBody.firstname,
      lastname: reqBody.lastname,
      email: reqBody.email,
      role: reqBody.role,
      exp: moment().add(1, "days").unix(),
    };

    const hashPassword = await bcrypt.hash(reqBody.password, 8);

    const token = await jwt.sign(option, config.jwt.secret_key);

    const filter = {
      firstname: reqBody.firstname,
      lastname: reqBody.lastname,
      email: reqBody.email,
      role: reqBody.role,
      password: hashPassword,
      token: token,
    };

    const userExist = await userService.createUser(filter);

    if (!userExist) {
      throw new Error("Something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: "User created successfully!",
      data: userExist,
    });
  } catch (error) {
    res.status(error?.status || 400).json({
      success: false,
      message: error?.message || "Somthing went wrong!",
      stack: error.stack,
    });
  }
};

/** Get User list controller */
const getUserList = async (req, res) => {
  try {
    const getList = await userService.getUserList();
    res.status(200).json({
      success: true,
      message: "Get user successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(error?.status || 400).json({
      success: false,
      message: error?.message || "Somthing went wrong!",
    });
  }
};

/** Get User by Id controller */
const getUserById = async (req, res) => {
  try {
    const userId = req.params.userId;

    const userExist = await userService.getUserById(userId);
    if (!userExist) {
      throw new Error("User not found!");
    }

    res.status(200).json({
      success: true,
      message: "User details get successfully!",
      data: userExist,
    });
  } catch (error) {
    res.status(error?.status || 400).json({
      success: false,
      message: error?.message || "Somthing Went wrong!",
    });
  }
};

/** User update by Id controller */
const updateUser = async (req, res) => {
  try {
    const userId = req.params.userId;

    const userExist = await userService.getUserById(userId);
    if (!userExist) {
      throw new Error("User not found!");
    }

    userService.updateUser(userId, req.body);

    res.status(200).json({
      success: true,
      message: "User details update successfully!",
      data: userExist,
    });
  } catch (error) {
    res.status(error?.status || 400).json({
      success: false,
      message: error?.message || "Somthing went wrong!",
    });
  }
};

/** Delete User controller */
const deleteUser = async (req, res) => {
  try {
    const userId = req.params.userId;

    const userExist = await userService.getUserById(userId);
    if (!userExist) {
      throw new Error("User not found!");
    }

    userService.deleteUser(userId, req.body);

    res.status(200).json({
      success: true,
      message: "User details delete successfully!",
    });
  } catch (error) {
    res.status(error?.status || 400).json({
      success: false,
      message: error?.message || "Somthing went wrong!",
    });
  }
};

module.exports = {
  createUser,
  getUserList,
  getUserById,
  updateUser,
  deleteUser,
};
