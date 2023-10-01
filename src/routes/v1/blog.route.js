const express = require("express");
const { blogValidation } = require("../../validations");
const { blogController } = require("../../controllers");
const validate = require("../../middlewares/validate");
const { upload } = require("../../middlewares/upload");

const router = express.Router();

/** Creat Blog */
router.post(
  "/create_blog",
  upload.single("Image"),
  validate(blogValidation.createBlog),
  blogController.createBlog
);

/** Get Blog list */
router.get(
  "/list_blog",
  validate(blogValidation.getBlogList),
  blogController.getBlogList
);

/** Get Blog by Id */
router.get(
  "/blog_details/:blogId",
  validate(blogValidation.getBlogById),
  blogController.getBlogById
);

/** Update Blog */
router.put(
  "/update-blog/:blogId",
  validate(blogValidation.updateBlog),
  blogController.updateBlog
);

/** Delete blog */
router.delete(
  "/delete_blog/:blogId",
  validate(blogValidation.getBlogById),
  blogController.deleteBlog
);

module.exports = router;
