// components/PdfIframe.tsx
import Link from 'next/link';
import React from 'react';

interface PdfIframeProps {
  pdfUrl: string;
}

const PdfIframe: React.FC<PdfIframeProps> = ({ pdfUrl }) => {
  return (
    <div className='flex flex-col content-center'>
      <iframe src={pdfUrl} title="Embedded PDF" width="100%" height="600px" className='rounded-lg'></iframe>

      <Link
        className="my-2 inline-block rounded-lg border-0 bg-pink-700 px-12 py-2 text-center text-base text-white transition hover:bg-pink-800"
        href={pdfUrl} target="_blank"
        title="Open PDF document in a new tab"

      >
            Open in a new tab
          </Link>

    </div>
  );
};

export default PdfIframe;
