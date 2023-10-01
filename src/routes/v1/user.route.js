const express = require("express");
const { userController } = require("../../controllers");
const { userValidation } = require("../../validations");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** Create user route */
router.post(
  "/create_user",
  validate(userValidation.createUser),
  userController.createUser
);

/** Get user list route */
router.get(
  "/user_list",
  validate(userValidation.getUserList),
  userController.getUserList
);

/** Get user by Id route */
router.get(
  "/user_details/:userId",
  validate(userValidation.getUserById),
  userController.getUserById
);

/** Update user route */
router.put(
  "/update_user/:userId",
  validate(userValidation.updateUser),
  userController.updateUser
);

/** Delete user route */
router.delete(
  "/delete_user/:userId",
  validate(userValidation.getUserById),
  userController.deleteUser
);

module.exports = router;
