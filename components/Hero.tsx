import { Button } from '@nextui-org/react';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Hero = () => {
  const [description, setDescription] = useState("");
  const [animationStarted, setAnimationStarted] = useState(false);
  const fullDescription = "Soy un desarrollador frontend especializado en la creación de interfaces de usuario dinámicas y visualmente atractivas. Con dominio en tecnologías como React, Next.js y NextUI, y habilidades en CSS y HTML, siempre busco implementar las mejores prácticas, incluyendo el diseño responsivo para asegurar una experiencia óptima en todos los dispositivos. "  ;
  {/*Estoy familiarizado con metodologías ágiles como Scrum, y siempre me mantengo actualizado con las últimas tendencias en animaciones y transiciones. Mi misión es desarrollar soluciones frontend que sean estéticamente agradables y funcionalmente efectivas para los usuarios.*/

  }

  useEffect(() => {
    if (!animationStarted) {
      setAnimationStarted(true);
      const chars = [...fullDescription];
      chars.map((char, index) => {
        setTimeout(() => {
          setDescription((prev) => prev + char);
        }, index * 100);
      });
    }
  }, []);

  return (
    <div className="relative h-[400px] md:h-[450px] w-full overflow-hidden">
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
          <div className='flex flex-row gap-4 animate-slide-from-left'>
            <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-500 animate-gradient-x">Kevin Duhamel</h1>
          </div>
          {/* Contenido del Hero 
          <h2 className='text-3xl font-extrabold bg-clip-text text-white'>Frontend Dev</h2>*/}
          <p className="mt-10 md:mt-2 font-semibold text-lg">{description}</p>

          {/* Espacio reservado para la imagen del desarrollador */}
          <div className="absolute right-0 top-1/4 w-1/3">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
