// import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

import dryJaggery1 from "../../src/assets/images/dryJaggery1.jpg"
// import dryJaggery2 from "../../src/assets/images/dryJaggery6.jpg"
import dryJaggery3 from "../../src/assets/images/dryJaggery3.jpg"
import dryJaggery4 from "../../src/assets/images/dryJaggery4.jpg"
import dryJaggery5 from "../../src/assets/images/dryJaggery5.jpg"
import dryJaggery6 from "../../src/assets/images/dryJaggery6.jpg"
import dryJaggery7 from "../../src/assets/images/dryJaggery7.jpg"
import dryJaggery8 from "../../src/assets/images/dryJaggery8.jpg"
import dryJaggery9 from "../../src/assets/images/dryJaggery9.jpg"
const Banner = () => {
    return (
        <div>
            <Swiper
        pagination={{
          type: 'progressbar',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className=' h-[700px] w-full' src={dryJaggery1} alt="" />
        </SwiperSlide>
        {/* <SwiperSlide>
          <img className='h-[700px] w-full]' src={dryJaggery2} alt="" />
        </SwiperSlide> */}
        <SwiperSlide>
          <img className=' h-[700px] w-full' src={dryJaggery3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='h-[700px] w-full' src={dryJaggery4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className=' h-[700px] w-full' src={dryJaggery5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className=' h-[700px] w-full' src={dryJaggery6} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='h-[700px] w-full' src={dryJaggery7} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='h-[700px] w-full' src={dryJaggery8} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='h-[700px] w-full' src={dryJaggery9} alt="" />
        </SwiperSlide>
      </Swiper>
        </div>
    );
};

export default Banner;