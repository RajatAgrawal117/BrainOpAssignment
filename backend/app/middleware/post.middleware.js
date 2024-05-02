// // post.middleware.js

// const Post = require('../models/post.model');

// // Controller to fetch posts
// exports.getPosts = async (req, res) => {
//   try {
//     const posts = await Post.find().sort({ createdAt: -1 });
//     res.status(200).json({ posts });
//   } catch (error) {
//     console.error('Error fetching posts:', error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// };
