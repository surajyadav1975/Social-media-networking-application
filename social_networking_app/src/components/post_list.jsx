import React, { useState } from 'react';
import { HandThumbUpIcon, HandThumbDownIcon, ShareIcon, ChatBubbleLeftIcon, UserPlusIcon } from '@heroicons/react/24/outline';
import { useContext } from 'react';
import MyContext from '../context/createContext';

const Post = ({post}) => {

  const [like,setlike]=useState(0);
  const [likeclick,setlikeclick]=useState(false);
  const {handleLike,handlefollow}=useContext(MyContext);
  const [clicked,setclicked]=useState(false);
  const handleclicklike=()=>{
    handleLike(post._id);
    if(!likeclick){
      setlike(like+1);
    }
    setlikeclick(true);
  }

  const handlefollowclick=()=>{
    handlefollow(post._id);
    setclicked(true);
  }

  return (
    <div className="max-w-96 mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-1xl my-5">
      <div className="h-78 w-full bg-gray-200">
        <img
          className="object-cover w-full h-full"
          src={`data:image/jpeg;base64,${ post.image}`}
          alt="Post Image"
        />
      </div>

      <div className="p">
        <div className="font-bold ml-2 text-1xl leading-normal tracking-tight text-gray-900 mb-1 mr-2">{post.content}</div>
      </div>

      <div className="px-4 py-2 bg-gray-100 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <button
            className={`flex items-center ${likeclick? "text-blue-500":"text-gray-600"} hover:text-blue-500`}
            onClick={handleclicklike}
          >
            <HandThumbUpIcon className="w-6 h-6 mr-1" />
            <span>{like+post.likes.length}</span>
          </button>

          <button className={`flex items-center hover:text-blue-500 ${clicked? "text-blue-500":"text-gray-600"}`}
          onClick={handlefollowclick}>
            <UserPlusIcon className="w-6 h-6 mr-1" />
            <span>Follow</span>
          </button>

        </div>
      </div>
    </div>
  );
};

export default Post;

