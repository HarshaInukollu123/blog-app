import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPost, editPost } from '../redux/postSlice';
import { useNavigate, useParams } from 'react-router-dom';

const CreateEditPost = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const existingPost = useSelector(state => state.posts.find(post => post.id === parseInt(id)));

  const [title, setTitle] = useState(existingPost ? existingPost.title : '');
  const [content, setContent] = useState(existingPost ? existingPost.content : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      dispatch(editPost({ id: parseInt(id), title, content }));
    } else {
      dispatch(addPost({ id: Date.now(), title, content }));
    }
    navigate('/'); // Redirect to Home after submission
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">{id ? 'Edit Post' : 'Create Post'}</h2>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg"
            rows="5"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
        >
          {id ? 'Update Post' : 'Create Post'}
        </button>
      </form>
    </div>
  );
};

export default CreateEditPost;
