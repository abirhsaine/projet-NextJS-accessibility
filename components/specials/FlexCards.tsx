import Image from 'next/image';
import './styles.css';
import { useEffect } from 'react';

const FlexCards: React.FC = () => {
  useEffect(() => {
    const cards = document.querySelectorAll('.card');

    function handleCardClick(event: Event) {
      cards.forEach((card) => {
        card.classList.remove('active');
      });

      (event.currentTarget as HTMLElement).classList.add('active');
    }

    cards.forEach((card) => {
      card.addEventListener('click', handleCardClick);
    });

    return () => {
      cards.forEach((card) => {
        card.removeEventListener('click', handleCardClick);
      });
    };
  }, []);

  return (
    <div className="wrapper flexCards">
    <div className="w-100 flex-nowrap justify-start md:flex  md:gap-3">
    <div aria-labelledby="c1" className="card active relative" id="c1" tabIndex={0} aria-expanded="false">
      <Image
        src="/no-smoke.jpeg"
        alt="Winter Image"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0 rounded-lg"
      />
      <div className='overlay'></div>
      <div className="row relative">
        <div className="icon m-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-900 text-white">1</div>
        <div className="description flex flex-col overflow-hidden opacity-0 transition-all duration-300">
          <h4 className="mt-4 text-xl font-semibold" id="c1">Winter</h4>
          <p className="relative z-10  whitespace-normal text-gray-200">Winter has so much to offer - creative activities</p>
        </div>
      </div>
    </div>


    <div aria-labelledby="c2" className="card relative" id="c2" role="button" tabIndex={0} aria-expanded="false">
      <Image
        src="/read-book.jpeg"
        alt="Winter Image"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0 rounded-lg" // Fills the entire container
      />
      <div className='overlay'></div>
      <div className="row w-100  relative bg-black">
        <div className="icon m-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-900 text-white">2</div>
        <div className="description flex flex-col overflow-hidden opacity-0 transition-all duration-300">
          <h4 className="mt-4 text-xl font-semibold">Winter</h4>
          <p className="relative z-10  whitespace-normal  text-gray-200">Winter has so much to offer - creative activities</p>
        </div>
      </div>
    </div>


    <div aria-labelledby="c3" className="card relative" id="c3" role="button" tabIndex={0} aria-expanded="false">
      <Image
        src="/no-smoke.jpeg"
        alt="Winter Image"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0 rounded-lg" // Fills the entire container
      />
      <div className='overlay'></div>
      <div className="row relative">
        <div className="icon m-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-900 text-white">3</div>
        <div className="description flex flex-col overflow-hidden opacity-0 transition-all duration-300">
          <h4 className="mt-4 text-xl font-semibold">Winter</h4>
          <p className="relative z-10  whitespace-normal  text-gray-200">Winter has so much to offer - creative activities</p>
        </div>
      </div>
    </div>


    </div>
  </div>
  );
};

export default FlexCards;
