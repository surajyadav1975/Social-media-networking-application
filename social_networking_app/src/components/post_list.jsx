import React, { useState } from 'react';
import { HandThumbUpIcon, ShareIcon, EllipsisVerticalIcon, UserPlusIcon } from '@heroicons/react/24/outline';
import { useContext } from 'react';
import MyContext from '../context/createContext';

const Post = ({ post }) => {
  const [like, setLike] = useState(post.likes.length);
  const [likeClicked, setLikeClicked] = useState(false);
  const { handleLike, handlefollow } = useContext(MyContext);
  const [followed, setFollowed] = useState(false);

  const handleLikeClick = () => {
    handleLike(post._id);
    if (!likeClicked) {
      setLike(like + 1);
    }
    setLikeClicked(true);
  };

  const handleFollowClick = () => {
    handlefollow(post._id);
    setFollowed(true);
  };

  return (
    <div className="w-full max-w-xl mx-auto bg-white rounded-xl border border-gray-200 shadow-lg overflow-hidden mb-6 transition-transform transform hover:scale-105 duration-300 hover:shadow-2xl">
      {/* Post Header */}
      <div className="px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <img
            src={post.userId.picture}
            alt="User"
            className="h-12 w-12 rounded-full object-cover border-2 border-gray-300"
          />
          <button className="font-semibold text-gray-900 hover:text-orange-500 transition-colors">
            {post.userId.username}
          </button>
        </div>
        <EllipsisVerticalIcon className="w-6 h-6 text-gray-500 cursor-pointer hover:text-gray-700 transition-all" />
      </div>

      {/* Post Image */}
      <div className="relative border-t border-b">
        <img
          className="object-contain w-full h-64  shadow-md"
          src={`data:image/jpeg;base64,${post.image}`}
          alt="Post Image"
        />
      </div>

      {/* Post Content */}
      <div className="p-4">
        <p className="font-semibold text-lg text-gray-800">{post.content}</p>
      </div>

      {/* Post Actions */}
      <div className="px-4 py-3 border-t border-gray-200 flex justify-between items-center text-gray-600">
        <div className="flex items-center space-x-4">
          {/* Like Button */}
          <button
            className={`flex items-center space-x-1 font-semibold ${likeClicked ? 'text-orange-500' : 'text-gray-600'} hover:text-orange-500 transition-colors`}
            onClick={handleLikeClick}
          >
            <HandThumbUpIcon className="w-6 h-6" />
            <span>{like}</span>
          </button>

          {/* Follow Button */}
          <button
            className={`flex items-center space-x-1 font-semibold ${followed ? 'text-orange-500' : 'text-gray-600'} hover:text-orange-500 transition-colors`}
            onClick={handleFollowClick}
          >
            <UserPlusIcon className="w-6 h-6" />
            <span>Follow</span>
          </button>
        </div>

        {/* Share Button */}
        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-1 font-semibold hover:text-orange-500 transition-colors">
            <ShareIcon className="w-6 h-6" />
            <span>Share</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
