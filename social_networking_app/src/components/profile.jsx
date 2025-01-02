import React, { useState, useEffect, useContext } from "react";
import Post from "./post_list";
import Createpost from "./create_post";
import Mypost from "./my_post";
import MyContext from "../context/createContext";
import { ArrowPathIcon } from "@heroicons/react/24/outline";

const ProfilePage = () => {
  const [flag, setFlag] = useState(false);

  const { posts, fetchPosts, loading, userdata } = useContext(MyContext);

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleCreatePostClick = () => {
    setFlag(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 font-sans">
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <ArrowPathIcon className="w-12 h-12 text-gray-500 animate-spin" />
        </div>
      ) : (
        <div className="container mx-auto px-2 py-10">
          {flag && (
            <div className="absolute flex w-[90vw] h-[80vh] justify-center origin-top-right z-50">
              <Createpost />
            </div>
          )}

          {/* Profile Header */}
          <div className="bg-white shadow-xl rounded-xl p-6 flex flex-col items-center space-y-6">
            <div className="relative">
              <div className="w-40 h-52 rounded-full overflow-hidden shadow-md border-4 border-gray-300 hover:scale-105 transition-transform duration-300">
                <img
                  src={userdata.picture}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-800">
                {userdata.username}
              </h2>
              <p className="text-gray-600 mt-2">
                {userdata.posts.length} Posts • {userdata.followers.length} Followers
              </p>
            </div>
            <button
              onClick={handleCreatePostClick}
              className="px-6 py-2 font-bold text-white rounded-full shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300 bg-gradient-to-r from-indigo-600 to-blue-500"
            >
              Create Post
            </button>
          </div>

          {/* Your Posts Section */}
          <div className="mt-10">
            <div className="text-center text-2xl font-bold text-gray-800 border-b-2 border-gray-300 pb-2">
              Your Posts
            </div>
            {posts.length > 0 ? (
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post) => (
                  <div
                    key={post._id}
                    className=""
                  >
                    <Mypost post={post} />
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-500 italic mt-20">
                No posts to display
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
