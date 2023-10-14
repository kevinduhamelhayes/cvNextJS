import useObserver from "@/hooks/useObserver";
import { useEffect, useRef, useState } from "react";
import { Card, CardHeader, CardBody, Image, CardFooter,Switch, cn } from "@nextui-org/react";

interface MainProps {
    className?: string;
}

const Main = ({ className }: MainProps) => {
    const elementRef = useRef(null);
    const options = { threshold: 0.5 };
    const { inView } = useObserver(options, elementRef);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        if (inView) {
            setIsInView(true);
        }
    }, [inView]);

    return (
        <Card ref={elementRef} className={`flex flex-col lg:flex-row w-full lg:w-[90%] min-h-[500px] md:max-h-[1050px] overflow-hidden lg:h-[900px] bg-white mt-20 mb-20 rounded-xl mx-auto ${className} ${isInView ? 'shadow-2xl shadow-slate-600' : 'opacity-0'}`}>
            <CardBody className='p-6 pt-2 w-full lg:w-[70%]'>
                <div className='my-4'>
                    
                    <p className='italic'>&quot;Antes que nada, quiero agradecerte por ver mi perfil en línea. He creado no menos de 12 en distintas tecnologías y lenguajes de programación, pero desde noviembre de 2023, este es el más reciente.&quot;</p>
                    <p className='italic mt-4'>Si eres <strong>un recruiter</strong>, notarás que no califico mis tecnologías porque creo que no es buena práctica ponerse estrellas a uno mismo. Pero si quieres saber más de mí, puedes ver mi LinkedIn o mi GitHub; ambos están en el footer de esta página y son activos.</p>
                    <p className='italic mt-4'>
                    Tambien veras que tengo un stack principal MEARN y MERN pero incluyo un stack secundario de lenguajes y tecnologias que no uso a diario pero que se usar y que me gustan mucho (perdon a veces el exceso de euforia todo me parece fasinante en este mundo de ceros y unos).
                </p>
                <p className='italic mt-4'>Personalmente como a todos nos agusta lo conocido de nuestro stack principal pero tambien estoy abierto a desafios en nuevas tecnologias y lenguajes asi que estoy a disposicion, tengo voluntad y soy muy proactivo manejo minimamente desde COBOL a RUST.... incluyendo Python y sus frameworks, manejo pip, cargo, npx, pnpm, npm, yarn. Con algo de voluntad debo admitir aprendi docker y kubernetes </p>
                <p className='italic mt-4'>Completando con despliegues en Vercel, AWS, Cloud y Azure</p>
                <p className="mt-4">
                <strong >Diariamente sigo practicando y seguire para ser mejor en todo lo que pueda o en lo que mi trabajo me demande</strong>
                </p>
                </div>
                <div className="grid grid-cols-2 gap-x-4 gap-y-8 mt-8">
                    <div>
                        <h4 className='text-xl font-semibold'>Lugar de nacimiento:</h4>
                        <p>Rosario, Santa Fe, Argentina</p>
                    </div>
                    <div>
                        <h4 className='text-xl font-semibold'>Idiomas:</h4>
                        <p>Español, Inglés</p>
                    </div>
                    <div>
                        <h4 className='text-xl font-semibold'>Fecha de nacimiento:</h4>
                        <p>07/11/1992</p>
                    </div>
                    
                    <div>
                        <h4 className='text-xl font-semibold'>Experiencia:</h4>
                        <p>Mas de un año aprendiendo, casi un año en entornos profecionales git en racha de mas de 6 meses!</p>
                    </div>
                    


    <Switch isSelected isReadOnly
      classNames={{ 
        base: cn(
          "inline-flex flex-row-reverse w-full max-w-md bg-content1 hover:bg-content2 items-center",
          "justify-between cursor-pointer rounded-lg gap-2 p-4 border-2 border-transparent",
          "data-[selected=true]:border-primary",
        ),
        wrapper: "p-0 h-4 overflow-visible",
        thumb: cn("w-6 h-6 border-2 shadow-lg",
          "group-data-[hover=true]:border-primary",
          //selected
          "group-data-[selected=true]:ml-6",
          // pressed
          "group-data-[pressed=true]:w-7",
          "group-data-[selected]:group-data-[pressed]:ml-4",
        ),
      }}
    >
      <div className="flex flex-col gap-1">
        <p className="text-medium">Disponibilidad horaria Full Time</p>
      </div>
    </Switch>
    <Switch isSelected isReadOnly
    color="success"
      classNames={{ 
        base: cn(
          "inline-flex flex-row-reverse w-full max-w-md bg-content1 hover:bg-content2 items-center",
          "justify-between cursor-pointer rounded-lg gap-2 p-4 border-2 border-transparent",
          "data-[selected=true]:border-success",
        ),
        wrapper: "p-0 h-4 overflow-visible",
        thumb: cn("w-6 h-6 border-2 shadow-lg",
          "group-data-[hover=true]:border-success",
          //selected
          "group-data-[selected=true]:ml-6",
          // pressed
          "group-data-[pressed=true]:w-7",
          "group-data-[selected]:group-data-[pressed]:ml-4",
        ),
      }}
    >
      <div className="flex flex-col gap-1">
        <p className="text-medium">Disponibilidad para reubicacion</p>
      </div>
    </Switch>
    <Switch isSelected isReadOnly
      classNames={{ 
        base: cn(
          "inline-flex flex-row-reverse w-full max-w-md bg-content1 hover:bg-content2 items-center",
          "justify-between cursor-pointer rounded-lg gap-2 p-4 border-2 border-transparent",
          "data-[selected=true]:border-primary",
        ),
        wrapper: "p-0 h-4 overflow-visible",
        thumb: cn("w-6 h-6 border-2 shadow-lg",
          "group-data-[hover=true]:border-primary",
          //selected
          "group-data-[selected=true]:ml-6",
          // pressed
          "group-data-[pressed=true]:w-7",
          "group-data-[selected]:group-data-[pressed]:ml-4",
        ),
      }}
    >
      <div className="flex flex-col gap-1">
        <p className="text-medium">Disponibilidad para trabajo remoto</p>
      </div>
    </Switch>
    <Switch isSelected isReadOnly
      classNames={{ 
        base: cn(
          "inline-flex flex-row-reverse w-full max-w-md bg-content1 hover:bg-content2 items-center",
          "justify-between cursor-pointer rounded-lg gap-2 p-4 border-2 border-transparent",
          "data-[selected=true]:border-primary",
        ),
        wrapper: "p-0 h-4 overflow-visible",
        thumb: cn("w-6 h-6 border-2 shadow-lg",
          "group-data-[hover=true]:border-primary",
          //selected
          "group-data-[selected=true]:ml-6",
          // pressed
          "group-data-[pressed=true]:w-7",
          "group-data-[selected]:group-data-[pressed]:ml-4",
        ),
      }}
    >
      <div className="flex flex-col gap-1">
        <p className="text-medium">Disponibilidad Freelance</p>
      </div>
    </Switch>


                </div>
            </CardBody>
            <CardFooter className='w-full p-0 m-0 max-h-[900px] rounded-l-none  lg:w-[30%] min-h-[300px] object-cover'>
                <Image src="/programing/IMG_20230812_171058.jpg" alt='depto1' className='p-0 m-0 h-full min-h-[900px] object-cover rounded-l-none' />
            </CardFooter>
        </Card>
    );
};

export default Main;
