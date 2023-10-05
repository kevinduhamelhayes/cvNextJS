"use client"
import useObserver from "@/hooks/useObserver"
import { useEffect, useState } from "react"
import { Card, CardHeader, CardBody, Image, CardFooter, Button } from "@nextui-org/react";
interface NewContent3Props {
    className?: string;  // Puede ser string o undefined
}

const NewContent3: React.FC<NewContent3Props> = ({ className }) => {
    const [ref, inView] = useObserver({ threshold: 0.7 })
    const [isInView, setIsInView] = useState(false)
    
    useEffect(() => {
        if (inView) {
          setIsInView(true)
        }
    }, [inView]);

    return (
        <Card ref={ref} className={`flex flex-col-reverse p-0 lg:flex-row w-full lg:w-[1300px] min-h-[488px] lg:h-[400px] bg-white mt-20 rounded-xl shadow-2xl shadow-slate-600 mx-auto overflow-hidden ${className} ${ isInView ? ' animate-fade-right animate-once animate-duration-500 animate-delay-200 animate-ease-linear ' : 'opacity-0' }`}>
            <CardBody className='p-6 w-full lg:w-[50%]'>
            <ul>
    <li className='mb-6'>
        <h4 className='text-xl font-semibold'>Experiencia Individual o en Equipo</h4>
        <p className='text-lg'>Tienes la flexibilidad de contar con mis servicios en solitario, respaldado por años de experiencia y formación continua. Pero si lo necesitas, mi equipo está listo para sumarse y aportar su expertise.</p>
    </li>
    <li className='mb-6'>
        <h4 className='text-xl font-semibold'>Desarrollo Móvil a tu Alcance</h4>
        <p className='text-lg'>Si buscas soluciones móviles, puedo conectar con expertos en React Native para crear aplicaciones iOS y Android de alto rendimiento. Tu visión, transformada en una app que tus usuarios amarán.</p>
    </li>
    <li className='mb-6'>
        <h4 className='text-xl font-semibold'>Trayectoria en Software Factory</h4>
        <p className='text-lg'>Mi paso por la software factory Devink me dotó de habilidades y experiencias invaluables. Sé cómo trabajar en equipos multidisciplinarios y llevar proyectos de software al éxito.</p>
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
