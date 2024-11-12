import React from 'react'
import Header from './header'
import Sidebar from './sidebar';
import Post from './post_list';
import { useContext ,useEffect} from "react";
import { ArrowPathIcon} from '@heroicons/react/24/outline';
import MyContext from "../context/createContext";

function home_page() {

  const {loading, allposts, fetchallPosts,getallusers, allusers}=useContext(MyContext);


  useEffect(() => {
    fetchallPosts();
    getallusers();
  }, []);

  return (
    <div 
        className="h-screen w-screen bg-gray-100"
      >
        <div className="w-[calc(100vw-1rem)] top-0 left-0">
          <Header />
        </div>

        <div className="flex absolute w-full px-3 top-28 left-0">
          <div className="w-3/12 h-[calc(100vh-7rem)] sidebar">
            <Sidebar />
          </div>

          <div className="mx-auto rounded-lg">
            {loading ? (
              <p className="animate-spin  mt-60">
                <ArrowPathIcon className="w-6 h-6"/>
              </p>
            ) : allposts.length > 0 ? (
              <div className="postslist max-h-[80vh] overflow-y-auto rounded-lg [&::-webkit-scrollbar]:w-0"
              >
                {allposts.map((post) => (
                  <Post key={post._id} post={post}/>
                ))}
              </div>
            ) : (
              <p className="text-center font-bold text-3xl italic text-purple-400 animate-bounce tracking-tight pb-2 mt-40">
                No posts to display
              </p>
            )}
          </div>

          <div className="w-6/12 h-[calc(100vh-7rem)] sidebar overflow-auto [&::-webkit-scrollbar]:w-0">
          <div className="flex flex-col pl-4 pt-2 h-11/12 bg-white text-white rounded-lg">
            <span className=' text- font-bold leading-9 tracking-tight text-gray-500'> Who to follow </span>
            <div className=''>
              {(allusers.map((item)=>(<div key={item._id} >
                <div className='flex gap-4 w-full items-center p-2 rounded-lg myprofile text-gray-900 font-bold hover:text-white'>
                  <img src={item.picture} alt="image" className='h-10 w-10 rounded-full object-cover p-px object-top border-black border-2'/>
                  <span >{item.username}</span>
                </div>
              </div>)))}
            </div> 
            </div>
          </div>
        </div>
      </div>
  )
}

export default home_page