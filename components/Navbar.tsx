import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import {AcmeLogo} from "./AcmeLogo.jsx";
import {SearchIcon} from "./SearchIcon.jsx";

const Component = () => {

  return (
    <Navbar className="bg-black min-h-[110px] text-white shadow-md" position="static">
      <NavbarBrand className="hidden md:flex">
        <AcmeLogo />
        <p className="font-bold text-2xl text-inherit ml-4">TheManagers.com</p>
      </NavbarBrand>
      <NavbarContent className=" gap-6 ml-12  hidden " justify="center"> {/* md:hidden esconde el contenido en pantallas medianas y más pequeñas */}
        <NavbarItem>
          <Link color="foreground" href="#servicios" className="text-xl font-semibold text-white hover:text-gray-400 transition-colors duration-300">
            Servicios
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#"  className="text-lg text-white hover:text-gray-400 transition-colors duration-300">
            Preguntas Frecuentes
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#" className="text-lg text-white hover:text-gray-400 transition-colors duration-300">
            Regularizaciones
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as="a" color="primary" className="text-xl py-6 px-8 font-semibold border-white border-2 bg-black text-white hover:bg-gray-600 transition-colors duration-300" href="https://api.whatsapp.com/send/?phone=%2B543415883040" variant="light">
            Nuestros Servicios
          </Button>
   </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
export default Component;



