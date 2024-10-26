import React from 'react'
import Header from './header'
import Sidebar from './sidebar';
import Post from './post_list';
import { useContext ,useEffect} from "react";
import MyContext from "../context/createContext";

function home_page() {

  const {loading, allposts, fetchallPosts}=useContext(MyContext);


  useEffect(() => {
    fetchallPosts();
  }, []);

  return (
    <div 
        className="h-screen w-screen bg-cover bg-center"
        style={{
          backgroundImage: `url('/image/5.webp')`
        }}
      >
        <div className="w-[calc(100vw-1rem)] fixed top-0 left-0 z-10">
          <Header />
        </div>

        <div className="flex absolute w-full top-28 left-0 px-6">
          <div className="w-1/4 h-[calc(100vh-7rem)] p-2 rounded-lg sidebar">
            <Sidebar />
          </div>

          <div className="w-3/4 mx-auto mt-3 rounded-lg pl-2">
            {loading ? (
              <p className="text-center text-2xl italic font-bold text-black-600 animate-bounce tracking-tight pb-2 mt-60">
                Loading posts...
              </p>
            ) : allposts.length > 0 ? (
              <div className="postslist max-h-[80vh] overflow-y-auto bg-cover bg-center shadow-lg rounded-3xl [&::-webkit-scrollbar]:w-0"
              style={{backgroundColor: '#D9AFD9',backgroundImage: 'linear-gradient(180deg, #fbc2eb 0% ,#a6c1ee 100%)'}}
              // style={{backgroundImage: `url('/image/5.webp')`}}
              >
                {allposts.map((post) => (
                  <Post key={post._id} post={post} />
                ))}
              </div>
            ) : (
              <p className="text-center font-bold text-3xl italic text-purple-400 animate-bounce tracking-tight pb-2 mt-40">
                No posts to display
              </p>
            )}
          </div>
        </div>
      </div>
  )
}

export default home_page