import {React ,createContext,useState} from 'react'
import { useNavigate } from 'react-router-dom';


const MyContext=createContext();

export const Myprovider=({children})=>{
    const [posts, setPosts] = useState([]);
    const [userdata, setuserdata]=useState(null);
    const [allposts,setallposts] =useState([]);
    const [loading, setLoading] = useState(true);
    const [followers, setfollowers] = useState([]);
    const handlelogout=async ()=>{
      let response=await fetch('http://localhost:3000/users/logout',{
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
          const response = await fetch('http://localhost:3000/posts/getfeed',{
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
          const response = await fetch('http://localhost:3000/posts/getallpost',{
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
                const response = await fetch(`http://localhost:3000/posts/like/${postId}`, {
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
              const response = await fetch(`http://localhost:3000/posts/follow/${postId}`, {
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
          const response = await fetch(`http://localhost:3000/users/getfollowers`, {
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

      return (
        <MyContext.Provider value={{ posts, loading, allposts, userdata, followers, getfollowers, handlefollow, handlelogout, handleLike,fetchallPosts, fetchPosts}}>
            {children}
        </MyContext.Provider>
    );
    
}

export default MyContext;