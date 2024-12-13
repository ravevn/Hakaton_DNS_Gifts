import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import '../styles/slider.css';


const SliderComponent = () => {
  return (
    <div className="marquee-container">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: false }}
        loop={true}
        speed={5000} 
        slidesPerView={5} 
        spaceBetween={10} 
      >
        <SwiperSlide>
          <img src="./images/image1.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/image2.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/image3.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/image4.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/image5.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/image6.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/image7.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/image8.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/image9.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SliderComponent;
