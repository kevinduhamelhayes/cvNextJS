import { FaBalanceScale } from 'react-icons/fa';

export default function CallToAction() {
  return (
    <div className="relative py-12 md:py-24 bg-blue-500 text-white w-full h-[400px]">
      <img src="/videos/img1.jpg" alt="Fondo de redes sociales" className="absolute top-0 left-0 w-full h-full object-cover opacity-20 z-0" />
      <div className="relative z-10 p-8">
        <div className='flex flex-col items-center justify-center'>
        <h2 className="text-4xl md:text-5xl mb-6">¿Listo para llevar tus redes al siguiente nivel?</h2>
        <p className="text-xl md:text-2xl mb-8">Deja la gestión en nuestras manos y enfócate en crear contenido increíble.</p>
        <button className="transition duration-300 ease-in-out transform hover:scale-105 bg-white text-blue-500 px-8 py-3 rounded-full font-bold shadow-lg hover:bg-blue-900 hover:text-white">
          Comienza Ahora
        </button>
        </div>
      </div>
    </div>
  );
}
