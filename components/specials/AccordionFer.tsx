'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import React from 'react';




const AccordionCustom = () => {
  return (
    <Accordion type="single" collapsible className="w-full">
       <AccordionItem value="item-1">
         <AccordionTrigger>Why is social connection crucial for mental health?</AccordionTrigger>
         <AccordionContent >
           <span tabIndex={0}>
           Social connection is vital for mental health as it fulfills fundamental human needs for belonging, support, and understanding.<br /> It contributes to emotional well-being and provides a buffer against loneliness and depression.
                    </span>
         </AccordionContent>
       </AccordionItem>
       <AccordionItem value="item-2">
         <AccordionTrigger>How can cognitive biases related to solitude be addressed?</AccordionTrigger>
         <AccordionContent>
           <span tabIndex={0}>
           Cognitive biases related to solitude can be addressed through awareness and cognitive skill development.<br /> Recognizing negative thinking patterns and consciously reframing thoughts can help mitigate their impact.
           </span>
         </AccordionContent>
       </AccordionItem>
       <AccordionItem value="item-3">
         <AccordionTrigger>How can technology be used positively to combat loneliness?</AccordionTrigger>
         <AccordionContent>
           <span tabIndex={0}>
           Technology can be used positively by intentionally engaging in meaningful interactions on social media, organizing virtual meetups, and fostering authentic connections.<br /> It becomes a tool for maintaining social ties rather than a source of isolation.
           </span>
         </AccordionContent>
       </AccordionItem>
     </Accordion>
  );
};

export default AccordionCustom;
