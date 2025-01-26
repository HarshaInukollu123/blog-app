import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removePost } from '../redux/postSlice';

const PostList = ({ posts }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Handle Edit Post
  const handleEdit = (id) => {
    navigate(`/edit/${id}`); // Redirect to the Edit Post page
  };

  // Handle Delete Post
  const handleDelete = (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this post?');
    if (confirmDelete) {
      dispatch(removePost(id)); // Dispatch Redux action to delete post
    }
  };

  return (
    <div className="p-4">
      <div className="flex flex-wrap -mx-4">
        {posts.length > 0 ? (
          posts.map((post) => (
            <div key={post.id} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-6">
              <div className="bg-white p-6 border rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                <h2 className="text-xl font-bold">{post.title}</h2>
                <p className="text-gray-600">{post.content.substring(0, 100)}...</p>
                <div className="mt-4 flex space-x-4">
                  {/* Edit Button */}
                  <button
                    onClick={() => handleEdit(post.id)}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  >
                    Edit
                  </button>
                  {/* Delete Button */}
                  <button
                    onClick={() => handleDelete(post.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 w-full">No posts available. Create a new post!</p>
        )}
      </div>
    </div>
  );
};

export default PostList;
