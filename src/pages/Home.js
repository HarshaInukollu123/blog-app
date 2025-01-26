import React from 'react';
import { useSelector } from 'react-redux';
import PostList from '../components/PostList';

const Home = () => {
  const posts = useSelector((state) => state.posts); // Get posts from Redux store

  return (
    <div>
      <h2 className="text-3xl font-bold text-center my-6">Welcome to the Blog Platform</h2>
      <PostList posts={posts} /> {/* Pass posts to PostList */}
    </div>
  );
};

export default Home;
