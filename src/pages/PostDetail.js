import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PostDetail = () => {
  const { id } = useParams();
  const post = useSelector(state => state.posts.find(post => post.id === parseInt(id)));

  if (!post) {
    return <p className="text-center text-red-500">Post not found.</p>;
  }

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold">{post.title}</h2>
      <p className="mt-4">{post.content}</p>
    </div>
  );
};

export default PostDetail;
