import React from 'react';
import { Card, CardHeader, CardBody, Image, CardFooter } from "@nextui-org/react";
import { Button } from "@nextui-org/react";

const NewContent3 = () => {
    return (
        <Card className='flex flex-col-reverse p-0 lg:flex-row w-full lg:w-[1300px] min-h-[488px] lg:h-[400px] bg-white mt-20 rounded-xl shadow-2xl shadow-slate-600 mx-auto overflow-hidden animate-rotate-y animate-once animate-duration-500 animate-delay-200 animate-ease-in-out'>
            <CardBody className='p-6 w-full lg:w-[50%]'>
            <ul>
    <li className='mb-6'>
        <h4 className='text-xl font-semibold'>Ahorra dinero y tiempo</h4>
        <p className='text-lg'>Con nuestra solución, puedes reducir costos y optimizar procesos. Menos tiempo gestionando comandas significa más tiempo para enfocarte en lo que mejor sabes hacer: cocinar.</p>
    </li>
    <li className='mb-6'>
        <h4 className='text-xl font-semibold'>Gestión automatizada de comandas</h4>
        <p className='text-lg'>Deja que nuestra plataforma maneje las comandas por ti. Con un sistema digital, los errores se reducen y la eficiencia aumenta.</p>
    </li>
    <li className='mb-6'>
        <h4 className='text-xl font-semibold'>Menos personal, más eficiencia</h4>
        <p className='text-lg'>Nuestro sistema puede reducir la necesidad de tantos mozos, permitiéndote operar de manera más ágil y ahorrar en costos laborales. Tus clientes disfrutarán de un servicio más rápido y tú de un negocio más rentable.</p>
    </li>
</ul>

            </CardBody>
            <CardFooter className='w-full p-0 m-0 lg:w-[50%] rounded-l-none relative h-full'>
                <Image src="/programing/WhatsApp Image 2023-09-22 at 4.33.21 PM.jpeg"  alt='depto1' className='bg-cover rounded-l-none object-contain w-full h-[860px] m-0 p-0  ' />
            </CardFooter>
        </Card>
    )
}

export default NewContent3;
