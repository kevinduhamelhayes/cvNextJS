import { Button } from '@nextui-org/react';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Hero = () => {
  const [description, setDescription] = useState("");
  const [animationStarted, setAnimationStarted] = useState(false);
  const fullDescription = "Soy un desarrollador frontend especializado en la creación de interfaces de usuario dinámicas y visualmente atractivas. Con dominio en tecnologías como React, Next.js y NextUI, y habilidades en CSS y HTML, siempre busco implementar las mejores prácticas, incluyendo el diseño responsivo para asegurar una experiencia óptima en todos los dispositivos. "  ;

  useEffect(() => {
    if (!animationStarted) {
      setAnimationStarted(true);
      const chars = Array.from(fullDescription);
      chars.map((char, index) => {
        setTimeout(() => {
          setDescription((prev) => prev + char);
        }, index * 100);
      });
    }
  }, []);

  return (
    <div className="relative h-[500px] md:h-[420px] w-full overflow-hidden">
      {/* Video de fondo */}
      <video
        autoPlay
        muted
        loop
        className="absolute -top-[00px] z-10 w-auto min-w-full min-h-full max-w-none"
      >
        <source src="/programing/person_typing_fast (1080p).mp4" type="video/mp4" />
        Tu navegador no soporta el elemento de video.
      </video>

      {/* Overlay opcional para oscurecer el video */}
      <div className="absolute z-20 w-full h-full bg-black opacity-50"></div>

      
      <div className="relative z-30 md:top-[60px] p-4 md:p-10 text-white">
        <div className='flex flex-col max-w-2xl ml-6 md:ml-20 gap-8'>
          <div className='flex flex-row gap-4 animate-fade-right animate-once animate-ease-linear animate-duration-1000 animate-delay-0 animate-normal animate-fill-both'>
            <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-500 ">Kevin Duhamel</h1>
          </div>
          <p className="mt-10 md:mt-2 font-semibold text-lg">{description}</p>

          <div className="absolute right-0 top-1/4 w-1/3">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
