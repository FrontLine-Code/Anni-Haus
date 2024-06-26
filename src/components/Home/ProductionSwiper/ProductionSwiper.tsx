"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./production-swiper.scss";
import { Navigation, Mousewheel, Autoplay, FreeMode } from "swiper/modules";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ProductionImg } from "../../../../public";

export default function ProductionSwiper() {
  return (
    <div className="production__swiper">
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        pagination={{
          type: "fraction",
        }}
        navigation={{
          nextEl: ".production__button--next",
          prevEl: ".production__button--prev",
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        mousewheel={true}
        freeMode={true}
        modules={[Navigation, Mousewheel, Autoplay, FreeMode]}
      >
        <SwiperSlide>
          <Image src={ProductionImg} alt="production img" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={ProductionImg} alt="production img" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={ProductionImg} alt="production img" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={ProductionImg} alt="production img" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={ProductionImg} alt="production img" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={ProductionImg} alt="production img" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={ProductionImg} alt="production img" />
        </SwiperSlide>
      </Swiper>
      <button className="production__button production__button--next">
        <ChevronRight />
      </button>
      <button className="production__button production__button--prev">
        <ChevronLeft />
      </button>
    </div>
  );
}
