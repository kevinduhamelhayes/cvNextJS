import useObserver from "@/hooks/useObserver";
import { useRef } from "react";
import Image from 'next/image';
import { Accordion, AccordionItem, Card } from "@nextui-org/react";

const ProfileContent = () => {
    const elementRef = useRef(null)
    const { inView } = useObserver({ threshold: 0.7 }, elementRef)
    return (
        <Card ref={elementRef} className='flex flex-col w-[1300px] max-w-full min-h-[75%] max-h-100vh overflow-y-auto bg-white mt-20'>
            <div className='flex flex-row w-full'>
                <div className='w-full md:w-[50%] p-6'>
                    <ul>
                        <li className='mb-6'>
                            <h3 className='text-2xl font-semibold'>About Me</h3>
                            <p className='text-lg'>[Breve descripción sobre ti, tu experiencia, tus objetivos de carrera y tus habilidades principales.]</p>
                        </li>
                        <li className='mb-6'>
                            <h3 className='text-2xl font-semibold'>Education</h3>
                            <p className='text-lg'>[Detalles sobre tu educación, universidades, especializaciones, etc.]</p>
                        </li>
                        <li className='mb-6'>
                            <h3 className='text-2xl font-semibold'>Experience</h3>
                            <p className='text-lg'>[Resumen de tu experiencia laboral, logros principales y proyectos en los que has trabajado.]</p>
                        </li>
                        <li className='mb-6'>
                            <h3 className='text-2xl font-semibold'>Skills</h3>
                            <p className='text-lg'>[Lista de habilidades técnicas y blandas.]</p>
                        </li>
                    </ul>

                    <button className='px-6 py-2 mt-4 bg-blue-400 text-white font-semibold rounded-xl hover:bg-blue-600 mb-4'>Download CV</button>

                    <Accordion className='w-full'>
                        <AccordionItem key="1" title={<span className='text-xl font-bold'>Projects</span>}>
                            <div className='text-lg'>[Descripción de proyectos importantes en los que has trabajado, resultados y tecnologías utilizadas.]</div>
                        </AccordionItem>
                        <AccordionItem key="2" title={<span className='text-xl font-bold'>Awards & Recognition</span>}>
                            <div className='text-lg'>[Cualquier premio o reconocimiento que hayas recibido a lo largo de tu carrera.]</div>
                        </AccordionItem>
                        <AccordionItem key="3" title={<span className='text-xl font-bold'>Languages</span>}>
                            <div className='text-lg'>[Idiomas que hablas y tu nivel de competencia en cada uno.]</div>
                        </AccordionItem>
                    </Accordion>
                </div>

                <figure className='w-[50%] mb-10 hidden md:flex flex-row justify-end items-end'>
                    <Image src="/your-image.jpg" alt='Your Name' width={700} height={600} className='rounded-lg flex flex-row items-end justify-end' />
                </figure>
            </div>
        </Card>
    )
}

export default ProfileContent;
