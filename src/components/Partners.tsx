import React from 'react';
import Image from 'next/image';
import { partnersData } from '../../constant/index';

// Define an array of partner data
 

function Partners() {
  return (
    <section className="bg-white">
      <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
        <h2 className="mb-12 text-3xl font-extrabold tracking-tight leading-tight text-center text-google-red md:text-4xl">
          Our Partners and collaborators
        </h2>
        <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-4 dark:text-gray-400 ">
          {partnersData.map((partner) => (
            <div className='flex items-center justify-center'>
            <a key={partner.id} href="#" className="flex justify-center items-center">
              <Image
                src={partner.image}
                width={150}
                height={150}
                alt={partner.alt}
              />
            </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Partners;
