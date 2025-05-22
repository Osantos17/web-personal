import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';
import './AFrame.css'


function AFrame() {

  return(
    <div>
      <div>
        <Swiper
          scrollbar={{
            hide: false, 
          }}
          modules={[Scrollbar]}
          className="mySwiper"
        >
          <SwiperSlide className="flex justify-evenly items-center my-2">
            <img
              src="/images/IphonePlusAFrame.png"
              alt="AFrame"
              className="max-h-auto max-w-auto md:max-h200 md:max-w-200"
            />
          </SwiperSlide>

          <SwiperSlide>
          <img
              src="/images/MapAndLocal.png"
              alt="AFrame"
              className="max-h-auto max-w-auto md:max-h200 md:max-w-200"
            />
          </SwiperSlide>

        </Swiper>
        <div >

        <div className="text-xs text-white text-center mt-2 mx-3 lg:mt-6 lg:mx-16 lg:text-2xl">
          A-Frame was inspired by my passion for surfing and the need for a simpler, more intuitive forecast tool. Designed to highlight key conditions without clutter, the app continues to evolve through user feedback, with features like Favorites and expanded swell and wind data for improved accuracy.
        </div>

        </div>
        {/* <div className="text-white mb-2 mt-3 text-center lg:text-4xl">
        A-FRAME: SURF FORECAST
      </div> */}
      </div>
      <div className="mt-8">
        <img
          src="/images/AFrame.png"
          alt="AFrame"
          className="max-h-35 w-auto md:max-h-95"
        />
      </div>
    </div>
  )
}

export default AFrame