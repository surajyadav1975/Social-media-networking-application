import React from 'react';
import { HomeIcon, UserGroupIcon, FolderIcon, CalendarDaysIcon, DocumentTextIcon, ChartPieIcon, Cog8ToothIcon } from '@heroicons/react/24/outline'; // Correct for v2

const sidebar = () => {
  return (
    <div className="flex flex-col w-56 h-screen bg-gray-400 text-white p-4">
      <nav className="flex flex-col space-y-4">
        <a href="#" className="flex items-center text-center text-1xl font-bold leading-9 tracking-tight text-gray-900 p-2 rounded-lg hover:bg-gray-700">
          <HomeIcon className="w-6 h-6 mr-3" />
          Dashboard
        </a>
        <a href="#" className="flex items-center text-center text-1xl font-bold leading-9 tracking-tight text-gray-900 p-2 rounded-lg hover:bg-gray-700">
          <UserGroupIcon className="w-6 h-6 mr-3" />
          Team
        </a>
        <a href="#" className="flex items-center text-center text-1xl font-bold leading-9 tracking-tight text-gray-900 p-2 rounded-lg hover:bg-gray-700">
          <FolderIcon className="w-6 h-6 mr-3" />
          Projects
        </a>
        <a href="#" className="flex items-center text-center text-1xl font-bold leading-9 tracking-tight text-gray-900 p-2 rounded-lg hover:bg-gray-700">
          <CalendarDaysIcon className="w-6 h-6 mr-3" />
          Calendar
        </a>
        <a href="#" className="flex items-center text-center text-1xl font-bold leading-9 tracking-tight text-gray-900 p-2 rounded-lg hover:bg-gray-700">
          <DocumentTextIcon className="w-6 h-6 mr-3" />
          Documents
        </a>
        <a href="#" className="flex items-center text-center text-1xl font-bold leading-9 tracking-tight text-gray-900 p-2 rounded-lg hover:bg-gray-700">
          <ChartPieIcon className="w-6 h-6 mr-3" />
          Reports
        </a>
      </nav>

      <hr className="my-4 border-gray-900" />

      

      <div className="flex-grow"></div>

      <a href="#" className="flex items-center text-center text-1xl font-bold leading-9 tracking-tight text-gray-900 p-2 rounded-lg hover:bg-gray-500">
        <Cog8ToothIcon className="w-6 h-6 mr-3" />
        Settings
      </a>
    </div>
  );
};

export default sidebar;
