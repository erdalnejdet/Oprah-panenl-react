import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Home() {
  return (
    <div className="flex ml-12 md:ml-64 items-center">
      {/* Sol kısım: Swiper */}
      <div className="w-1/2 p-2">
        <Swiper spaceBetween={50} slidesPerView={1}>
          <SwiperSlide>
            <img src="https://via.placeholder.com/400x300" alt="Slide 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://via.placeholder.com/400x300" alt="Slide 2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://via.placeholder.com/400x300" alt="Slide 3" />
          </SwiperSlide>
        </Swiper>
      </div>
      
      <div className="w-1/2 p-2">
        <div className="flex items-center gap-8">
          <div className="bg-white border border-gray-700 p-4 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300">
            <p className="text-xs">Duygu Durum</p>
          </div>
          <div className="bg-white border border-gray-700 p-4 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300">
            <p className="text-xs">Duygu Durum</p>
          </div>
          <div className="bg-white border border-gray-700 p-4 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300">
            <p className="text-xs">Duygu Durum</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
