import React from 'react';
import caroussel1 from '../../assets/caroussel1.jpeg';
import caroussel2 from '../../assets/caroussel2.png';
import caroussel3 from '../../assets/caroussel3.png';
import Card from '../card/card';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Import required modules
import { Autoplay } from 'swiper/modules';

export default function Caroussel() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay]}
        className="mySwiper mt-6"
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 1,
          },
        }}
      >
        <SwiperSlide>
          <Card 
            image={caroussel1} 
            className='w-full' 
            imageClassName='w-[80%] h-64 m-[8%] rounded-2xl' 
          />
        </SwiperSlide>

        <SwiperSlide>
          <Card 
            image={caroussel2} 
            className='w-full' 
            imageClassName='w-[80%] h-64 m-[8%] rounded-2xl' 
          />
        </SwiperSlide>

        <SwiperSlide>
          <Card 
            image={caroussel3} 
            className='w-full' 
            imageClassName='w-[80%] h-64 m-[8%] rounded-2xl'
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
