"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Autoplay, Mousewheel, Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight, ProjectImg } from "../../../../public";
import "swiper/css";
import "./projects-swiper.scss";
import "swiper/css/pagination";

export default function ProjectsSwiper() {
  return (
    <div className="projects__swiper">
      <Swiper
        slidesPerView={4}
        navigation={{
          nextEl: ".projects__button--next",
          prevEl: ".projects__button--prev",
        }}
        autoplay={true}
        mousewheel={true}
        spaceBetween={5}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Autoplay, Mousewheel]}
      >
        <SwiperSlide className="projects__slide">
          <Image src={ProjectImg} alt="production img" />
          <p className="projects__text">Название проекта или интерьера в две строки</p>
        </SwiperSlide>
        <SwiperSlide className="projects__slide">
          <Image src={ProjectImg} alt="production img" />
          <p className="projects__text">Название проекта или интерьера в две строки</p>
        </SwiperSlide>
        <SwiperSlide className="projects__slide">
          <Image src={ProjectImg} alt="production img" />
          <p className="projects__text">Название проекта или интерьера в две строки</p>
        </SwiperSlide>
        <SwiperSlide className="projects__slide">
          <Image src={ProjectImg} alt="production img" />
          <p className="projects__text">Название проекта или интерьера в две строки</p>
        </SwiperSlide>
        <SwiperSlide className="projects__slide">
          <Image src={ProjectImg} alt="production img" />
          <p className="projects__text">Название проекта или интерьера в две строки</p>
        </SwiperSlide>
        <SwiperSlide className="projects__slide">
          <Image src={ProjectImg} alt="production img" />
          <p className="projects__text">Название проекта или интерьера в две строки</p>
        </SwiperSlide>
        <SwiperSlide className="projects__slide">
          <Image src={ProjectImg} alt="production img" />
          <p className="projects__text">Название проекта или интерьера в две строки</p>
        </SwiperSlide>
        <SwiperSlide className="projects__slide">
          <Image src={ProjectImg} alt="production img" />
          <p className="projects__text">Название проекта или интерьера в две строки</p>
        </SwiperSlide>
      </Swiper>
      <button className="projects__button projects__button--next ">
        <ChevronRight />
      </button>
      <button className="projects__button projects__button--prev">
        <ChevronLeft />
      </button>
    </div>
  );
}
