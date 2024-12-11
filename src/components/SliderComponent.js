import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import '../styles/slider.css'

const SliderComponent = () => {
  return (
    <div className="slider-container">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        spaceBetween={30}
        slidesPerView={1}
      >
        <SwiperSlide className="slide">
          <img src="https://c.dns-shop.ru/thumb/st1/fit/190/190/7cd3bde3fbac579354c9d0a366caa563/d90873c869a4bcbc3d976acaaf833109ed5b5c2fda3e162b4fdd56cb7d923cb3.jpg" alt="Слайд 1" />
          <p>fdsfsdfsf</p>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img src="https://via.placeholder.com/800x400" alt="Слайд 2" />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img src="https://via.placeholder.com/800x400" alt="Слайд 3" />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img src="https://via.placeholder.com/800x400" alt="Слайд 4" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SliderComponent;
