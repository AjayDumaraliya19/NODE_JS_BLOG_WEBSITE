const mongoose = require("mongoose");
const config = require("../config/config");

const blogSchema = new mongoose.Schema(
  {
    Image: {
      type: String,
    },
    Date: {
      type: String,
      trim: true,
    },
    Tag: {
      type: String,
      trim: true,
    },
    Title: {
      type: String,
      trim: true,
    },
    Desc: {
      type: String,
      trim: true,
    },
    Founder_Name: {
      type: String,
      trim: true,
    },
    Position: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
    toJSON: {
      transform: function (doc, data) {
        if (data?.Image) {
          data.Image = `${config.base_url}images/${data.Image}`;
        }
      },
    },
  }
);

const Blog = mongoose.model("blog", blogSchema);
module.exports = Blog;
