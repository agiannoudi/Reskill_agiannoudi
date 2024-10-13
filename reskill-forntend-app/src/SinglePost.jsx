import React from 'react';
import { useParams } from 'react-router-dom';

function SinglePost({ combinedData }) {
  const { id } = useParams();  // Get the post ID from the URL
  const post = combinedData.find(item => item.id === parseInt(id));

  if (!post) {
    return <div>Post not found</div>;  // Handle case where the post is not found
  }

  return (
    <div className="py-12 max-w-7xl mx-auto flex gap-12">
      {/* Left side (text content) */}
      <div className="w-1/2">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-lg text-gray-500 mb-8">description</p>
        <div className="text-lg text-gray-700">
          <p>{post.body}</p>
        </div>
      </div>

      {/* Right side (image) */}
      <div className="w-1/2 flex justify-end">
        {post.photoUrl && (
          <img
            src={post.photoUrl}
            alt={post.photoTitle || 'Post image'}
            className="rounded-lg object-cover max-w-full h-auto"
          />
        )}
      </div>
    </div>
  );
}

export default SinglePost;
