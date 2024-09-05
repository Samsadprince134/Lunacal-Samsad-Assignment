import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import { useEffect } from "react";
export default function ImageSlider({images, onPrev, onNext }) {
 // const imageSrc = "/image.jpeg"; // Use the relative path to the image in the public folder
 // const images = [imageSrc, imageSrc, imageSrc, imageSrc, imageSrc]; // Use the image three times
  const sliderRef = useRef();
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
  };

  const nextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const prevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  // Pass the slide functions to the parent component
  useEffect(() => {
    onPrev(() => prevSlide);
    onNext(() => nextSlide);
  }, [onPrev, onNext]);
  return (
    <div className="w-full max-w-lg mt-5    ">
      <Slider ref={sliderRef} {...settings} >
        {images.map((image, index) => (
          <div key={index} className="  box-border mt-3 ml-1 relative   transition-all duration-500  transform hover:scale-110  hover:-rotate-[4deg] ">
            <img
           
              src={image}
              alt={`Slide ${index}`}
              className="   p-2 rounded-3xl w-[160px] h-[150px]  filter grayscale 
                                  hover:grayscale-0 transition-all duration-500 "
            />
          </div>
        ))}
      </Slider>
      
    </div>
  );
}
