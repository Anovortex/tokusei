"use client";
import Image from "next/image";
import React, { useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

interface ImageCarouselProps {
  image: string[];
  productName: string[];
  price: string[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  image,
  productName,
  price,
}) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    pauseOnDotsHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div style={{ position: "relative" }} className="">
      <Slider {...settings}>
        {image.map((image, index) => (
          <div
            key={index}
            className="bg-stone-900 rounded-2xl h-[350px] md:h-[450px] md:w-auto "
          >
            <div className="flex flex-col items-center pt-10">
              <Image
                src={image}
                height={3240}
                width={3200}
                alt="carousel"
                className="rounded-2xl gap-5 h-52 w-52 md:h-[300px] md:w-[300px] md:hover:scale-125 transition-all"
              />
            </div>
            <h1 className="text-center pt-8 ">
              Product ID: {productName[index]}
            </h1>
            <h1 className="text-center  ">Price : {price[index]}</h1>
          </div>
        ))}{" "}
      </Slider>
    </div>
  );
};

export default ImageCarousel;
