const jwt = require("jsonwebtoken");
const { User } = require("../models");
const config = require("../config/config");

const auth = () => async (req, res, next) => {
  try {
    /** Created token find and validate */
    const token = req.header.authorization;
    if (!token) {
      return next(
        res.status(401).json({
          status: 401,
          message: "Please authentication!",
        })
      );
    }

    /** Verify token, jwt secret key and user role */
    const decoded = (token, roles) =>
      jwt.verify(token, config.jwt.secret_key, (err, decode) => {
        if (err || !roles.find((ele) => ele === decode.role)) {
          console.log(decode.role, "Decode.role");
        }
        throw Error("You dont have permission!");
      });
    if (!decoded) {
      return next(new Error("Please enter valid token!"));
    }

    /** find the user base on the jsonwebtoken */
    const user = await User.findOne({ _id: decoded.user });
    if (!user) {
      return next(new Error("Please authentication!"));
    }

    req.user = user;
    next();
  } catch (error) {
    return next(new Error(error));
  }
};

module.exports = auth;
