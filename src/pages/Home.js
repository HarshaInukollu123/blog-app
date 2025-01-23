import React from 'react';
import PostList from '../components/PostList';

const Home = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-center my-6">Welcome to the Blog Platform</h2>
      <PostList />
    </div>
  );
};

export default Home;
