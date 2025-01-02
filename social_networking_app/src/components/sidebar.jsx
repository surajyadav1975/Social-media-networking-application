import React, { useState } from 'react';
import { HomeIcon, UserGroupIcon, FolderIcon, ArrowRightStartOnRectangleIcon, Cog8ToothIcon } from '@heroicons/react/24/outline'; // Correct for v2
import { useContext } from 'react';
import MyContext from '../context/createContext';

const Sidebar = () => {
  const { handlelogout, getfollowers, followers } = useContext(MyContext);
  const [flag, setFlag] = useState(false);

  const handlefollowerclick = () => {
    getfollowers();
    setFlag(!flag);
  }

  return (
    <div className="flex flex-col gap-6 w-full h-full bg-gradient-to-b from-indigo-700 to-indigo-500 text-white p-6 rounded-lg shadow-lg m-2">
      <nav className="flex flex-col space-y-6">
        {/* My Profile */}
        <a href="/profile" className="flex items-center text-lg font-bold leading-8 text-gray-100 p-3 rounded-lg hover:bg-indigo-600 transition-colors duration-300">
          <HomeIcon className="w-6 h-6 mr-3" />
          My Profile
        </a>

        {/* Your Followers */}
        <a href="#" onClick={handlefollowerclick} className="flex items-center text-lg font-bold leading-8 text-gray-100 p-3 rounded-lg hover:bg-indigo-600 transition-colors duration-300">
          <UserGroupIcon className="w-6 h-6 mr-3" />
          Your Followers
        </a>

        {/* Follower List */}
        {flag && 
          <div className="bg-white text-gray-800 p-3 rounded-lg  text-center mt-2">
            <div className="font-bold text-xl mb-2 border-b border-gray-400">Followers</div>
            <div className="space-y-2">
              {followers.map((name, index) => (
                <div key={index} className="text-sm">{name}</div>
              ))}
            </div>
          </div>
        }

        {/* Your Posts */}
        <a href="/profile" className="flex items-center text-lg font-bold leading-8 text-gray-100 p-3 rounded-lg hover:bg-indigo-600 transition-colors duration-300">
          <FolderIcon className="w-6 h-6 mr-3" />
          Your Posts
        </a>

        {/* Logout */}
        <a href="/" onClick={handlelogout} className="flex items-center text-lg font-bold leading-8 text-gray-100 p-3 rounded-lg hover:bg-red-600 transition-colors duration-300">
          <ArrowRightStartOnRectangleIcon className="w-6 h-6 mr-3" />
          Logout
        </a>
      </nav>

      {/* Divider */}
      <hr className="my-4 border-gray-200" />

      {/* Settings */}
      <a href="#" className="flex items-center text-lg font-bold leading-8 text-gray-100 p-3 rounded-lg hover:bg-indigo-600 transition-colors duration-300">
        <Cog8ToothIcon className="w-6 h-6 mr-3" />
        Settings
      </a>
    </div>
  );
};

export default Sidebar;
