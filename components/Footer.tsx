import Link from "next/link";
import {
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
  FaGithub,
  FaWhatsapp,
  FaRocket,
  FaPinterest,
  FaTwitch,
  FaYoutube,
} from "react-icons/fa";
import { IoHammer } from "react-icons/io5";
import { AcmeLogo } from "./AcmeLogo.jsx";

const Footer1 = () => {
  return (
    <footer className="flex flex-col min-h-[250px] w-full md:flex-col items-center space-y-10 bg-black px-20 py-10 font-medium text-white">
      <div className="flex w-full flex-col md:flex-row md:justify-between space-y-5 md:space-y-0">
        <figure className="flex flex-col items-center ">
          <AcmeLogo width={200} height={200} />
        </figure>
        <div>
          <h2 className="flex items-center space-x-2 text-2xl">
            <span>The Managers</span>
            
          </h2>
          <div className="mt-8 flex flex-col gap-8 justify-around">
            <span className="flex items-center space-x-4">
              <FaPhoneAlt />
              <span>+5493415366234</span>
            </span>
            <span className="flex items-center space-x-4">
              <FaEnvelope />
              <a
                className="hover:text-blue-400 transition-colors duration-200 font-semibold text-lg"
                href="mailto:contact@themanagers.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                contact@themanagers.com
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="my-4 w-full border-t border-slate-500" />
      <div className="flex flex-col mt-4 w-full xl:flex-row items-center justify-between gap-8">
        <ul className="flex flex-row gap-8">
          <li className="cursor-pointer hover:underline">Servicios</li>
          <li className="hidden md:flex cursor-pointer hover:underline">Testimonios</li>
          <li className="cursor-pointer hover:underline">Portafolio</li>
          <li className="cursor-pointer hover:underline">Contacto</li>
        </ul>
        <span className="flex flex-wrap mt-8 md:mt-0">
  &copy; {new Date().getFullYear()} This website is made with ❤️ by{" "} 
  <Link
    className="hover:text-cyan-400 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-500 animate-gradient-x ml-2"
    href="https://www.devink.dev/"
    target="_blank"
    rel="noopener noreferrer"
  >
    devink.dev
  </Link>
</span>

      </div>
    </footer>
  );
};

export default Footer1;
