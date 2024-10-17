import React from "react";
import Post from "./post_list";
import Createpost from "./create_post";
import { useState, useEffect } from "react";
import Mypost from "./my_post";
import { useContext } from "react";
import MyContext from "../context/createContext";

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
        <p className="text-center font-bold tracking-tight text-gray-900 pb-2 mt-40">
          Loading posts...
        </p>
      ) : (
        <div>
          {flag && (
            <div className="absolute flex w-full min-h-screen justify-center pt-10 origin-top-right">
              <Createpost />
            </div>
          )}

          <div className="flex justify-evenly items-center pt-10">
            <div className="w-36 h-36 rounded-full overflow-hidden">
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
              <div className="mt-5">
                <button
                  onClick={handleCreatePostClick}
                  className="text-white bg-gray-500 px-4 py-2 rounded-lg hover:bg-gray-700"
                >
                  Create Post
                </button>
              </div>
            </div>
            </div>
          </div>

          <div className="mt-10 max-w-4xl mx-auto">
            <div className="flex justify-between border-b border-gray-600 pb-2">
              <span className="flex-1 text-center font-bold tracking-tight text-gray-900 pb-2 border-b-2 border-white">
                Your Posts
              </span>
            </div>
            {posts.length > 0 ? (
              <div className="posts-list grid grid-cols-3 mt-5 mx-3">
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
