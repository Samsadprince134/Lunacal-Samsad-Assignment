import React, { useState, useRef } from "react";
import { GoPlus } from "react-icons/go";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";
import { IoArrowBackSharp, IoArrowForward } from "react-icons/io5";
import { IoSquareSharp } from "react-icons/io5";
import ImageSlider from "./ImageSlider";
import {toast} from "react-hot-toast";

export default function Galleryhugyfhjghjgjg() {
  const [prevSlide, setPrevSlide] = useState(() => () => {});
  const [nextSlide, setNextSlide] = useState(() => () => {});
  const [images, setImages] = useState([
    "/image.jpeg", // Default image 1
    "/image.jpeg", // Default image 2
    "/image.jpeg", // Default image 3
    "/image.jpeg", // Default image 4
    "/image.jpeg"  // Default image 5
  ]);
  const fileInputRef = useRef(null);
 
  const handleImageUpload = (event) => {
    toast.success("Image Added Successfully")
    const files = Array.from(event.target.files);
    const newImages = files.map(file => URL.createObjectURL(file));
    setImages(prevImages => [...prevImages, ...newImages]);
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="bg-[#363C43] w-full rounded-[18px] p-3 shadow-[5.67px_5.67px_3.78px_0px_#00000066]">
      <div className="flex gap-4">
        <HiOutlineQuestionMarkCircle className="text-gray-500 text-2xl" />
        <div className="flex w-full justify-between items-center">
          <div className="text-base rounded-xl p-3 px-9 bg-[#111315] text-white">
            <div className="font-[poppins] font-medium leading-[30px">Gallery</div>
          </div>
          <div className="flex gap-x-4">
            <div
              className="font-jakarta leading-[6.29px] bg-[#6F787C] p-3 px-5 rounded-[2rem] text-white flex justify-center items-center  gap-x-1 shadow-[4px_4px_10px_rgba(0,0,0,0.8),_-2px_-2px_5px_rgba(255,255,255,0.3)] cursor-pointer"
              onClick={triggerFileInput}
            >
              <GoPlus />
              ADD IMAGE
            </div>
            <input
              ref={fileInputRef}
              type="file"
              multiple
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleImageUpload}
            />
            <div className="flex justify-center items-center gap-x-3 cursor-pointer">
              <IoArrowBackSharp
                onClick={prevSlide}
                className="shadow-[-5px_-3px_30px_-10px_#96BEE7] text-[40px] text-[#6F787C] p-2 rounded-full bg-gradient-to-b from-[#373E44] to-[#191B1F]"
              />
              <IoArrowForward
                onClick={nextSlide}
                className="shadow-[-5px_-3px_30px_-10px_#96BEE7] text-[40px] text-[#6F787C] p-2 rounded-full bg-gradient-to-b from-[#373E44] to-[#191B1F]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center  ">
        <div className="grid  grid-cols-2 grd       ">
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
          <div className="w-[9.3px] h-[9.3px] flex items-center justify-center text-[#4A4E54] rounded-[1.16px]">
            <IoSquareSharp size={32} />
          </div>
          <div className="w-[9.3px] h-[9.3px] flex items-center justify-center text-[#4A4E54] rounded-[1.16px]">
            <IoSquareSharp size={32} />
          </div>
        </div>
        <div className="flex justify-center w-full ml-5 " >
          <ImageSlider images={images} onPrev={setPrevSlide} onNext={setNextSlide} />
        </div>
      </div>
    </div>
  );
}
