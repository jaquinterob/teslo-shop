"use client";

import React, { useState } from "react";
import { Swiper as SwiperObject } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "./slideshow.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import {
  FreeMode,
  Navigation,
  Thumbs,
  Autoplay,
  Pagination,
} from "swiper/modules";
import Image from "next/image";

interface Props {
  images: string[];
  title: string;
  className?: string;
}

const ProductMobileSlideShow = ({ images, title, className }: Props) => {
 

  return (
    <div className={className}>
      <Swiper
        style={{ width: "100vw", height: "500px" }}
        pagination={true}
        autoplay={{ delay: 2500 }}
        modules={[FreeMode, Navigation, Thumbs, Autoplay, Pagination]}
        className="mySwiper2"
      >
        {images.map((image) => (
          <SwiperSlide key={image}>
            <Image
              priority={true}
              width={300}
              height={500}
              alt={title}
              src={`/products/${image}`}
              className="object-fill"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductMobileSlideShow;
