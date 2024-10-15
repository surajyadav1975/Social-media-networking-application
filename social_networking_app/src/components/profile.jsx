import React from 'react';
import Post from './post_list';
import Createpost from './create_post';
import { useState ,useEffect} from 'react';
import Mypost from './my_post';

const ProfilePage = () => {
    const [flag,setflag]=useState(false);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchPosts = async () => {
        try {
          const response = await fetch('http://localhost:3000/posts/getfeed',{
                credentials:'include',
              }
          );
          const data = await response.json();
        //   console.log(data);
          setPosts(data); 
          setLoading(false); 
        } catch (error) {
          alert(error.message);
          setLoading(false);
        }
      };
    
      useEffect(() => {
        fetchPosts();
      }, []);


    const handleCreatePostClick = () => {
        setflag(true);
    };
  return (

    <>
    {flag && <div className='absolute flex w-full min-h-screen justify-center pt-10 origin-top-right'>
            <Createpost></Createpost>
        </div>}
    <div className="bg-gray-100 text-white min-h-screen">
      <div className="flex justify-center items-center flex-col pt-10">
        <div className="w-36 h-36 rounded-full overflow-hidden">
          <img
            src="https://wallpapercave.com/wp/wp9381066.jpg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="mt-5 text-center tracking-tight text-gray-900">
          <h2 className="text-2xl font-bold">Sonam Bajwa</h2>
          <p className="">3307 posts · 14.1 M followers · 1604 following</p>
          <p className="mt-2 font-medium">@sonambajwa</p>
          <p className="mt-1">God Is the strength of my heart n my portion forever ❤️
          Actor 🦋</p>
        </div>
        <div className='flex gap-3'>
        <div className="mt-5">
          <button className="bg-gray-500 px-4 py-2 rounded-lg hover:bg-gray-700">Edit Profile</button>
        </div>
        <div className="mt-5">
          <button onClick={handleCreatePostClick} className="bg-gray-500 px-4 py-2 rounded-lg hover:bg-gray-700">Create Post</button>
        </div>
        </div>
      </div>


      <div className="mt-10 max-w-4xl mx-auto">
        <div className="flex justify-between border-b border-gray-600 pb-2">
          <span className="flex-1 text-center font-bold tracking-tight text-gray-900 pb-2 border-b-2 border-white">Your Posts</span>
        </div>
            {
            loading ? (<p className='text-center font-bold tracking-tight text-gray-900 pb-2 mt-40'>Loading posts...</p> ) : posts.length > 0 ? (<div className="posts-list grid grid-cols-3 mt-5 mx-3">
                {posts.map((post) => (
                    <Mypost key={post._id} post={post}></Mypost>
                ))}
            </div>) : (
                <p className='text-center font-bold tracking-tight text-gray-900 pb-2 mt-40'>No posts to display</p>
            )}
        </div>
        
    </div>
</>
  );
};

export default ProfilePage;
