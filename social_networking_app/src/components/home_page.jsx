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
    <>
        <Header></Header>
        <div className='flex'>
            <Sidebar></Sidebar>
            <div className='mx-auto'>
              {loading ? (
                  <p className="text-center font-bold tracking-tight text-gray-900 pb-2 mt-40">
                    Loading posts...
                  </p>
                ) : allposts.length > 0 ? (
                  <div className="posts-list mt-5 mx-3">
                    {allposts.map((post) => (
                      <Post key={post._id} post={post}></Post>
                    ))}
                  </div>
                ) : (
                  <p className="text-center font-bold tracking-tight text-gray-900 pb-2 mt-40">
                    No posts to display
                  </p>
                )}
            </div>
        </div>
    </>
  )
}

export default home_page