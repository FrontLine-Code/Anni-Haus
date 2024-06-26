"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel, Autoplay } from "swiper/modules";
import Image from "next/image";
import { ChevronLeft, ChevronRight, BlogImg } from "../../../../public";
import "swiper/css";
import "swiper/css/pagination";
import "./blog-swiper.scss";
import Text from "@/components/Common/Text";

export default function BlogSwiper() {
  return (
    <div className="blog__swiper">
      <Swiper
        slidesPerView={4}
        spaceBetween={68}
        pagination={{
          type: "fraction",
        }}
        navigation={{
          nextEl: ".blog__button--next",
          prevEl: ".blog__button--prev",
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        mousewheel={true}
        freeMode={true}
        modules={[Navigation, Mousewheel, Autoplay]}
      >
        <SwiperSlide className="blog__slide">
          <Image src={BlogImg} alt="blog img" />
          <Text
            message="Название проекта или интерьера в две строки"
            size={16}
            weight={400}
            color="#3b3b3b"
          />
        </SwiperSlide>
        <SwiperSlide className="blog__slide">
          <Image src={BlogImg} alt="blog img" />
          <Text
            message="Название проекта или интерьера в две строки"
            size={16}
            weight={400}
            color="#3b3b3b"
          />
        </SwiperSlide>
        <SwiperSlide className="blog__slide">
          <Image src={BlogImg} alt="blog img" />
          <Text
            message="Название проекта или интерьера в две строки"
            size={16}
            weight={400}
            color="#3b3b3b"
          />
        </SwiperSlide>
        <SwiperSlide className="blog__slide">
          <Image src={BlogImg} alt="blog img" />
          <Text
            message="Название проекта или интерьера в две строки"
            size={16}
            weight={400}
            color="#3b3b3b"
          />
        </SwiperSlide>
        <SwiperSlide className="blog__slide">
          <Image src={BlogImg} alt="blog img" />
          <Text
            message="Название проекта или интерьера в две строки"
            size={16}
            weight={400}
            color="#3b3b3b"
          />
        </SwiperSlide>
        <SwiperSlide className="blog__slide">
          <Image src={BlogImg} alt="blog img" />
          <Text
            message="Название проекта или интерьера в две строки"
            size={16}
            weight={400}
            color="#3b3b3b"
          />
        </SwiperSlide>
        <SwiperSlide className="blog__slide">
          <Image src={BlogImg} alt="blog img" />
          <Text
            message="Название проекта или интерьера в две строки"
            size={16}
            weight={400}
            color="#3b3b3b"
          />
        </SwiperSlide>
      </Swiper>
      <button className="blog__button blog__button--next">
        <ChevronRight />
      </button>
      <button className="blog__button blog__button--prev">
        <ChevronLeft />
      </button>
    </div>
  );
}
