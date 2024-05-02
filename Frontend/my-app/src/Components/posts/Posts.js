import React, { useState, useEffect } from "react";
import axios from "axios";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`http://localhost:8080/api/posts`);
        const newPosts = response.data.posts;
        setPosts((prevPosts) => [...prevPosts, ...newPosts]);
        setHasMore(newPosts.length > 0);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
      setLoading(false);
    };

    if (hasMore) {
      loadPosts();
    }
  }, [page]); // Load posts when page changes

  const handleScroll = (e) => {
    const { scrollTop, clientHeight, scrollHeight } = e.target.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 5 && !loading) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Posts</h1>
      <div onScroll={handleScroll} style={{ maxHeight: "80vh", overflowY: "scroll" }}>
        {posts.map((post) => (
          <div key={post.id} className="border p-4 mb-4">
            <h2 className="text-xl font-bold mb-2">{post.title}</h2>
            <p className="text-gray-600">{post.body}</p>
          </div>
        ))}
        {loading && <p>Loading...</p>}
        {!loading && !hasMore && <p>No more posts</p>}
      </div>
    </div>
  );
};

export default Posts;
