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
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1280: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
        }}
        className="h-[200px] md:h-[250px] w-full "
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
              <Image src="/svgs/nextjs-2.svg" alt="Next.js Logo" width={224} height={96} className="hover:scale-110 transition-transform duration-300 pb-4" />
              <p className="text-lg font-semibold hidden">Next.js</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center m-8">
              <Image src="/svgs/react-2.svg" alt="React Logo" width={100} height={80} className="hover:scale-110 transition-transform duration-300 pb-4" />
              <p className="text-lg font-semibold hidden">React</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="flex flex-col items-center m-8">
        <Image src="/svgs/github-icon.svg" alt="GitHub Icon" width={110} height={96} className="hover:scale-110 transition-transform duration-300 pb-4" />
    <p className="text-lg font-semibold hidden">GitHub</p>
  </div>
</SwiperSlide>
<SwiperSlide>
  <div className="flex flex-col items-center m-8">
    <Image src="/svgs/javascript-1.svg" alt="JavaScript Logo" width={100} height={96} className="hover:scale-110 transition-transform duration-300 pb-4" />
    <p className="text-lg font-semibold hidden">JavaScript</p>
  </div>
</SwiperSlide>
<SwiperSlide>
  <div className="flex flex-col items-center m-8">
    <Image src="/svgs/html-1.svg" alt="HTML5 Logo" width={100} height={96} className="hover:scale-110 transition-transform duration-300 pb-4" />
    <p className="text-lg font-semibold hidden">HTML5</p>
  </div>
</SwiperSlide>
<SwiperSlide>
  <div className="flex flex-col items-center m-8">
    <Image src="/svgs/css-3.svg" alt="CSS3 Logo" width={100} height={96} className="hover:scale-110 transition-transform duration-300 pb-4" />
    <p className="text-lg font-semibold hidden">CSS3</p>
  </div>
</SwiperSlide>
<SwiperSlide>
  <div className="flex flex-col items-center m-8">
    <Image src="/svgs/tailwindcss.svg" alt="TailwindCSS Logo" width={220} height={96} className="hover:scale-110 transition-transform duration-300 pb-4" />
          <p className="text-lg font-semibold hidden">Porn hub</p>
        </div>
        </SwiperSlide>
        </Swiper>
        </section>
    </>
  );
}