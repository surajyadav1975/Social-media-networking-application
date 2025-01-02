import React from 'react';

function Mypost({ post }) {
  return (
    <>
      <div className="w-11/12 mx-auto bg-white text-center hover:shadow-2xl hover:scale-105 transition-transform duration-500 rounded-xl shadow-md overflow-hidden md:max-w-1xl my-5">
        <div className="h-72 w-full bg-gray-200">
          <img
            className="object-cover w-full h-full rounded-t-xl"
            src={`data:image/jpeg;base64,${post.image}`}
            alt="Post Image"
          />
        </div>

        <div className="p-6 flex flex-col justify-center items-center space-y-3">
          <h3 className="font-semibold text-lg text-gray-800">{post.title}</h3>
          <p className="text-sm text-gray-600 leading-relaxed tracking-wide">{post.content}</p>
          <div className="flex items-center space-x-2 mt-4 text-gray-500">
            <span className="text-xs">{new Date(post.createdAt).toLocaleDateString()}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Mypost;
