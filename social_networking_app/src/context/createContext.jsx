import {React ,createContext,useState} from 'react'
import { useNavigate } from 'react-router-dom';

const apiurl = import.meta.env.VITE_API_URL;

const MyContext=createContext();

export const Myprovider=({children})=>{
    const [posts, setPosts] = useState([]);
    const [userdata, setuserdata]=useState(null);
    const [allposts,setallposts] =useState([]);
    const [loading, setLoading] = useState(true);
    const [followers, setfollowers] = useState([]);
    const [allusers, setallusers] = useState([]);
    const handlelogout=async ()=>{
      let response=await fetch(`${apiurl}/users/logout`,{
          method : "GET",
          credentials: 'include'
        })

        if(response.ok){
          navigate('/');
        }
        else{
          alert('some error ocurred');
        }
  }

    const fetchPosts = async () => {
        try {
          const response = await fetch(`${apiurl}/posts/getfeed`,{
                credentials:'include',
              }
          );

          // console.log("hi");
          const {posts,user} = await response.json();
          setuserdata(user)
          setPosts(posts); 
          setLoading(false); 
        } catch (error) {
          alert(error.message);
          setLoading(false);
        }
      };

    const fetchallPosts = async () => {
        try {
          const response = await fetch(`${apiurl}/posts/getallpost`,{
                credentials:'include',
              }
          );
          const {posts}= await response.json();
          setallposts(posts); 
          setLoading(false); 
        } catch (error) {
          alert(error.message);
          setLoading(false);
        }
      };

        const handleLike = async (postId) => {
  
            try {
                const response = await fetch(`${apiurl}/posts/like/${postId}`, {
                    method: 'PATCH',
                    credentials: 'include',
                });
    
                if (response.ok) {
                    // const updatedPost = await response.json();
                } else {
                    const errorData = await response.json();
                    alert(errorData.message);
                }
            } catch (err) {
                console.error('Error liking post:', err);
            }
        };

        const handlefollow = async (postId) => {
  
          try {
              const response = await fetch(`${apiurl}/posts/follow/${postId}`, {
                  method: 'PATCH',
                  credentials: 'include',
              });
  
              if (response.ok) {
                  // const updatedPost = await response.json();
              } else {
                  const errorData = await response.json();
                  alert(errorData.message);
              }
          } catch (err) {
              console.error('Error following user:', err);
          }
      };

      const getfollowers=async()=>{
        try {
          const response = await fetch(`${apiurl}/users/getfollowers`, {
              credentials: 'include',
          });

          if (response.ok) {
              const data=await response.json();
              // console.log(data);
              setfollowers(data);
              // console.log(followers);
          } else {
              const errorData = await response.json();
              alert(errorData.message);
          }
      } catch (err) {
          console.error('Error following user:', err);
      }
      }

      const getallusers=async()=>{
        try {
          const response = await fetch(`${apiurl}/users/getallusers`, {
              credentials: 'include',
          });

          if (response.ok) {
              const data=await response.json();
              setallusers(data);
              // console.log(followers);
          } else {
              const errorData = await response.json();
              alert(errorData.message);
          }
      } catch (err) {
          console.error('Error following user:', err);
      }
      }

      return (
        <MyContext.Provider value={{ posts, loading, allposts, userdata, followers, allusers, getallusers, getfollowers, handlefollow, handlelogout, handleLike,fetchallPosts, fetchPosts}}>
            {children}
        </MyContext.Provider>
    );
    
}

export default MyContext;