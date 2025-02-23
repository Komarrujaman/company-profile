"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";
import carousel from "@/app/lib/carousel";
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";

export default function Carousel() {
  return (
    <div className="relative">
      <Swiper modules={[Navigation, Pagination, Autoplay]} spaceBetween={30} slidesPerView={1} pagination={{ clickable: true }} autoplay={{ delay: 10000 }} loop className="w-full h-[610px]">
        {carousel.carousel.map((item, index) => (
          <SwiperSlide key={index} className="relative group">
            {/* Background Image */}
            <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${item.image})` }}>
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white px-6">
                <h2 className="text-3xl font-bold mb-4">{item.title}</h2>
                <p className="mb-6 max-w-lg">{item.description}</p>

                {/* Button Learn More */}
                <Link href={item.url} passHref>
                  <button className="px-4 py-2 md:px-6 md:py-3 bg-primary text-[#212121] rounded-lg font-semibold text-base md:text-lg hover:bg-amber-500 transition-all duration-300 w-full sm:w-auto">Learn More</button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <button className="hidden md:block swiper-button-prev absolute top-1/2 left-4 z-10 -translate-y-1/2 transition-all duration-300">
        <MdOutlineArrowBackIos className="w-8 h-8 text-primary" />
      </button>

      <button className="hidden md:block swiper-button-next absolute top-1/2 right-4 z-10 -translate-y-1/2 transition-all duration-300">
        <MdOutlineArrowForwardIos className="w-8 h-8 text-primary" />
      </button>
    </div>
  );
}
