import { FaTwitter, FaInstagram } from 'react-icons/fa';
import { SiOnlyfans } from 'react-icons/si';

export default function Services() {
  return (
    <div className="py-12 bg-white text-black w-full mx-10">
      <div className='pb-8'>
        <h2 className="text-4xl font-bold text-center">Redes Sociales que Gestionamos</h2>
      </div>
      <div className="flex flex-col md:flex-row justify-evenly m-8">
        <div className="flex flex-col items-center mb-6 md:mb-0">
        <img src="/svgs/twitter.svg" alt="Cafesito" className="w-56 h-24 hover:scale-110 transition-transform duration-300 pb-4" />
          <p className="text-lg font-semibold hidden">Twitter</p>
        </div>
        <div className="flex flex-col items-center mb-6 md:mb-0">
        <img src="/svgs/instagram1.svg" alt="Instagram" className="w-56 h-24 hover:scale-110 transition-transform duration-300 pb-4" />
          <p className="text-lg font-semibold hidden">Instagram</p>
        </div>
        <div className="flex flex-col items-center">
        <img src="/svgs/onlyfans-1.svg" alt="Onlyfans" className="w-56 h-24 hover:scale-110 transition-transform duration-300 pb-4" />
          <p className="text-lg font-semibold hidden">Only Fans</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="/svgs/cafesito1.svg" alt="Cafesito" className="w-56 h-24 hover:scale-110 transition-transform duration-300 pb-4" />
          <p className="text-lg font-semibold hidden"> Cafesito</p>
        </div>
        <div className="flex flex-col items-center">
        <img src="/svgs/pornhub.svg" alt="Cafesito" className="w-56 h-24 hover:scale-110 transition-transform duration-300 pb-4" />
          <p className="text-lg font-semibold hidden">Porn hub</p>
        </div>
      </div>
    </div>
  );
}

