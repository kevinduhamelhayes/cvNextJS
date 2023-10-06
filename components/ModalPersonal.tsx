import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";

export default function App() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button color="success" variant="ghost" className="text-xl px-16 py-8 " onPress={onOpen}>My Data</Button>
      <Modal 
        backdrop="opaque" 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        motionProps={{
          variants: {
            enter: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.3,
                ease: "easeOut",
              },
            },
            exit: {
              y: -20,
              opacity: 0,
              transition: {
                duration: 0.2,
                ease: "easeIn",
              },
            },
          }
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col items-center justify-center bg-black text-white gap-1 p-4 shadow-md">
                My Personal Info
              </ModalHeader>
              <ModalBody className="flex flex-col items-center space-y-6 bg-gray-200 p-8 rounded-lg">
                <h1 className="text-3xl font-bold mb-4">Mi Perfil</h1>
                <p className="text-lg">
                    Vivo en Rosario, Santa Fe, Argentina. Proveniente de una familia pequeña, soy el mayor de dos hermanos.
                </p>
                <p className="text-lg">
                    Mi hermano también es programador y excepcionalmente talentoso en lo que hace.
                </p>
                <p className="text-lg">
                    Nací el 07/11/1992. A lo largo de los años, trabajé y cursé diferentes áreas antes de descubrir mi verdadera vocación: las computadoras y la UI/UX.
                </p>
                <div className="border-t border-b border-gray-300 py-2 w-full flex justify-center mt-4">
                    <a href="https://www.linkedin.com/in/kevin-duhamel-hayes" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        Para más detalles y fechas exactas, visita mi perfil en LinkedIn.
                    </a>
                </div>
              </ModalBody>
              <ModalFooter className="flex justify-end space-x-4">
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
