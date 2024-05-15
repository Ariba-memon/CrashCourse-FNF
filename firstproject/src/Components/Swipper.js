import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { Autoplay } from "swiper/modules";

export default () => {
  return (
   <div>
     <h1 className='m-20 font-bold text-3xl font-Roboto sm:text-sm md:text-lg lg:text-3xl text-[#212121] text-center'>Famous Blogs</h1>
     <Swiper
      centeredSlides={false}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <img src='https://media.dev.to/cdn-cgi/image/width=1600,height=900,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fka5lc1x11wtj6nnesee3.png' />
      </SwiperSlide>
      <SwiperSlide>
        <img src='https://miro.medium.com/v2/resize:fit:1000/1*KDMx1YspSrBcFJG-NDZgDg.png' />
      </SwiperSlide>
      <SwiperSlide><img src='https://www.bleepstatic.com/content/hl-images/2023/12/16/mongodb-header-o.jpg' /></SwiperSlide>
      <SwiperSlide>
        <img src='https://miro.medium.com/v2/resize:fit:1400/1*aFSGNHkmdBrrZtpIyzDR2A.jpeg'/>
      </SwiperSlide>
   
    </Swiper>
   </div>
  );
};