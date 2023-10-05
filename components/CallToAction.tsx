import { Card, CardHeader, CardBody, Image, CardFooter, Button } from "@nextui-org/react";

export default function CallToAction() {
  return (
    <div className="relative py-12 md:py-24 text-white w-full h-[1000px]">
      {/* Imagen de fondo */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <Image 
          src="/programing/foto2.avif" 
          alt="Equipo de programadores trabajando juntos" 
          width={1920}
          className="max-h-[1000px] object-cover rounded-none"
        />
      </div>

      {/* Contenido del componente */}
      <div className="relative flex items-center justify-center w-full h-[1000px] -top-24 z-10 bg-black bg-opacity-50">
        <div className="flex flex-col items-center text-center space-y-6">
          <h2 className="text-6xl font-bold">¡Estoy aquí! 🙌</h2>
          <p className="max-w-xl text-2xl font-semibold">
            He aprendido que el crecimiento proviene de la colaboración. Cada línea de código refleja no solo mi esfuerzo sino el apoyo del equipo con el que trabajo. ¿Listo para unirte a esta aventura de código conmigo?
          </p>
          <Button color="success" size="large" className=" px-12 py-6 text-2xl text-white font-bold">
            Contáctame
          </Button>
        </div>
      </div>
    </div>
  );
}
