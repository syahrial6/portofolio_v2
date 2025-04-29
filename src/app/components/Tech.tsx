import React from 'react'
import { Virtual } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/virtual';

const Tech = () => {
    const slides = Array.from({ length: 1000 }).map(
        (el, index) => `Slide ${index + 1}`
      );
  return (
    <div>
       <Swiper modules={[Virtual]} spaceBetween={50} slidesPerView={3} virtual>
      {slides.map((slideContent, index) => (
        <SwiperSlide key={slideContent} virtualIndex={index}>
          {slideContent}
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
  )
}

export default Tech
