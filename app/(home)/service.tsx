"use client";

import Image from "next/image";
import Link from "next/link";
import service from "../lib/service";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";

export default function HomeService() {
  return (
    <div className="bg-primary py-10">
      <div className="w-full px-5">
        {/* Title */}
        <div className="flex justify-center items-center mb-8">
          <h1 className="text-3xl font-bold pb-2 border-b-4 border-b-black text-black">What We Do</h1>
        </div>

        {/* Grid untuk Tablet & Desktop */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
          {service.service.map((item, index) => (
            <div key={index} className="group relative bg-white rounded-md overflow-hidden shadow-lg  transition-all duration-300 hover:shadow-xl">
              {/* Image */}
              <div className="w-full h-48 overflow-hidden">
                <Image src={item.image} alt={item.title} width={300} height={200} className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105" />
              </div>

              {/* Content */}
              <div className="p-5 text-justify">
                <h3 className="text-xl font-bold text-black mb-2">{item.title}</h3>
                <p className="text-gray-700 mb-4 text-lg">{item.description}</p>
                <Link href={item.url} passHref>
                  <button className="px-3 py-2 bg-primary text-black font-semibold rounded-lg hover:bg-amber-500 transition-all duration-300">Learn More</button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel untuk Mobile */}
        <div className="block md:hidden relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            loop
            autoplay={{ delay: 10000 }}
            className="w-full"
          >
            {service.service.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="group relative bg-white rounded-md overflow-hidden shadow-lg  transition-all duration-300 hover:shadow-xl">
                  {/* Image */}
                  <div className="w-full h-48 overflow-hidden">
                    <Image src={item.image} alt={item.title} width={300} height={200} className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105" />
                  </div>

                  {/* Content */}
                  <div className="p-5 text-justify">
                    <h3 className="text-xl font-bold text-black mb-2">{item.title}</h3>
                    <p className="text-gray-700 mb-4 text-sm">{item.description}</p>
                    <Link href={item.url} passHref>
                      <button className="px-3 py-2 bg-primary text-black font-semibold rounded-lg hover:bg-primary transition-all duration-300">Learn More</button>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation */}
          <button className="swiper-button-prev absolute top-1/2 left-1 z-10 -translate-y-1/2 bg-primary rounded-lg p-2">
            <MdOutlineArrowBackIos className="w-6 h-6 text-white" />
          </button>

          <button className="swiper-button-next absolute top-1/2 right-1 z-10 -translate-y-1/2 bg-primary rounded-lg p-2">
            <MdOutlineArrowForwardIos className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}
