import React from 'react'
import useQueryUpcoming from '../../hooks/useQueryUpcoming';
import "../movielistlanding/movielistlanding.css";
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, } from 'swiper/modules'
import 'swiper/css/pagination';
import { useNavigate} from "react-router-dom"


const Upcominglanding = () => {
    const { upcomingMovies, isLoading } = useQueryUpcoming();
    const navigate = useNavigate()

  return (
<div className="text-white pt-20  top-0 left-0 right-0 z-20">
        <div className="text-white pt-20 px-20 font-bold mb-4 flex items-center justify-between">
          <h1 className='text-3xl '>Upcoming Movies</h1>
          <button variant="text" className="flex items-center gap-2" onClick={() => navigate("/upcomingmovies")}>
          See More{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </button>
        </div>
      
        <div className="flex overflow-x-auto custom-scrollbar relative" style={{ scrollBehavior: "smooth" }}>
          {isLoading ? (
            <div>Loading</div>
          ) : (
            <Swiper
            modules={[Autoplay,]}
      spaceBetween={50}
      slidesPerView={4}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
    >{
        upcomingMovies.map((movie, index) => (
            <SwiperSlide>
              <div
                key={index}
                className="flex flex-col items-center mr-12 m-10 mb-4 relative"
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={`${index}`}
                  className="max-w-xs"
                />
                <h1 className="text-white font-bold mt-2">{movie.title}</h1>
                
              </div>
              
              </SwiperSlide>
            ))
        }
    </Swiper>
        
        )}
        </div>
       
      </div>
      
    
  );
};

export default Upcominglanding