import React from "react";

import {Card, CardBody, Image, Button, Progress} from "@nextui-org/react";
import {HeartIcon} from "./icons/HeartIcon";
import {PauseCircleIcon} from "./icons/PauseCircleIcon";
import {NextIcon} from "./icons/NextIcon";
import {PreviousIcon} from "./icons/PreviousIcon";
import {RepeatOneIcon} from "./icons/RepeatOneIcon";
import {ShuffleIcon} from "./icons/ShuffleIcon";
// Desc: Stack of technologies used in the project
import { Navigation, Pagination, Scrollbar, A11y, Autoplay} from "swiper/modules"
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

export default function App() {
  const [liked, setLiked] = React.useState(false);

  return (
<Card className="relative border-none bg-background/90 dark:bg-default-100/50 w-full rounded-none items-center justify-center h-[800px] max-w-full">
  <video autoPlay muted loop className="absolute z-0 w-auto min-w-full min-h-full max-w-none object-cover">
    <source src="/programing/pexels-tima-miroshnichenko-5377685 (2160p).mp4" type="video/mp4" />
    Tu navegador no soporta el elemento de video.
  </video>
    <Card
      isBlurred
      className="border-none bg-background/90 dark:bg-default-100/50 max-w-[1200px] w-[1200px] items-center justify-center h-[550px] flex flex-col"
    >
      <CardBody className="flex flex-col w-full h-[550px] justify-center gap-10" >
        <div className="flex flex-row justify-evenly items-center gap-10 px-6 h-[550] ">
        <section className=" w-[900px] px-0 h-[550px] bg-inherit md:h-[550px] overflow-hidden flex items-center overflow-y-hidden ">
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
            slidesPerView: 1,
            spaceBetween: 10,
          },
          1280: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        }}
        className="h-[400px] md:h-[550px] w-full "
        navigation
        autoplay={{
          delay: 15000,
          disableOnInteraction: false,
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide className="flex items-center justify-center w-full h-full">
  <div className="flex flex-col items-center rounded-md justify-center w-full h-full">
    <video 
      autoPlay 
      muted 
      loop 
      className="w-full h-full object-contain " 
      controls // Agrega controles para asegurarte de que el video se está cargando y reproduciendo correctamente
    >
      <source src="/programing/project1.webm" type="video/webm" />
      Tu navegador no soporta el elemento de video.
    </video>
    <p className="text-lg font-semibold hidden">Twitter</p>
  </div>
</SwiperSlide>
<SwiperSlide className="flex items-center justify-center w-full h-full">
  <div className="flex flex-col items-center rounded-md justify-center w-full h-full">
    <video 
      autoPlay 
      muted 
      loop 
      className="w-full h-full object-contain " 
      controls // Agrega controles para asegurarte de que el video se está cargando y reproduciendo correctamente
    >
      <source src="/programing/project2.webm" type="video/webm" />
      Tu navegador no soporta el elemento de video.
    </video>
    <p className="text-lg font-semibold hidden">Twitter</p>
  </div>
</SwiperSlide>
<SwiperSlide className="flex items-center justify-center w-full h-full">
  <div className="flex flex-col items-center rounded-md justify-center w-full h-full">
    <video 
      autoPlay 
      muted 
      loop 
      className="w-full h-full object-contain " 
      controls // Agrega controles para asegurarte de que el video se está cargando y reproduciendo correctamente
    >
      <source src="/programing/project3.webm" type="video/webm" />
      Tu navegador no soporta el elemento de video.
    </video>
    <p className="text-lg font-semibold hidden">Twitter</p>
  </div>
</SwiperSlide>
<SwiperSlide className="flex items-center justify-center w-full h-full">
  <div className="flex flex-col items-center rounded-md justify-center w-full h-full">
    <video 
      autoPlay 
      muted 
      loop 
      className="w-full h-full object-contain " 
      controls // Agrega controles para asegurarte de que el video se está cargando y reproduciendo correctamente
    >
      <source src="/programing/project5.webm" type="video/webm" />
      Tu navegador no soporta el elemento de video.
    </video>
    <p className="text-lg font-semibold hidden">Twitter</p>
  </div>
</SwiperSlide>
<SwiperSlide className="flex items-center justify-center w-full h-full">
  <div className="flex flex-col items-center rounded-md justify-center w-full h-full">
    <video 
      autoPlay 
      muted 
      loop 
      className="w-full h-full object-contain " 
      controls // Agrega controles para asegurarte de que el video se está cargando y reproduciendo correctamente
    >
      <source src="/programing/project1.webm" type="video/webm" />
      Tu navegador no soporta el elemento de video.
    </video>
    <p className="text-lg font-semibold hidden">Twitter</p>
  </div>
</SwiperSlide>
        </Swiper>
        </section>
          <div className="flex flex-col ">
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-0">
                <h3 className="font-semibold text-foreground/90">Algunos de mis Proyectos</h3>
                <p className="text-small text-foreground/80">12 Hits</p>
                <h1 className="text-large font-medium mt-2">Frontend Radio</h1>
              </div>
              <Button
                isIconOnly
                className="text-default-900/60 data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2"
                radius="full"
                variant="light"
                onPress={() => setLiked((v) => !v)}
              >
                <HeartIcon
                  width={20}
                  height={20}
                  className={liked ? "[&>path]:stroke-transparent" : ""}
                  fill={liked ? "currentColor" : "none"}
                />
              </Button>
            </div>

            <div className="flex flex-col mt-3 gap-1">
              <Progress
                aria-label="Music progress"
                classNames={{
                  indicator: "bg-default-800 dark:bg-white",
                  track: "bg-default-500/30",
                }}
                color="default"
                size="sm"
                value={33}
              />
              <div className="flex justify-between">
                <p className="text-small">1:23</p>
                <p className="text-small text-foreground/50">4:32</p>
              </div>
            </div>

            <div className="flex w-full items-center justify-center">
            <Button
  isIconOnly
  className="data-[hover]:bg-foreground/10"
  radius="full"
  variant="light"
>
  <RepeatOneIcon className="text-foreground/80" width={20} height={20} />
</Button>
<Button
  isIconOnly
  className="data-[hover]:bg-foreground/10"
  radius="full"
  variant="light"
>
  <PreviousIcon width={20} height={20} />
</Button>
<Button
  isIconOnly
  className="w-auto h-auto data-[hover]:bg-foreground/10"
  radius="full"
  variant="light"
>
  <PauseCircleIcon size={54} width={20} height={20} />
</Button>
<Button
  isIconOnly
  className="data-[hover]:bg-foreground/10"
  radius="full"
  variant="light"
>
  <NextIcon width={20} height={20} />
</Button>
<Button
  isIconOnly
  className="data-[hover]:bg-foreground/10"
  radius="full"
  variant="light"
>
  <ShuffleIcon className="text-foreground/80" width={20} height={20} />
</Button>

            </div>
          </div>
        </div>
      </CardBody>
    </Card>
    </Card>
  );
}

