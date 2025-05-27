import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules'; 
import 'swiper/css';
import 'swiper/css/scrollbar';
import './WoodWorking.css';
import { useRef } from 'react';

function WoodWorking() {
  const swiperRef = useRef(null);

  const handleNextClick = () => {
    if (swiperRef.current?.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handlePrevClick = () => {
    if (swiperRef.current?.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <div className="woodWorking flex flex-row w-full px-2 py-6 lg:py-20">
      <div className="w-1/2 text-xs pr-4 text-white text-left md:text-lg lg:text-2xl lg:leading-relaxed">
        Woodworking for me is about creating pieces that are both beautiful and functional. Every detail matters, once the first cut is made, there's no turning back. While some builds focus more on function than design, the same level of planning and precision goes into every piece.
      </div>

      <div className="woodImages w-1/2 ml-auto mt-1 lg:w-2/5 relative">
        <Swiper
          scrollbar={{ hide: false }}
          grabCursor={true}
          modules={[Scrollbar]}
          className="mySwiper"
          ref={swiperRef}
          loop={true}
        >
          {[
            { src: "/images/Crib.png", alt: "Crib" },
            { src: "/images/Coop.png", alt: "Coop" },
            { src: "/images/FirePit.png", alt: "FirePit" },
            { src: "/images/Table.png", alt: "Table" },
            { src: "/images/Tower.png", alt: "Tower" },
          ].map((img, index) => (
            <SwiperSlide key={index}>
              <div className="relative">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="woodworking-image"
                />
                <div 
                  className="absolute left-0 top-0 w-1/2 h-full cursor-pointer"
                  onClick={handlePrevClick}
                ></div>
                <div 
                  className="absolute right-0 top-0 w-1/2 h-full cursor-pointer"
                  onClick={handleNextClick}
                ></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default WoodWorking;