const { blogService } = require("../services");

/** Create Blog controller */
const createBlog = async (req, res) => {
  try {
    const reqBody = req.body;

    if (req.file) {
      reqBody.Image = req.file.filename;
    } else {
      throw new Error("Blog image is required!");
    }

    const blog = await blogService.createBlog(reqBody);
    if (!blog) {
      throw new Error("something wen twrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: "blogs Successfully Create",
      data: { blog },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get Blog list controller */
const getBlogList = async (req, res) => {
  try {
    const blog = await blogService.getBlogList();
    if (!blog) {
      throw new Error("something wen twrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: "Get blog details successfully!",
      data: { blog },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get Blog by Id controller */
const getBlogById = async (req, res) => {
  try {
    const blogId = req.params.blogId;

    const blogExist = await blogService.getBlogById(blogId);
    if (!blogExist) {
      throw new Error("Blog not found!");
    }

    res.status(200).json({
      success: true,
      message: "Blog details get successfully!",
      data: blogExist,
    });
  } catch (error) {
    res.status(error?.status || 400).json({
      success: false,
      message: error?.message || "Somthing Went wrong!",
    });
  }
};

/** Blog update by Id controller */
const updateBlog = async (req, res) => {
  try {
    const blogId = req.params.blogId;

    const blogExist = await blogService.getBlogById(blogId);
    if (!blogExist) {
      throw new Error("Blog not found!");
    }

    blogService.updateBlog(blogId, req.body);

    res.status(200).json({
      success: true,
      message: "Blog details update successfully!",
      data: blogExist,
    });
  } catch (error) {
    res.status(error?.status || 400).json({
      success: false,
      message: error?.message || "Somthing went wrong!",
    });
  }
};

/** Delete Blog controller */
const deleteBlog = async (req, res) => {
  try {
    const blogId = req.params.blogId;

    const blogExist = await blogService.getBlogById(blogId);
    if (!blogExist) {
      throw new Error("Blog not found!");
    }

    blogService.deleteBlog(blogId, req.body);

    res.status(200).json({
      success: true,
      message: "Blog details delete successfully!",
    });
  } catch (error) {
    res.status(error?.status || 400).json({
      success: false,
      message: error?.message || "Somthing went wrong!",
    });
  }
};

module.exports = {
  createBlog,
  getBlogList,
  getBlogById,
  updateBlog,
  deleteBlog,
};
