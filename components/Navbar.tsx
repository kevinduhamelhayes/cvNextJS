"use client";
import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";


const Component = () => {

  return (
    <Navbar className="bg-black min-h-[90px] text-white shadow-md" position="static">
      <NavbarBrand className="hidden sm:flex">
      <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-yellow-500 gradient-animated">Hello Word</span>
      </NavbarBrand>
      <NavbarContent className=" gap-12 ml-12  hidden md:flex "> 
        <NavbarItem>
          <Link href="#stack" className="text-xl font-semibold text-white hover:text-gray-400 transition-colors duration-300">
            Stack
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#referentes"  className="text-lg text-white font-semibold hover:text-gray-400 transition-colors duration-300">
            Referentes
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link  href="#team" className="text-lg text-white font-semibold hover:text-gray-400 transition-colors duration-300">
            My Team
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
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



