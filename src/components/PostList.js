import React from 'react';

const PostList = () => {
  const posts = [
    { id: 1, title: 'First Post', excerpt: 'This is the first post.' },
    { id: 2, title: 'Second Post', excerpt: 'This is the second post.' },
  ];

  return (
    <div className="p-4">
      <div className="flex flex-wrap -mx-4">
        {posts.map(post => (
          <div key={post.id} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-6">
            <div className="bg-white p-6 border rounded-lg shadow">
              <h2 className="text-xl font-bold">{post.title}</h2>
              <p className="text-gray-600">{post.excerpt}</p>
              <a href={`/post/${post.id}`} className="text-blue-500 hover:underline">
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostList;
