import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import Button from '../Components/Button';

const Psikolog = () => {
  const psychologists = [
    {
      name: "Psikolog Adı 1",
      tags: ["#Tag1", "#Tag2", "#Tag3"],
      imageUrl: "https://via.placeholder.com/150"
    },
    {
      name: "Psikolog Adı 2",
      tags: ["#Tag4", "#Tag5", "#Tag6"],
      imageUrl: "https://via.placeholder.com/150"
    },
    {
      name: "Psikolog Adı 3",
      tags: ["#Tag7", "#Tag8", "#Tag9"],
      imageUrl: "https://via.placeholder.com/150"
    },
    {
      name: "Psikolog Adı 4",
      tags: ["#Tag10", "#Tag11", "#Tag12"],
      imageUrl: "https://via.placeholder.com/150"
    },
    {
      name: "Psikolog Adı 5",
      tags: ["#Tag13", "#Tag14", "#Tag15"],
      imageUrl: "https://via.placeholder.com/150"
    },
  ];

  return (
    <div className="p-6 ml-12 md:ml-64">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        navigation
        pagination={{
          clickable: true,
          el: '.custom-pagination', // Pagination elemanını özelleştirin
        }}
        modules={[Navigation, Pagination]}
      >

        {psychologists.map((psychologist, index) => (
          <SwiperSlide key={index}>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
              <img
                className="w-full h-48 object-cover"
                src={psychologist.imageUrl}
                alt={psychologist.name}
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{psychologist.name}</h3>
                <ul className="text-gray-600 mb-4 flex flex-row flex-wrap gap-4">
                  {psychologist.tags.map((tag, tagIndex) => (
                    <li key={tagIndex} className="mr-2 bg-green-400 p-2 rounded-2xl">
                      {tag}
                    </li>
                  ))}
                </ul>
                <Button 
                  name="Randevu Al" 
                  className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"  
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="custom-paginations absolute top-0 left-0 w-full flex justify-center p-2"></div>
    </div>
  );
};

export default Psikolog;
