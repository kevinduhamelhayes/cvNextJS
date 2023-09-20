import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Button } from "@nextui-org/react";

function CardDireccion() {
    return (
<Card className="max-w-[500px] shadow-xl shadow-slate-700 h-[400px] md:max-w-[370px] md:h-[470px] bg-red-800 mt-4 text-white transform transition-transform duration-300 ease-in-out hover:scale-105">
    <CardHeader className="relative flex-col gap-3 bg-red-950">
        <div className="flex flex-col self-start">
            <p className="text-2xl font-bold">Dirección de Obra</p>
            <p className="text-sm ">Gestión y supervisión de proyectos constructivos</p>
        </div>
    </CardHeader>

    <Divider className="bg-white" />

    <CardBody className=" scrollbar-hide">
        <ul className="px-1 space-y-2 text-lg">
        <li>Supervisión rigurosa en cada etapa.</li>
<li>Gestión eficiente de equipos profesionales.</li>
<li>Cumplimiento estricto de normativas y calidad.</li>
<li>Desarrollo ágil y dentro del presupuesto.</li>
<li>Reportes detallados del progreso.</li>
<li>Solución rápida a desafíos técnicos.</li>
<li>Prioridad en la seguridad del personal.</li>


        </ul>
    </CardBody>
</Card>
    );
}
export default CardDireccion;