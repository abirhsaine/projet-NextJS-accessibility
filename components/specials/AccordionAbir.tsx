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
      <AccordionTrigger>How important is reputation in the pursuit of power and success?</AccordionTrigger>
      <AccordionContent >
        <span tabIndex={0}>
        Reputation is crucial, serving as the cornerstone of power.<br /> It influences how others perceive and interact with an individual, playing a vital role in professional success and societal positioning.              </span>
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger>How can one navigate the paradox of power in the modern world?</AccordionTrigger>
      <AccordionContent>
        <span tabIndex={0}>
        Emotional intelligence is key.<br /> By mastering emotional responses and transforming adversaries into allies, individuals can balance primal power instincts with the contemporary pursuit of justice and equality.              </span>
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-3">
      <AccordionTrigger> What role does strategic communication play in achieving power?</AccordionTrigger>
      <AccordionContent>
        <span tabIndex={0}>
        Strategic communication, as exemplified by historical declarations and tactics, is instrumental in maintaining authority and influencing others.<br /> It is a powerful tool for achieving and sustaining power.              </span>
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-4">
      <AccordionTrigger>Why is strategic networking essential for professional success?</AccordionTrigger>
      <AccordionContent>
        <span tabIndex={0}>
        Strategic networking, as highlighted in &quot;Never Eat Alone,&quot; is crucial for personal and professional growth.<br /> It involves fostering meaningful connections, transforming contacts into allies, and building a network that proves invaluable when opportunities arise.
        </span>
        </AccordionContent>
    </AccordionItem>
  </Accordion>
  );
};

export default AccordionCustom;
