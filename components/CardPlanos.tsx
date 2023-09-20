import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Button } from "@nextui-org/react";

function CardPlanos() {
    return (
        <Card className="max-w-[500px] h-[350px] shadow-xl shadow-slate-700 md:max-w-[370px] md:h-[470px] bg-green-700 mt-4 text-white  transform transition-transform duration-300 ease-in-out hover:scale-105">
            <CardHeader className="relative flex-col gap-3 bg-green-950">
                <div className="flex flex-col self-start">
                    <p className="text-2xl font-bold">Planos, finales de Obra</p>
                    <p className="text-sm ">Regularizaciones</p>
                </div>
            </CardHeader>

            <Divider className="bg-white" />

            <CardBody className="scrollbar-hide">
                <ul className="px-1 space-y-2 text-lg">
                    <li>Elaboración y revisión de planos</li>
                    <li>Planos de obra nueva y PROCREAR</li>
                    <li>Trámites para finales de obra</li>
                    <li>Regularización de construcciones existentes</li>
                    <li>Consultoría en normativas de construcción</li>
                    <li>Asesoramiento en permisos y licencias</li>
                    <li>Inspecciones y certificaciones de obra</li>
                </ul>
            </CardBody>
        </Card>
    );
}

export default CardPlanos;

