import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import FAQs from './constants/FaqConstants'

const Body = () => {
    return (
        <section className="w-full flex flex-col items-center  text-white py-8">
            <h3 className="text-3xl mt-14 font-bold">
                Preguntas Frecuentes
            </h3>
            <Accordion variant="shadow" className="border-slate-200 shadow-2xl  bg-slate-400 max-w-[1100px] mt-12 text-black rounded-lg">
                {FAQs.map((faq) => (
                    <AccordionItem key={faq.id} aria-label={faq.title} title={faq.title} className="text-black ">
                        {faq.content}
                    </AccordionItem>
                ))}
            </Accordion>
        </section>
    );
}

export default Body;
