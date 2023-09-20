import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Button } from "@nextui-org/react";

function CardHabilitaciones() {
    return (
        <Card className="max-w-[500px] w-[500] h-[350px] shadow-xl shadow-slate-700 md:max-w-[370px] md:h-[470px] bg-slate-700 mt-4 text-white  transform transition-transform duration-300 ease-in-out hover:scale-105">
            <CardHeader className="flex-col gap-3 bg-black">
                <div className="flex flex-col self-start">
                    <p className="text-2xl font-bold">Habilitaciones comerciales</p>
                    <p className="text-sm text-white">Gestión online y asesoramiento</p>
                </div>
            </CardHeader>

            <Divider className="bg-white" />

            <CardBody className=" scrollbar-hide">
                <ul className="px-1 space-y-2 text-lg">
                    <li>Trámites de habilitación y renovación</li>
                    <li>Asesoramiento personalizado para tu negocio</li>
                    <li>Soporte técnico rápido y eficiente</li>
                    <li>Integración con sistemas municipales </li>
                    <li>Consultoría en normativas y regulaciones</li>
                    <li>Inspecciones y certificaciones Electricas </li>
                </ul>
            </CardBody>


        </Card>
    );
}

export default CardHabilitaciones;