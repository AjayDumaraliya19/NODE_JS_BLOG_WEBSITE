const express = require("express");
const userRoute = require("./user.route");
const blogRoute = require("./blog.route");

const router = express.Router();

router.use("/user", userRoute);
router.use("/blog", blogRoute);

module.exports = router;
