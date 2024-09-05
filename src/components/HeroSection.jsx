import React from "react";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";
import Navbar from "./Navbar";
import { IoSquareSharp } from "react-icons/io5";
export default function HeroSection() {
  return (
    <div className=" bg-[#363C43] w-full rounded-[18px] p-3 shadow-[5.67px_5.67px_3.78px_0px_#00000066]">
      <div className="flex gap-4">
        <HiOutlineQuestionMarkCircle className=" text-gray-500 text-2xl  " />
        <Navbar></Navbar>
      </div>
      <div className="flex items-center gap-x-6 ">
      <div className="grid grid-cols-2 gap-x-2   ">
      <div className="w-[9.3px] h-[9.3px] flex items-center justify-center text-[#4A4E54] rounded-[1.16px] ">
        <IoSquareSharp size={32} />
      </div>
      <div className="w-[9.3px] h-[9.3px] flex items-center justify-center text-[#4A4E54] rounded-[1.16px]">
        <IoSquareSharp size={32} />
      </div>
      <div className="w-[9.3px] h-[9.3px] flex items-center justify-center text-[#4A4E54] rounded-[1.16px]">
        <IoSquareSharp size={32} />
      </div>
      <div className="w-[9.3px] h-[9.3px] flex items-center justify-center text-[#4A4E54] rounded-[1.16px]">
        <IoSquareSharp size={32} />
      </div>
      <div className="w-[9.3px] h-[9.3px] flex items-center justify-center text-[#4A4E54] rounded-[1.16px]">
        <IoSquareSharp size={32} />
      </div>
      <div className="w-[9.3px] h-[9.3px]  flex items-center justify-center text-[#4A4E54] rounded-[1.16px]">
        <IoSquareSharp size={32} />
      </div>
    </div>
        <div className="mt-6 text-[#969696] font-jakarta   font-medium text-[16px] leading-[25.2px]   ">
          Hello! I’m Dave, your sales rep here from Salesforce. I’ve been
          working at this awesome company for 3 years now.
          <br></br>
          <br></br>I was born and raised in Albany, NY& have been living in
          Santa Carla for the past 10 years my wife Tiffany and my 4 year old
          twin daughters- Emma and Ella. Both of them are just starting school,
          so my calender is usually blocked between 9-10 AM. This is a...
        </div>
        <div>
          <div className="w-[8px] h-[64px] bg-gradient-to-b from-[#888989] to-[#4A4E54] rounded-[8px] ">

          </div>
        </div>
      </div>
    </div>
  );
}
