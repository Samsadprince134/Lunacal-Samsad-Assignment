import React from 'react';
import Gallery from './Gallery';
import HeroSection from './HeroSection';

export default function RightDiv() {
  return (
    <div className="w-full lg:w-[50%] mt-12 mb-12 mx-4 lg:mx-6 flex flex-col gap-y-5 items-center lg:items-start h-full justify-center  ">
      <HeroSection />
      <div className=" mx-auto  w-full lg:w-[512px] h-[4px] bg-gradient-to-b from-[#303439] to-[#161718] rounded-[2.46px] shadow-[0px_4px_4px_0px_#00000054]"></div>
      <Gallery />
      <div className="mx-auto w-full lg:w-[512px] h-[4px] bg-gradient-to-b from-[#303439] to-[#161718] rounded-[2.46px] shadow-[0px_4px_4px_0px_#00000054]"></div>
    </div>
  );
}
