import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Button } from "@nextui-org/react";


function CardTecnicos() {
    return (
      <Card className="max-w-[420px] h-[400px] shadow-xl shadow-slate-700 md:max-w-[370px] md:h-[470px] bg-orange-700 mt-4 text-white  transform transition-transform duration-300 ease-in-out hover:scale-105">
            <CardHeader className="relative flex-col gap-3 bg-orange-950">
                <div className="flex flex-col self-start">
                    <p className="text-2xl font-bold">Técnicos Matriculados</p>
                    <p className="text-sm ">Trabajos especiales</p>
                </div>
            </CardHeader>

            <Divider className="bg-white" />

            <CardBody className=" scrollbar-hide">
                <ul className="px-1 space-y-2 text-lg">
                    <li>Asesoramiento técnico especializado</li>
                    <li>Elaboración de informes técnicos</li>
                    <li>Inspecciones técnicas y certificaciones</li>
                    <li>Consultoría Electrica, hidraulica neumatica y de gas</li>
                    <li>Trabajos de medición y cálculos </li>
                    <li>Regularizaciones y trámites ante entidades Litoral Gas, Epe</li>
                    <li>Asesoria en instalaciones de deteccion de incendio</li>
                </ul>
            </CardBody>
        </Card>
    );
}

export default CardTecnicos;




