import { FaUsers } from 'react-icons/fa';
import { Card, CardHeader, CardBody, Image, CardFooter } from "@nextui-org/react";

export default function Transparency() {
  return (
    <div className="relative py-0 max-h-[900px] md:py-24 text-white w-full md:max-h-[1100px] xl:h-[1300px] xl:max-h-[1300px]">
      {/* Imagen de fondo */}
      <div className="absolute top-0 left-0 w-full md:h-full z-0">
        <Image 
          src="/programing/WhatsApp Image 2023-09-28 at 6.27.13 PM.jpeg" 
          alt="Equipo de programadores trabajando juntos" 
          width={1920}
          className="max-h-[1400px] min-h-[800px] object-cover"
        />
      </div>

      {/* Contenido del componente */}
      <div className="relative flex items-center justify-center w-full min-h-[1000px]  md:min-h-[1100px] xl:h-[1300px] -top-24 z-10 bg-black bg-opacity-50">
        <div className="flex flex-col items-center pt-20 text-center space-y-0 md:space-y-6">
          <h2 className="text-xl md:text-5xl font-bold">El Poder del Trabajo en Equipo</h2>
          <FaUsers size={70} className="hover:text-gray-400 transition-colors duration-300" />
          <div className="m-4 flex flex-col items-center">
    <p className="max-w-xl md:text-2xl font-semibold mb-4">
        A lo largo de mi formación, he aprendido que el verdadero crecimiento viene de la colaboración y el trabajo en equipo.
    </p>
    <p className="max-w-xl md:text-2xl font-semibold mb-4 hidden md:flex">
        Cada línea de código y cada desafío superado no son solo el reflejo de mi esfuerzo, sino también de la dedicación y apoyo inquebrantable del equipo que me acompaña.
    </p>
    <p className="max-w-xl md:text-2xl font-semibold mb-4 hidden md:flex">
        Juntos, transformamos ideas en realidad y enfrentamos los retos que la programación nos presenta día a día.
    </p>
    <p className="max-w-xl md:text-2xl font-semibold">
        Estoy profundamente agradecido por tener un equipo tan talentoso que me ayudó a formarme.
    </p>
</div>

        </div>
      </div>
    </div>
  );
}

