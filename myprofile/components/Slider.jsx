import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { SliderData } from "./SliderData";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div id="gallery" className="max-w-[1240px] mx-auto">
      <h1 className="text-2xl font-bold text-center p-4">PROJECTS MADE BY ME</h1>
      <div className="relative flex justify-center p-4">
        <FaArrowCircleLeft
          onClick={prevSlide}
          className="absolute top-[50%] left-[30px] text-black/70 cursor-pointer select-none z-[2]"
          size={50}
        />
        {SliderData.map((slide, index) => {
          return (
            <div
              key={index}
              className={
                index === current
                  ? "opacity-[1] ease-in duration-1000"
                  : "opacity-0"
              }
            >
              {index === current && (
                <div>
                  <div className="flex justify-between items-center">
                    <h1 className="text-xl font-bold">{slide.title}</h1>
                    <Link href={slide.url} className="text-xl font-bold">
                      Go to website!!
                    </Link>
                  </div>
                  <Image
                    src={slide.image}
                    alt="travel image"
                    width="1440"
                    height="600"
                    objectFit="cover"
                  />
                </div>
              )}
            </div>
          );
        })}
        <FaArrowCircleRight
          onClick={nextSlide}
          className="absolute top-[50%] right-[30px] text-black/70 cursor-pointer select-none z-[2]"
          size={50}
        />
      </div>
    </div>
  );
};

export default Slider;
