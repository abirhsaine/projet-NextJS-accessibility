
import React from 'react';

import Image from 'next/image';
import Link from 'next/link';
import PdfViewer from '@/components/specials/PdfViewer';

import { Metadata } from "next";
import AccordionCustom from '@/components/specials/AccordionAbir';


export const metadata: Metadata = {
  title: {
    default: "power of reputation",
    template: `%s - steel`,
  },
  description: "reputation can have a big impact on our lifestyle",
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
          alt="A puzzle depicting the interconnection of power and reputation."
          className="mb-8 w-full rounded-lg sm:mb-0 sm:ml-4 sm:w-1/2 dark:contrast-200"
          src="/ladies-power.jpeg"
          tabIndex={0}
        />

        <div className="mr-4 w-full text-center sm:w-1/2 sm:text-left">
          <h1 tabIndex={0} className="dark:text-dark-50 mb-4 text-3xl font-bold leading-tight md:text-4xl">
          Mastering the Triad of Success <br /> in a Complex World

          </h1>
          <p id="programDescription" className="mb-8 text-lg leading-relaxed text-slate-700 dark:text-slate-400" tabIndex={0} >
          Embark on a journey where power, reputation, and strategic communication converge to unlock the gates of personal and professional triumph. <br/>
          In this hero section, we navigate the intricate landscape of life&apos;s challenges,  <br/>
          exploring how the interplay of these dynamic forces can shape destinies and leave an indelible mark on the fabric of society.
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
          The Strategic Art of Communication
          </h2>
          <p className="mb-8 text-left text-lg text-muted-foreground" tabIndex={0}>
          Communication stands out as a key to power, exemplified by historical declarations like Louis XIV&apos;s &quot;I am the State&quot; and Hannibal&apos;s bold tactics.<br /> This section explores the historical significance of words and staging in maintaining authority and destabilizing adversaries.<br /> It highlights the role of strategic communication as an essential element in the pursuit of power, providing examples that showcase the impact of eloquence and theatricality.
            </p>
        </div>

        <Image
          width={500}
          height={500}
          alt="the power of effective communication in influencing others."
          className="mb-8 h-full w-full rounded-lg object-cover sm:mb-0 sm:ml-4 sm:w-1/2 dark:contrast-200"
          src="/communication-power.jpeg"
          tabIndex={0}
        />

        </section>
      <section className="container grid items-center gap-6 pt-6 md:py-10">
        <div className="flex flex-col items-start gap-2">
          <h2 id="cTitle" className="mb-4 text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl" tabIndex={0}>Navigating the Paradox of Modern Power</h2>
          <p className="text-lg text-muted-foreground" tabIndex={0}>
          Despite the modern quest for justice and equality, the primal instincts of power persist within each of us. This paragraph delves into the paradox of our dual nature and the importance of emotional intelligence in mastering the art of transforming adversaries into allies.<br />
          By strategically managing reactions and turning adversities into mutually beneficial collaborations, individuals can harness the seemingly conflicting forces within and achieve success in a balanced manner.
          </p>
          <ol className="list-disc" aria-describedby="cTitle">
            <li tabIndex={0}>The Essence of Power and Reputation</li>
            <li tabIndex={0}>Navigating the Paradox of Modern Power</li>
            <li tabIndex={0}>The Strategic Art of Communication</li>
            <li tabIndex={0}>Building Strategic Networks for Professional Success</li>
         </ol>

          <Image
            width={1500}
            height={500}
            alt="Yin and yang : Quest for justice and equality."
            className=" h-64 w-full rounded-lg object-cover dark:contrast-200"
            src="/balance-tin-yan.jpeg"
            tabIndex={0}
          />

        </div>
      </section>





      <section className="container grid items-center gap-6 pb-8  md:py-10">
      <h2 className="mb-4 text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl" tabIndex={0}>FAQ</h2>
        <AccordionCustom/>
      </section>

      <section>
        <PdfViewer pdfUrl='/essai-abir.pdf'></PdfViewer>
      </section>


  </article>
  );
};

export default ArticlePage;
