"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import partners from "../lib/partners";

export default function HomePartners() {
  return (
    <div className="bg-white py-10">
      <div className="w-full px-5">
        {/* Title */}
        <div className="flex justify-center items-center mb-5">
          <h1 className="text-3xl font-bold pb-2 border-b-4 border-b-primary text-black">Who Using Our Service?</h1>
        </div>

        {/* Carousel */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={2}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
          autoplay={{ delay: 7000, disableOnInteraction: false }}
          loop
          className="w-full"
        >
          {partners.partners.map((partner, index) => (
            <SwiperSlide key={index}>
              <div className="group relative flex items-center justify-center p-4 border border-gray-200 rounded-lg bg-primary shadow-lg cursor-pointer transition-all duration-300 hover:shadow-xl">
                {/* Logo */}
                <Image src={partner.logo} alt={partner.title} width={100} height={100} className="object-contain w-20 h-20 transition-transform duration-300 group-hover:scale-110" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
