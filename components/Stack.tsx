// Desc: Stack of technologies used in the project
import { Navigation, Pagination, Scrollbar, A11y, Autoplay} from "swiper/modules"
import Image from "next/image"
import "swiper/css"
import 'swiper/css/autoplay';
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import "swiper/css/effect-fade"
import "swiper/css/autoplay"
import 'swiper/css/zoom';
import "swiper/css/scrollbar"

import { Swiper, SwiperSlide } from "swiper/react"
export default function Stack() {
  return (
    <>
    <div className='p-8 bg-white w-full'>
        <h2 className="text-4xl font-bold text-center">Te presento mi Stack principal</h2>
      </div>
    <section className=" w-full px-20 h-[200px] bg-white md:h-[200px] overflow-hidden flex items-center overflow-y-hidden ">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        breakpoints={{
          450: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
          1280: {
            slidesPerView: 6,
            spaceBetween: 10,
          },
        }}
        className="h-[200px] md:h-[150px] w-full "
        navigation
        
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
        <div className="flex flex-col items-center m-8">
        <img src="/svgs/nextjs-2.svg" alt="Cafesito" className="w-56 h-24 hover:scale-110 transition-transform duration-300 pb-4" />
          <p className="text-lg font-semibold hidden">Twitter</p>
        </div>
        </SwiperSlide>
      <SwiperSlide>

        <div className="flex flex-col items-center m-8 ">
        <img src="/svgs/react-2.svg" alt="Instagram" className="w-56 h-24 hover:scale-110 transition-transform duration-300 pb-4" />
          <p className="text-lg font-semibold hidden">Instagram</p>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="flex flex-col items-center m-8">
        <img src="/svgs/github-icon.svg" alt="Cafesito" className="w-56 h-24 hover:scale-110 transition-transform duration-300 pb-4" />
          <p className="text-lg font-semibold hidden">Porn hub</p>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="fflex flex-col items-center m-8">
        <img src="./svgs/javascript-1.svg" alt="Cafesito" className="w-56 h-24 hover:scale-110 transition-transform duration-300 pb-4" />
          <p className="text-lg font-semibold hidden">Porn hub</p>
        </div>
        </SwiperSlide>
        <SwiperSlide>
      
        <div className="flex flex-col items-center m-8">
        <img src="./svgs/html-1.svg" alt="Cafesito" className="w-56 h-24 hover:scale-110 transition-transform duration-300 pb-4" />
          <p className="text-lg font-semibold hidden">Porn hub</p>
        </div>
        </SwiperSlide>
      <SwiperSlide>
        <div className="flex flex-col items-center m-8">
        <img src="./svgs/css-3.svg" alt="Cafesito" className="w-56 h-24 hover:scale-110 transition-transform duration-300 pb-4" />
          <p className="text-lg font-semibold hidden">Porn hub</p>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="flex flex-col items-center m-8">
        <img src="./svgs/tailwindcss.svg" alt="Cafesito" className="w-56 h-24 hover:scale-110 transition-transform duration-300 pb-4" />
          <p className="text-lg font-semibold hidden">Porn hub</p>
        </div>
        </SwiperSlide>
        </Swiper>
        </section>
    </>
  );
}