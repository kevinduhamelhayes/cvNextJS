import { Button } from '@nextui-org/react';
import React from 'react';
import { FaInstagram, FaTwitter } from 'react-icons/fa';
import { SiOnlyfans } from 'react-icons/si';

const Hero = () => {
  return (
    <div className="relative h-[600px] md:h-[500px] w-full overflow-hidden">
      {/* Video de fondo */}
      <video
        autoPlay
        muted
        loop
        className="absolute -top-[500px] z-10 w-auto min-w-full min-h-full max-w-none"
      >
        <source src="/videos/videohero6.mp4" type="video/mp4" />
        Tu navegador no soporta el elemento de video.
      </video>

      {/* Overlay opcional para oscurecer el video */}
      <div className="absolute z-20 w-full h-full bg-black opacity-50"></div>

      {/* Contenido del Hero */}
      <div className="relative z-30 md:top-[30px] p-10 text-white">
        <div className='flex flex-col max-w-2xl ml-20 gap-8'>
          <div className='flex flex-row gap-4'>
        <h1 className="text-4xl font-bold">Gestión Profesional de Tus Redes Sociales</h1>
        <span className='hidden'>
        <FaTwitter className="text-7xl text-blue-500"/>
<FaInstagram className="text-7xl text-orange-400"/>
<SiOnlyfans className="text-7xl text-blue-300"/>
</span>
        </div>
        <h2 className='text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-500 gradient-animated'>Maximiza tus ganancias, minimiza tu esfuerzo.</h2>
<p className="mt-2">Deja en nuestras manos la gestión de tus redes y enfócate en lo que mejor sabes hacer: <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-yellow-500 gradient-animated">crear contenido</span>.</p>

        <Button className="mt-4 py-8 border-4 text-white font-extrabold text-2xl hover:text-white " color="warning" variant="bordered" >
        Comienza Ahora
        </Button>
        
        </div>
      </div>
    </div>
  );
};

export default Hero;