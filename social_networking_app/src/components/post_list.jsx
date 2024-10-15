import React, { useState } from 'react';
import { HandThumbUpIcon, HandThumbDownIcon, ShareIcon, ChatBubbleLeftIcon } from '@heroicons/react/24/outline';

const Post = () => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleDislike = () => {
    setDislikes(dislikes + 1);
  };

  return (
    <div className="max-w-96 mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-1xl my-5">
      <div className="h-78 w-full bg-gray-200">
        <img
          className="object-cover w-full h-full"
          src="https://instagram.fdel5-2.fna.fbcdn.net/v/t39.30808-6/450131599_18451872523004827_8988274535336515065_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyLmYzMDgwOC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fdel5-2.fna.fbcdn.net&_nc_cat=107&_nc_ohc=uAjiM01eg9wQ7kNvgEi-q8i&_nc_gid=e15ad7d5e8ef43cc8fa369bc834ad79b&edm=APoiHPcAAAAA&ccb=7-5&ig_cache_key=MzQwNjA4OTM2NjgyNDIyODA5Mw%3D%3D.3-ccb7-5&oh=00_AYBUQKnRDQdTRyYRmF9vLa4nlEBLw_U8DeYDoUhTFgXeYA&oe=6712E37F&_nc_sid=22de04" 
          alt="Post Image"
        />
      </div>

      <div className="p">
        <div className="font-bold ml-2 text-1xl leading-normal tracking-tight text-gray-900 mb-1 mr-2">A sucker for Shayari 📝
        Tuhade fav shayar kaun aa??</div>
      </div>

      <div className="px-4 py-2 bg-gray-100 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <button
            className="flex items-center text-gray-600 hover:text-gray-900"
            onClick={handleLike}
          >
            <HandThumbUpIcon className="w-6 h-6 mr-1" />
            <span>{likes}</span>
          </button>

          <button
            className="flex items-center text-gray-600 hover:text-gray-900"
            onClick={handleDislike}
          >
            <HandThumbDownIcon className="w-6 h-6 mr-1" />
            <span>{dislikes}</span>
          </button>

          <button className="flex items-center text-gray-600 hover:text-gray-900">
            <ChatBubbleLeftIcon className="w-6 h-6 mr-1" />
            <span>Comment</span>
          </button>

          <button className="flex items-center text-gray-600 hover:text-gray-900">
            <ShareIcon className="w-6 h-6 mr-1" />
            <span>Share</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;

