import React from 'react';
import Image from 'next/image';
import whatData  from '../../constant/index';

interface WhatWeDoItem {
    image: string;
    title: string;
    description: string;
}
const Whatwedo = () => {
  return (
    <div className="px-8 pb-8">
      <div className=" p-8 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24">
        {whatData.map((item, index) => (
          <div key={index} className="mb-8">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:mr-8">
                <div className="w-32 h-32 relative">
                  <Image
                   src={item.image} 
                   alt="unimportant"
                   width={100}
                   height={100}
                   className="w-28 h-28"
                   objectFit='cover'
                   loading="lazy"
                   />
                </div>
              </div>
              <div className="flex flex-col">
                <h1 className="text-3xl font-medium text-gray-700 mb-2 text-center md:text-left">{item.title}</h1>
                <p className="md:text-2xl text-xl text-gray-500 text-center md:text-left">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Whatwedo;
