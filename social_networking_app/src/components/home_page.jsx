import React, { useEffect, useContext } from 'react';
import Header from './header';
import Sidebar from './sidebar';
import Post from './post_list';
import { ArrowPathIcon } from '@heroicons/react/24/outline';
import MyContext from "../context/createContext";

function HomePage() {
  const { loading, allposts, fetchallPosts, getallusers, allusers } = useContext(MyContext);

  useEffect(() => {
    fetchallPosts();
    getallusers();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <div className="sticky top-0 w-full bg-white shadow-lg z-10">
        <Header />
      </div>

      <div className="flex flex-col lg:flex-row w-full gap-6">
        
        {/* Sidebar */}
        <div className="sidebar lg:w-1/6 w-full bg-white rounded-xl shadow-lg h-full lg:h-[calc(100vh-6rem)] overflow-hidden">
          <Sidebar />
        </div>

        {/* Main Content (Posts) */}
        <div className="lg:w-2/4 w-full mx-auto p-3">
          {loading ? (
            <div className="flex justify-center items-center mt-40">
              <ArrowPathIcon className="w-12 h-12 text-gray-400 animate-spin" />
            </div>
          ) : allposts.length > 0 ? (
            <div className="space-y-6 max-h-[85vh] overflow-y-auto [&::-webkit-scrollbar]:w-0">
              {allposts.map((post) => (
                <div
                  key={post._id}
                  className="bg-white w-full rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
                >
                  <Post post={post} />
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col justify-center items-center h-[50vh]">
              <p className="text-center font-semibold text-2xl italic text-gray-500 mt-4">
                No posts to display
              </p>
              <img
                src="https://via.placeholder.com/150?text=No+Posts"
                alt="No posts"
                className="h-32 w-32 mt-6 opacity-50"
              />
            </div>
          )}
        </div>


        {/* Who to Follow Section */}
        <div className="lg:w-96 m-2 w-full bg-white rounded-xl shadow-lg h-full lg:h-[calc(100vh-7rem)] overflow-hidden leftbar">
          <div className="flex flex-col p-6 h-full">
            <h3 className="text-xl font-semibold text-gray-700 mb-6">Who to Follow</h3>
            <div className="space-y-2">
              {allusers.map((item) => (
                <div key={item._id} className="flex items-center gap-6 p-4 rounded-xl hover:bg-gray-100 cursor-pointer transition-colors ease-in-out duration-200">
                  <img src={item.picture} alt={item.username} className="h-12 w-12 rounded-full border-2 border-gray-300 object-cover" />
                  <span className="font-semibold text-gray-800">{item.username}</span>
                  <button className="ml-auto px-4 py-2 rounded-full bg-blue-500 text-white text-sm font-medium hover:bg-blue-600 transition-all duration-200">
                    Follow
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default HomePage;
