"use client"
import useObserver from "@/hooks/useObserver"
import { useEffect, useRef, useState } from "react"
import { Card, CardHeader, CardBody, Image, CardFooter } from "@nextui-org/react";
interface MainProps {
    className?: string;  // Puede ser string o undefined
}

const Main = ({ className }: MainProps) => {
     const elementRef = useRef(null)
     const options = { threshold: 0.5 }
    const { inView }= useObserver( options, elementRef)
    const [isInView, setIsInView] = useState(false)
 
    useEffect(() => {
        if (inView) {
          setIsInView(true)
        }
      }, [inView])
 
   return (
        <Card ref={elementRef} className={`flex flex-col lg:flex-row w-full lg:w-[1300px] min-h-[500px] md:max-h-[1050px] overflow-hidden lg:h-[420px] bg-white mt-20 mb-20 rounded-xl  mx-auto ${className} ${ isInView ? ' shadow-2xl shadow-slate-600 ' : 'opacity-0' }`}>
            <CardBody className='p-6 w-full lg:w-[70%]'>
            <ul>
    <li className='mb-6'>
        <h4 className='text-xl font-semibold'>Mover las Manitas, Más Que un Lema</h4>
        <p className='text-lg'>
  Inspirado por referentes como Midudev, adopté el lema &quot;mover las manitas&quot; como filosofía propia. En cada línea de código, busco la mejora continua con pasión por crear soluciones innovadoras y efectivas.
</p>

    </li>
    <li className='mb-6'>
        <h4 className='text-xl font-semibold'>Aprendizaje Constante</h4>
        <p className='text-lg'>El mundo del desarrollo web es vasto y en constante evolución. Asumo cada proyecto como una oportunidad de aprendizaje, manteniéndome siempre actualizado y listo para los nuevos desafíos.</p>
    </li>
    <li className='mb-6'>
        <h4 className='text-xl font-semibold'>Inspiración Compartida</h4>
        <p className='text-lg'>Tener la oportunidad de aprender de grandes figuras de la comunidad JS, me ha enseñado el valor de compartir conocimientos. Aspiro a inspirar a otros desarrolladores así como él me inspiró a mí.</p>
    </li>
</ul>


            </CardBody>
            <CardFooter className='w-full p-0 max-h-[500px] rounded-l-none object-contain lg:w-[30%] relative '>
                <Image src="/programing/WhatsApp Image 2023-10-04 at 7.37.29 PM (1).jpeg" alt='depto1' className=' object-cover rounded-l-none  ' />
            </CardFooter>
        </Card>
    )
}

export default Main;