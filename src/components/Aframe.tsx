import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules'; 
import 'swiper/css';
import 'swiper/css/scrollbar';
import './AFrame.css'


function AFrame() {

  return(
    <div className='aFrame'>
      <div>
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
        className="mySwiper bottom-3"
      >
          <SwiperSlide className="flex justify-evenly items-center mb-4 lg:mb-6">
            <img
              src="/images/IphonePlusAFrame.png"
              alt="AFrame"
              className="max-h-auto max-w-auto lg:max-h-170 lg:max-w-170"
            />
          </SwiperSlide>

          <SwiperSlide className="flex justify-evenly items-center mb-4 lg:mb-6">
          <img
              src="/images/MapAndLocal.png"
              alt="AFrame"
              className="max-h-auto max-w-auto lg:max-h-170 lg:max-w-170"
            />
          </SwiperSlide>

        </Swiper>
        <div >

        <div className="sm-text-xs text-white text-center mx-3 md:text-xl md:mx-8  lg:mt-6 lg:mx-16 lg:text-2xl lg:leading-relaxed">
          A-Frame was inspired by my passion for surfing and the need for a simpler, more intuitive forecast tool. Designed to highlight key conditions without clutter, the app continues to evolve through user feedback, with features like Favorites and expanded swell and wind data for improved accuracy.
        </div>

        </div>
      </div>
      
    </div>
  )
}

export default AFrame