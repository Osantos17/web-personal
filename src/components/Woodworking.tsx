import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules'; 
import 'swiper/css';
import 'swiper/css/scrollbar';
import './WoodWorking.css';

function WoodWorking() {
  return (
    <div className="woodWorking flex flex-row  w-full px-2 py-6 lg:py-20">
      <div className="w-1/2 text-xs pr-4 text-white text-left md:text-lg lg:text-2xl lg:leading-relaxed">
        Woodworking for me is about creating pieces that are both beautiful and functional. Every detail matters, once the first cut is made, there's no turning back. Crafting my son’s crib from a walnut slab was my proudest and most challenging project. While some builds focus more on function than design, the same level of planning and precision goes into every piece.
      </div>

      <div className="w-1/2 ml-auto mt-1 lg:w-2/5">
        <Swiper
          scrollbar={{
            hide: false,

          }}
          grabCursor={true}     
          resistance={true}     
          resistanceRatio={0.5} 
          threshold={1}         
          speed={500}           
          modules={[Scrollbar]}
          className="mySwiper"
        >

          <SwiperSlide className="md:mb-6 lg:mb-16">
            <img
              src="/images/CribCoop.png"
              alt="CribCoop"
              className="max-h-55 max-w-full mb-4 md:max-w-58 md:max-h-100 lg:max-w-100 lg:max-h-175"
            />
          </SwiperSlide>
          <SwiperSlide className="lg:mb-16">
            <img
              src="/images/FireToddler.png"
              alt="FireToddler"
              className="max-h-55 max-w-full mb-4 md:max-w-58 md:max-h-100 lg:max-w-100 lg:max-h-175"
            />
          </SwiperSlide>

        </Swiper>
      </div>
    </div>
  );
}

export default WoodWorking;
