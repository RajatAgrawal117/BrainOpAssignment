const db = require("../models");
const User = db.user;
const Post = db.post; // Assuming you have a Post model defined in your models

const checkDuplicateUsernameOrEmail = async (req, res, next) => {
  try {
    // Your existing code for checking duplicate username or email
  } catch (error) {
    return res.sztatus(500).send({
      message: error.message
    });
  }
};

const checkPostExisted = async (req, res, next) => {
  try {
    const post = await Post.findByPk(req.params.postId);
    if (!post) {
      return res.status(404).send({
        message: "Post not found"
      });
    }
    next();
  } catch (error) {
    return res.status(500).send({
      message: error.message
    });
  }
};

const verifySignUp = {
  checkDuplicateUsernameOrEmail,
  checkPostExisted // Add the new middleware for checking post existence
};

module.exports = verifySignUp;
