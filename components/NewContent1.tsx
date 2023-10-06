"use client"
import useObserver from "@/hooks/useObserver"
import { useEffect, useRef, useState } from "react"
import { Card, CardHeader, CardBody, Image, CardFooter } from "@nextui-org/react";
interface NewContent1Props {
    className?: string;  // Puede ser string o undefined
}

const NewContent1 = ({ className } : NewContent1Props) => {
    const elementRef = useRef(null)
    const options = { threshold: 0.5 }
    const { inView }= useObserver(options, elementRef)
    const [isInView, setIsInView] = useState(false)
   
    useEffect(() => {
        if (inView) {
          setIsInView(true)
        }
      }, [inView])
    return (
        <Card 
    ref={elementRef} 
    id='Nosotros'  
    className={`flex flex-col lg:flex-row w-full lg:w-[1300px] min-h-[520px] lg:h-[400px] p-0 bg-white mt-20 rounded-xl shadow-2xl shadow-slate-600 mx-auto overflow-hidden ${className} ${
      isInView ? 'animate-fade-left animate-once animate-duration-500 animate-delay-200 animate-ease-linear' : "opacity-0"
    }`}>
            <CardFooter className='w-full h-[50%] lg:w-[50%] md:h-full flex rounded-b-none-none justify-center p-0 m-0'>
            <Image
                src="/programing/WhatsApp Image 2023-10-04 at 7.37.29 PM.jpeg"
                alt="OrderFusionApp"
            className=' bg-cover object-contain md:rounded-l-none  p-0 m-0 md:h-[900px] z-0' />
            </CardFooter>
            <CardBody className='p-6 w-full lg:w-[50%]'>
            <ul>
    <li className='mb-6'>
        <h4 className='text-xl font-semibold'>Inspiración desde Vercel:</h4>
        <p className='text-lg'>Mi camino en JavaScript ha sido influenciado por grandes referentes como GoncyJS de Vercel. Mantenerme actualizado con las últimas tendencias y aprender de los mejores me ha permitido ofrecer soluciones vanguardistas.</p>
    </li>
    <li className='mb-6'>
        <h4 className='text-xl font-semibold'>Dominio en Tailwind:</h4>
        <p className='text-lg'>Mi formación en TailwindCSS y TailwindAnimated no solo me ha proporcionado las herramientas para crear interfaces visuales impresionantes, sino también experiencias de usuario optimizadas y amigables.</p>
    </li>
    <li className='mb-6'>
        <h4 className='text-xl font-semibold'>A la Vanguardia con NextUI:</h4>
        <p className='text-lg'>Utilizando NextUI, he podido crear aplicaciones web modernas y eficientes, garantizando rendimiento y confiabilidad. La transición al mundo digital conmigo está respaldada por las mejores tecnologías y prácticas.</p>
    </li>
</ul>


            </CardBody>
        </Card>
    )
}

export default NewContent1;

