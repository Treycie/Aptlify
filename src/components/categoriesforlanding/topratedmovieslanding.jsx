import React from 'react'
import useQueryToprated from "../../hooks/useQueryToprated";
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, } from 'swiper/modules'
import 'swiper/css/pagination';
import { useNavigate} from "react-router-dom"

const Topratedmovieslanding = () => {
    const navigate = useNavigate()
    const { topratedMovies, isLoading } = useQueryToprated();
//   const [scrollPosition, setScrollPosition] = useState(0);

//   const handleScroll = (scrollOffset) => {
//     const container = document.querySelector('.custom-scrollbar');
//     container.scrollLeft += scrollOffset;
//   };

  return (
    
    <div className="text-white pt-20 pb-20 top-0 left-0 right-0 z-20">
    <div className="text-white pt-20 px-20 font-bold mb-4 pb-30 flex items-center justify-between">
      <h1 className='text-3xl mb-20'>Top Rated Movies</h1>
      <button variant="text" className="flex items-center gap-2" onClick={() => navigate("/topratedmovies")}>
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
        topratedMovies.map((movie, index) => (
            <SwiperSlide key={index}>
                <div className="movie-container cursor-pointer hover:scale-95">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={`${index}`}
                  className="max-w-xs transition-opacity hover:opacity-20"
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




export default Topratedmovieslanding