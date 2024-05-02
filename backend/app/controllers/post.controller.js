exports.getPosts = async (req, res) => {
    const { page = 1, limit = 10 } = req.query;
    const offset = (page - 1) * limit;
  
    try {
      // Fetch posts from the database with pagination and sorting
      const { count, rows: posts } = await posts.findAndCountAll({
        offset,
        limit: parseInt(limit),
        order: [['createdAt', 'DESC']], // Assuming posts are ordered by creation date
      });
  
      // Return posts and total number of posts
      res.status(200).json({ posts, totalPosts: count });
    } catch (error) {
      console.error('Error fetching posts:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };