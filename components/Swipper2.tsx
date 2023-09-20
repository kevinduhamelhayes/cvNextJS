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
    <section className=" w-full px-20 h-[400px] md:h-[600px] overflow-hidden flex items-center overflow-y-hidden ">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        
        breakpoints={{
          
          450: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1280: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
        }}
        className="h-[400px] md:h-[500px] w-full "
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
              src="/GRANDESOBRAS/grandesobras1.jpg"
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
              src="/GRANDESOBRAS/grandesobras2.jpg"
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
              src="/GRANDESOBRAS/grandesobras6.jpg"
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
              src="/GRANDESOBRAS/grandesobras7.jpg"
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
              src="/localr/locales1.jpg"
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
              src="/localr/locales4.jpg"
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
              src="/localr/locales5.jpg"
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
              src="/obrasvarias/obras8.jpg"
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
              src="/obrasvarias/obras9.jpg"
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
              src="/pileta/pileta1.jpeg"
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
              src="/pileta/patio3.jpg"
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
              src="/pileta/patio2.jpg"
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
              src="/pileta/pileta7.jpg"
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
              src="/pileta/pileta1.jpg"
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
              src="/plomeria/plomeria4.jpeg"
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
              src="/plomeria/plomeria2.jpg"
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
              src="/salta/salta1.jpg"
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
              src="/salta/salta5.jpg"
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
              src="/salta/salta7.jpg"
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
              src="/salta/salta8.jpg"
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
              src="/salta/salta9.jpg"
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
              src="/varios/tt1.jpg"
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
              src="/seguridad/seguridad3.jpg"
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
              src="/seguridad/seguridad6.jpg"
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
              src="/seguridad/herreria4.jpg"
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
              src="/seguridad/herreria1.jpg"
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
              src="/seguridad/seguridad1.jpg"
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