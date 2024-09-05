import React, { useState } from 'react';
import { IoSquareSharp } from "react-icons/io5";

export default function Navbar() {
  const [activeTab, setActiveTab] = useState('about'); // Default active tab

  const handleClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Tabs Container */}
      <div className="p-2 relative flex bg-[#111315] text-gray-500 rounded-xl justify-between gap-2 md:gap-4 lg:gap-6">
        {/* Moving Background */}
        <div
          className={`absolute top-2 transition-all duration-500 ease-in-out rounded-2xl bg-[#1A1E22] ${
            activeTab === 'about'
              ? 'w-[31.8%] left-[0.40rem] shadow-[0px_0px_50px_-10px_#96BEE7]'
              : activeTab === 'experiences'
              ? 'w-[32.5%] left-[33.7%] shadow-[0px_0px_50px_-10px_#96BEE7]'
              : 'w-[32%] left-2/3 shadow-[0px_0px_50px_-10px_#96BEE7]'
          }`}
          style={{ height: '70%' }}
        />
        {/* Tab Buttons */}
        <div
          className={`font-medium font-[poppins] text-base rounded-xl pl-3 pr-3 flex-1 p-2 transition-all duration-300 cursor-pointer text-center ${
            activeTab === 'about'
              ? 'text-white z-10 shadow-[0px_54px_55px_rgba(0,0,0,0.25),0px_-12px_30px_rgba(0,0,0,0.12),0px_4px_6px_rgba(0,0,0,0.12),0px_12px_13px_rgba(0,0,0,0.17),0px_-3px_5px_rgba(0,0,0,0.09)]'
              : 'hover-1'
          }`}
          onClick={() => handleClick('about')}
        >
          About Me
        </div>
        <div
          className={`font-medium font-[poppins] text-base flex-1 p-2 pl-3 pr-3 rounded-xl transition-all duration-300 cursor-pointer text-center ${
            activeTab === 'experiences'
              ? 'text-white z-10 shadow-[0px_54px_55px_rgba(0,0,0,0.25),0px_-12px_30px_rgba(0,0,0,0.12),0px_4px_6px_rgba(0,0,0,0.12),0px_12px_13px_rgba(0,0,0,0.17),0px_-3px_5px_rgba(0,0,0,0.09)]'
              : 'hover-1'
          }`}
          onClick={() => handleClick('experiences')}
        >
          Experiences
        </div>
        <div
          className={`font-medium font-[poppins] text-base flex-1 p-2 pl-3 pr-3 rounded-xl transition-all duration-300 ease-in cursor-pointer text-center ${
            activeTab === 'recommended'
              ? 'text-white z-10 shadow-[0px_54px_55px_rgba(0,0,0,0.25),0px_-12px_30px_rgba(0,0,0,0.12),0px_4px_6px_rgba(0,0,0,0.12),0px_12px_13px_rgba(0,0,0,0.17),0px_-3px_5px_rgba(0,0,0,0.09)]'
              : 'hover-1'
          }`}
          onClick={() => handleClick('recommended')}
        >
          Recommended
        </div>
      </div>
    </div>
  );
}
