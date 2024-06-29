"use client";
import React from "react";
import Image from "next/image";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Mousewheel } from "swiper/modules";
import Text from "../Common/Text";
import {
  ChevronLeft,
  ChevronRight,
  HeroFirst,
  HeroSecond,
  HeroThird,
} from "../../../public";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./banner.scss";

SwiperCore.use([Navigation, Autoplay, Mousewheel]);

export default function Banner() {
  return (
    <div className="banner container">
      <Swiper
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        mousewheel={true}
        loop={true}
        modules={[Navigation, Autoplay, Mousewheel]}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            src={HeroFirst}
            className="banner__img"
            alt="Picture of the author"
          />

          <div className="banner__info">
            <p className="banner__title">Скидка на столовые группы</p>
            <p className="banner__subtitle">Дополнительный текст-описание</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={HeroSecond}
            className="banner__img"
            alt="Picture of the author"
          />

          <div className="banner__info">
            <p className="banner__title">Скидка на столовые группы</p>
            <p className="banner__subtitle">Дополнительный текст-описание</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={HeroThird}
            className="banner__img"
            alt="Picture of the author"
          />

          <div className="banner__info">
            <p className="banner__title">Скидка на столовые группы</p>
            <p className="banner__subtitle">Дополнительный текст-описание</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={HeroFirst}
            className="banner__img"
            alt="Picture of the author"
          />

          <div className="banner__info">
            <p className="banner__title">Скидка на столовые группы</p>
            <p className="banner__subtitle">Дополнительный текст-описание</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={HeroSecond}
            className="banner__img"
            alt="Picture of the author"
          />

          <div className="banner__info">
            <p className="banner__title">Скидка на столовые группы</p>
            <p className="banner__subtitle">Дополнительный текст-описание</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={HeroThird}
            className="banner__img"
            alt="Picture of the author"
          />

          <div className="banner__info">
            <p className="banner__title">Скидка на столовые группы</p>
            <p className="banner__subtitle">Дополнительный текст-описание</p>
          </div>
        </SwiperSlide>
      </Swiper>
      <button className="banner__button banner__button--next">
        <ChevronRight />
      </button>
      <button className="banner__button banner__button--prev">
        <ChevronLeft />
      </button>
    </div>
  );
}
