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
import React from "react"
import { FaArrowRight } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react"
const Swipper = () => {
  return (
    <>
    <div className="flex flex-col items-center justify-center bg-gray-950 w-full pt-20 pb-10">
      <h1 className="text-5xl font-semibold text-center text text-white">Nuestras Obras</h1>
      <h3 className="text-xl font-semibold text-white pt-4">desliza </h3>
      <div className="flex gap-4 pt-4">
      <FaArrowRight className="text-white text-xl"/><FaArrowRight className="text-white text-xl"/><FaArrowRight className="text-white text-xl"/>
      </div>
    </div>
    <section className=" w-full px-16 h-[700px] overflow-hidden flex items-center overflow-y-hidden ">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        
        breakpoints={{
          
          450: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
        className="h-[550px] w-full "
        navigation
        pagination={{ clickable: true}}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}

        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >

        <SwiperSlide>
        <figure className="w-full h-[500px]">
            <Image
              src="/lavag/ft1.jpg"
              alt="obra1"
              width={1400}
              height={350}
              className="block w-full h-[500px] object-cover"
            />
          </figure>
        </SwiperSlide>

        <SwiperSlide>
        <figure className="w-full h-[500px]">
            <Image
              src="/lavag/ft3.jpg"
              alt="obra1"
              width={1400}
              height={350}
              className="block w-full h-[500px] object-cover"
            />
          </figure>
        </SwiperSlide>
        <SwiperSlide>
        <figure className="w-full h-[500px]">
            <Image
              src="/lavag/ft2.jpg"
              alt="obra1"
              width={1400}
              height={350}
              className="block w-full h-[500px] object-cover"
            />
          </figure>
        </SwiperSlide>
        <SwiperSlide>
        <figure className="w-full h-[500px]">
            <Image
              src="/lavag/locales3.jpg"
              alt="obra1"
              width={1400}
              height={350}
              className="block w-full h-[500px] object-cover"
            />
          </figure>
        </SwiperSlide>
        <SwiperSlide>
        <figure className="w-full h-[500px]">
            <Image
              src="/locale/locale1.jpg"
              alt="obra1"
              width={1400}
              height={350}
              className="block w-full h-[500px] object-cover"
            />
          </figure>
        </SwiperSlide>
        <SwiperSlide>
        <figure className="w-full h-[500px]">
            <Image
              src="/locale/locale2.jpg"
              alt="obra1"
              width={1400}
              height={350}
              className="block w-full h-[500px] object-cover"
            />
          </figure>
        </SwiperSlide>
        <SwiperSlide>
        <figure className="w-full h-[500px]">
            <Image
              src="/locale/locale3.jpeg"
              alt="obra1"
              width={1400}
              height={350}
              className="block w-full h-[500px] object-cover"
            />
          </figure>
        </SwiperSlide>
        <SwiperSlide>
        <figure className="w-full h-[500px]">
            <Image
              src="/electricidad/electricidad4.jpg"
              alt="obra1"
              width={1400}
              height={350}
              className="block w-full h-[500px] object-cover"
            />
          </figure>
        </SwiperSlide>
        <SwiperSlide>
        <figure className="w-full h-[500px]">
            <Image
              src="/electricidad/electricidad9.jpg"
              alt="obra1"
              width={1400}
              height={350}
              className="block w-full h-[500px] object-cover"
            />
          </figure>
        </SwiperSlide>
        <SwiperSlide>
        <figure className="w-full h-[500px]">
            <Image
              src="/electricidad/electricidad10.jpg"
              alt="obra1"
              width={1400}
              height={350}
              className="block w-full h-[500px] object-cover"
            />
          </figure>
        </SwiperSlide>
        <SwiperSlide>
        <figure className="w-full h-[500px]">
            <Image
              src="/banoros/bano8.jpg"
              alt="obra1"
              width={1400}
              height={350}
              className="block w-full h-[500px] object-cover"
            />
          </figure>
        </SwiperSlide>
        <SwiperSlide>
        <figure className="w-full h-[500px]">
            <Image
              src="/banoros/bano2.jpg"
              alt="obra1"
              width={1400}
              height={800}
              className="block w-full h-[500px] object-cover"
            />
          </figure>
        </SwiperSlide>
        <SwiperSlide>
        <figure className="w-full h-[500px]">
            <Image
              src="/banoros/bano6.jpeg"
              alt="obra1"
              width={1400}
              height={800}
              className="block w-full h-[500px] object-cover"
            />
          </figure>
        </SwiperSlide>
        <SwiperSlide>
        <figure className="w-full h-[500px]">
            <Image
              src="/banoros/bano13.jpg"
              alt="obra1"
              width={1400}
              height={800}
              className="block w-full h-[500px] object-cover"
            />
          </figure>
        </SwiperSlide>
        <SwiperSlide>
        <figure className="w-full h-[500px]">
            <Image
              src="/banoros/banom.jpg"
              alt="obra1"
              width={1400}
              height={800}
              className="block w-full h-[500px] object-cover"
            />
         </figure>
        </SwiperSlide>
        <SwiperSlide>
        <figure className="w-full h-[500px]">
            <Image
              src="/banoros/bano1.jpeg"
              alt="obra1"
              width={1400}
              height={800}
              className="block w-full h-[500px] object-cover"
            />
         </figure >
        </SwiperSlide>
        <SwiperSlide>
        <figure className="w-full h-[500px]">
            <Image
              src="/banoros/bano3.jpeg"
              alt="obra1"
              width={1400}
              height={800}
              className="block w-full h-[500px] object-cover"
            />
         </figure >
        </SwiperSlide>
        <SwiperSlide>
        <figure className="w-full h-[500px]">
            <Image
              src="/cocinaL/cocina8.jpg"
              alt="obra1"
              width={1400}
              height={800}
              className="block w-full h-[500px] object-cover"
            />
          </figure>
        </SwiperSlide>
        <SwiperSlide>
        <figure className="w-full h-[500px]">
            <Image
              src="/cocinaL/durlock5.jpg"
              alt="obra1"
              width={1400}
              height={800}
              className="block w-full h-[500px] object-cover"
            />
          </figure>
        </SwiperSlide>
        
        <SwiperSlide>
        <figure className="w-full h-[500px]">
            <Image
              src="/cocinaL/cocinat.jpg"
              alt="obra1"
              width={1400}
              height={800}
              className="block w-full h-[500px] object-cover"
            />
          </figure>
        </SwiperSlide>
        <SwiperSlide>
        <figure className="w-full h-[500px]">
            <Image
              src="/cocinaR/cocina11.jpg"
              alt="obra1"
              width={1400}
              height={800}
              className="block w-full h-[500px] object-cover"
            />
          </figure>
        </SwiperSlide>
         <SwiperSlide>
        <figure className="w-full h-[500px]">
            <Image
              src="/cocinaR/cocinam.jpg"
              alt="obra1"
              width={1400}
              height={800}
              className="block w-full h-[500px] object-cover"
            />
          </figure>
        </SwiperSlide>
        <SwiperSlide>
        <figure className="w-full h-[500px]">
            <Image
              src="/cocinaR/cocina12.jpg"
              alt="obra1"
              width={1400}
              height={800}
              className="block w-full h-[500px] object-cover"
            />
          </figure>
        </SwiperSlide>
         <SwiperSlide>
        <figure className="w-full h-[500px]">
            <Image
              src="/cocinaR/cocina14.jpg"
              alt="obra1"
              width={1400}
              height={800}
              className="block w-full h-[500px] object-cover"
            />
          </figure>
        </SwiperSlide>
        <SwiperSlide>
        <figure className="w-full h-[500px]">
            <Image
              src="/DURLOCK/bano8.jpg"
              alt="obra1"
              width={1400}
              height={800}
              className="block w-full h-[500px] object-cover"
            />
          </figure>
        </SwiperSlide>
        <SwiperSlide>
        <figure className="w-full h-[500px]">
            <Image
              src="/DURLOCK/bano11.jpg"
              alt="obra1"
              width={1400}
              height={800}
              className="block w-full h-[500px] object-cover"
            />
          </figure>
        </SwiperSlide>
        <SwiperSlide>
        <figure className="w-full h-[500px]">
            <Image
              src="/DURLOCK/durlock13.jpg"
              alt="obra1"
              width={1400}
              height={800}
              className="block w-full h-[500px] object-cover"
            />
          </figure>
        </SwiperSlide>
        <SwiperSlide>
        <figure className="w-full h-[500px]">
            <Image
              src="/DURLOCK/durlock14.jpg"
              alt="obra1"
              width={1400}
              height={800}
              className="block w-full h-[500px] object-cover"
            />
          </figure>
        </SwiperSlide>
      </Swiper>
    </section>
    </>
  )
}
export default Swipper
