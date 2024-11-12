import React from "react";
import Post from "./post_list";
import Createpost from "./create_post";
import { useState, useEffect } from "react";
import Mypost from "./my_post";
import { useContext } from "react";
import MyContext from "../context/createContext";
import { ArrowPathIcon} from '@heroicons/react/24/outline';

const ProfilePage = () => {
  const [flag, setflag] = useState(false);

  const { posts, fetchPosts, loading, userdata} = useContext(MyContext);
  // console.log(userdata);

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleCreatePostClick = () => {
    setflag(true);
  };
  return (
    <>
      {loading ? (
          <p className="animate-spin place-content-center place-items-center w-full h-full">
              <ArrowPathIcon className="w-6 h-6"/>
          </p>
      ) : (
        <div>
          {flag && (
            <div className="absolute flex w-full justify-center origin-top-right ">
              <Createpost />
            </div>
          )}

          <div className="flex justify-evenly items-center pt-10">
            <div className="w-40 h-56 rounded-full overflow-hidden hover:scale-125 duration-700 border-2 border-black">
              <img
                src={userdata.picture}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex justify-center items-center flex-col">
            <div className="mt-5 text-center tracking-tight text-gray-900">
              <h2 className="text-2xl font-bold">{userdata.username}</h2>
              <p className="text-center font-bold tracking-tight text-gray-900">
                {userdata.posts.length} Posts  .  {userdata.followers.length} Followers
              </p>
            </div>
            <div className="flex gap-3">
              <div className="mt-10">
                <button
                  onClick={handleCreatePostClick}
                  className="text-black bg-white px-4 py-2 font-bold rounded-full hover:scale-125 transition duration-700 ease-in-out"
                  style={{backgroundColor: 'orangered',backgroundImage: 'linear-gradient(90deg, #FF4500 0% ,#ff7f50 100%)'}}
                >
                  Create Post
                </button>
              </div>
            </div>
            </div>
          </div>

          <div className="mt-10 mx-auto">
            <div className="flex justify-between pb-2">
              <span className="flex-1 text-center font-bold tracking-tight text-gray-900 pb-2 border-b-2 border-gray-900">
                Your Posts
              </span>
            </div>
            {posts.length > 0 ? (
              <div className="posts-list grid grid-cols-3 mt-5 mx-auto max-w-4xl ">
                {posts.map((post) => (
                  <Mypost key={post._id} post={post} />
                ))}
              </div>
            ) : (
              <p className="text-center font-bold tracking-tight text-gray-900 pb-2 mt-40">
                No posts to display
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ProfilePage;
