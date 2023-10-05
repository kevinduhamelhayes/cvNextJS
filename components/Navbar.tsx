"use client";
import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";


const Component = () => {

  return (
    <Navbar className="bg-black min-h-[110px] text-white shadow-md" position="static">
      <NavbarBrand className="hidden md:flex">
      <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-yellow-500 gradient-animated">Kevin Duhamel</span>
      </NavbarBrand>
      <NavbarContent className=" gap-6 ml-12 hidden " justify="center"> {/* md:hidden esconde el contenido en pantallas medianas y más pequeñas */}
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
        </NavbarItem>
        <NavbarItem>
          <Button as="a" color="success" className="text-xl py-6 px-8 font-semibold  transition-colors duration-300" href="https://api.whatsapp.com/send/?phone=%2B543415883040" variant="light">
            Contactate conmigo
          </Button>
   </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
export default Component;



