import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import MyContext from '../context/createContext';

function header() {
    const navigate=useNavigate();
    const {handlelogout}=useContext(MyContext);
    
  return (
    <div>
    <nav className={`w-screen flex justify-between content-center py-2`} 
    style={{backgroundColor: 'orangered',backgroundImage: 'linear-gradient(270deg, #FF4500 0% ,#ff7f50 100%)'}}>
    <a href="/home" className="nav__logo hover:scale-125 duration-700">
        <img
            alt="Your Company"
            src={`/image/3.png`}
            className="mx-auto h-20 w-auto"
        />
    </a>

    <div className="relative inline-block text-left dropdown content-center mr-5 pr-2">
      <div>
        <button type="button" className="inline-flex w-full justify-center gap-x-4 rounded-full p-1 bg-black text-sm font-semibold text-gray-900 hover:shadow-lg hover:scale-125 duration-700" id="menu-button" aria-expanded="true" aria-haspopup="true">
        <div className='h-10 w-10 border-round overflow-hidden rounded-full'>
        <img
                alt="Your Company"
                src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=600"
                className="mx-auto h-16 w-auto"
            />
        </div>
        </button>
      </div>

      <div className="absolute dropdown-content text-center text-1xl font-bold leading-9 tracking-tight text-gray-900 right-0 z-10 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
          <a href="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:animate-pulse m-1 rounded-md bg-slate-100" role="menuitem" tabIndex="-1" id="menu-item-0">Profile</a>
          <a href="/home" className="block px-4 py-2 text-sm text-gray-700 hover:animate-pulse m-1 rounded-md bg-slate-100" role="menuitem" tabIndex="-1" id="menu-item-2">Home</a>
          <a onClick={handlelogout} className="block px-4 py-2 text-sm text-red-700 hover:animate-pulse m-1 rounded-md bg-slate-100" role="menuitem" tabIndex="-1" id="menu-item-1">Logout</a>
      </div>
    </div>
    </nav>
    </div>
  )
}

export default header;