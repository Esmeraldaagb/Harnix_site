import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Card from '../card/card'; 

const Carousel: React.FC = () => {

  return (
    <div className="my-8">

      <Swiper
        spaceBetween={20} 
        slidesPerView={2} 
        loop={true}
        onSlideChange={() => console.log('Slide changed')}
        onSwiper={(swiper) => console.log(swiper)}
    
      >
        <SwiperSlide>
          <Card
            image="https://via.placeholder.com/400x300.png?text=Image+1"
    
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            image="https://via.placeholder.com/400x300.png?text=Image+2"
          />
        </SwiperSlide>
       
      </Swiper>
    </div>
  );
};

export default Carousel;
