import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules'; 
import 'swiper/css';
import 'swiper/css/scrollbar';
import './WoodWorking.css';

function WoodWorking() {
  return (
    <div className="woodWorking flex flex-row items-start w-full px-2 py-6">
      {/* Text block */}
      <div className="w-1/2 text-xs pr-4 text-white text-left lg:text-2xl">
        What I love most about woodworking is creating pieces that are both beautiful and functional. Every detail matters, once the first cut is made, there's no turning back. Crafting my son’s crib from a walnut slab was my proudest and most challenging project. While some builds focus more on function than design, the same level of planning and precision goes into every piece.
      </div>

      {/* Swiper block aligned to the right */}
      <div className="w-1/2 ml-auto">
        <Swiper
          scrollbar={{ hide: false }}
          modules={[Scrollbar]}
          className="mySwiper"
        >
          <SwiperSlide className="flex justify-center items-center mb-4">
            <img
              src="/images/CribCoop.png"
              alt="CribCoop"
              className="max-h-auto max-w-full md:max-h-[200px] md:max-w-[200px]"
            />
          </SwiperSlide>

          <SwiperSlide className="flex justify-center items-center mb-4">
            <img
              src="/images/FireToddler.png"
              alt="FireToddler"
              className="max-h-auto max-w-full md:max-h-[200px] md:max-w-[200px]"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default WoodWorking;
