import React from 'react'
import { useNavigate } from 'react-router-dom';

function header() {
    const navigate=useNavigate();
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
  return (
    <div>
    <header className="bg-white">
    
    <nav className="w-full flex justify-between px-5 py-3 bg-gray-700">
    <a href="#" className="nav__logo">
        <img
            alt="Your Company"
            src="https://cdn-icons-png.freepik.com/512/3437/3437291.png"
            className="mx-auto h-10 w-auto"
        />
    </a>

    <div className="relative inline-block text-left dropdown">
  <div>
    <button type="button" className="inline-flex w-full justify-center gap-x-4 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
    <div className='h-6 w-6 border-round overflow-hidden rounded-full'>
    <img
            alt="Your Company"
            src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=600"
            className="mx-auto h-10 w-auto"
        />
    </div>
    </button>
  </div>

 
  <div className="absolute dropdown-content text-center text-1xl font-bold leading-9 tracking-tight text-gray-900 right-0 z-10 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
    <div className="py-1" role="none">
      <a href="/profile" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="menu-item-0">Profile</a>
      <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="menu-item-2">Home</a>
      <a onClick={handlelogout} href='#' className="block px-4 py-2 text-sm text-red-700" role="menuitem" tabIndex="-1" id="menu-item-1">Logout</a>
    </div>
  </div>
</div>

            

            

    </nav>
    </header>
    </div>
  )
}

export default header