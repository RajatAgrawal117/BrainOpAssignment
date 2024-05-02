// post.routes.js
const express = require('express');
const router = express.Router();
const post = require('../models/post.model');

// Define the route handler for GET /api/posts
router.get('/', async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  const offset = (page - 1) * limit;

  try {
    // Query the database to fetch posts with pagination and sorting
    const { count, rows: posts } = await post.findAndCountAll({
      offset,
      limit: parseInt(limit),
      order: [['createdAt', 'DESC']], // Assuming posts are ordered by creation date
    });

    // Send the posts data and total count as a response
    res.json({ posts, totalPosts: count });
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;