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
            <AccordionTrigger>How does smoking affect health?</AccordionTrigger>
            <AccordionContent >
              <span tabIndex={0}>
                Smoking is harmful to health and can lead to various diseases, including lung cancer and heart disease. It is a major cause of preventable deaths worldwide.
              </span>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Can quitting smoking improve health?</AccordionTrigger>
            <AccordionContent>
              <span tabIndex={0}>
              Absolutely. Quitting smoking has numerous health benefits, such as reducing the risk of diseases, improving lung function, and enhancing overall well-being.
              </span>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Are there resources to help quit smoking?</AccordionTrigger>
            <AccordionContent>
              <span tabIndex={0}>
              Yes. Many resources, including support groups, counseling, and medication, can assist in the quitting process. Consult with healthcare professionals for personalized guidance.
              </span>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
  );
};

export default AccordionCustom;
