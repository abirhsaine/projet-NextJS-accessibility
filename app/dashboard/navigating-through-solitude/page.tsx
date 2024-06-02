import  {DataTableDemo} from '@/components/specials/TableDataSet';

import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { Metadata } from "next";
import AccordionCustom from '@/components/specials/AccordionFer';


export const metadata: Metadata = {
  title: {
    default: "Quick Tips to remedy solitude",
    template: `%s - steel`,
  },
  description: "Solitude can have a big impact on our lifestyle",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}
const ArticlePage = () => {
  return (
    <article className="container">

      <section className="flex flex-col items-center py-20 sm:flex-row-reverse ">
        <Image
          width={500}
          height={500}
          alt="A path leading through a metaphorical journey of loneliness to social connection."
          className="mb-8 w-full rounded-lg sm:mb-0 sm:ml-4 sm:w-1/2 dark:contrast-200"
          src="/path-leading.jpeg"
          tabIndex={0}
        />

        <div className="mr-4 w-full text-center sm:w-1/2 sm:text-left">
          <h1 tabIndex={0} className="dark:text-dark-50 mb-4 text-3xl font-bold leading-tight md:text-4xl">
          Navigating Through Solitude: <br/>An Exploration of Social Psychology to Prevent Depression
          </h1>
          <p id="programDescription" className="mb-8 text-lg leading-relaxed text-slate-700 dark:text-slate-400" tabIndex={0} >
          Loneliness, a complex emotional state, can sometimes evolve into debilitating depression. <br/>
          This exploration delves into the psychological and social aspects of loneliness, seeking to understand how individuals can avoid the trap of depression by cultivating meaningful
          social relationships.<br /> Through the examination of theories, relevant experiences, and practical advice, we will explore strategies to strengthen social bonds and promote
          positive mental health.
          </p>
          <Link
            className=" inline-block rounded-lg border-0 bg-pink-700 px-12 py-2 text-base text-white transition hover:bg-pink-800"
            href="/login"
            title="Reach out for more details"
          >
            Reach Out
          </Link>
        </div>
      </section>
      <section className="container mx-auto flex flex-col items-center gap-10  sm:flex-row-reverse sm:px-0">

        <div className="mr-4 flex h-full w-full flex-col text-center sm:w-1/2 sm:text-left">
          <h2 tabIndex={0} className="dark:text-dark-50 mb-4 text-3xl font-bold leading-tight md:text-4xl">
          Theoretical Foundations:          </h2>
          <p className="mb-8 text-left text-lg text-muted-foreground" tabIndex={0}>
          John Bowlby&apos;s Attachment Theory provides essential insights into how emotional bonds shape our mental well-being.<br /> Understanding how individuals build and maintain relationships can provide keys to preventing excessive loneliness.
                      </p>
        </div>
        <Image
          width={500}
          height={500}
          alt="Diagram illustrating the attachment theory and its impact on mental well-being."
          className="mb-8 h-full w-full rounded-lg object-cover sm:mb-0 sm:ml-4 sm:w-1/2 dark:contrast-200"
          src="/impact-mental.jpeg"
          tabIndex={0}
        />
        </section>
      <section className="container grid items-center gap-6 pt-6 md:py-10">
        <div className="flex flex-col items-start gap-2">
          <h2  id="cTitle" className="mb-4 text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl" tabIndex={0}>Impactful Experiences :</h2>
          <p className="text-lg text-muted-foreground" tabIndex={0}>
          The experience of social isolation in primates and studies on the effects of prolonged loneliness in humans emphasize the profound impact of social deprivation on mental well-being.<br /> These research findings highlight the crucial importance of social connection for our psychological health.

      </p>
          <ol className="list-disc" aria-describedby="cTitle">
            <li tabIndex={0}>Provides insights into how emotional bonds shape mental well-being.</li>
            <li tabIndex={0}>Explains the attraction to individuals similar to ourselves.</li>
            <li tabIndex={0}>The Strategic Art of Communication</li>
            <li tabIndex={0}>Fosters the creation of meaningful bonds during periods of solitude.</li>
         </ol>

          <Image
            width={500}
            height={340}
            alt="Visual representation of the impact of social isolation on mental well-being."
            className=" h-64 w-full rounded-lg object-cover dark:contrast-200"
            src="/well-being.jpeg"
            tabIndex={0}
          />

        </div>
      </section>





      <section className="container grid items-center gap-6 pb-8  md:py-10">
        <h2 className="mb-4 text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl" tabIndex={0}>FAQ</h2>
        <AccordionCustom />
      </section>

      <section>
        <DataTableDemo />
      </section>


      <section className='mb-7 flex flex-1'>
      <Link
        className="m-auto my-2 inline-block rounded-lg border-0 bg-pink-700 px-12 py-2 text-center text-base text-white transition hover:bg-pink-800"
        href="/essai-ferhat.pdf" target="_blank"
        title="Open PDF document in a new tab">
            Save my article as pdf
          </Link>
      </section>


  </article>
  );
};

export default ArticlePage;
