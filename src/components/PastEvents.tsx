import React from 'react';
import { PastData } from '../../constant/index';
import Image from 'next/image';


interface CardProps {
  imageSrc: string;
  title: string;
  date: string;
  content: string;
  color?: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, title, date, content, color }) => {
  return (
    <div className='flex flex-col items-center justify-between gap-4'>
    <div>
    <Image 
      src={imageSrc} 
      alt="Card" 
      width={400}
      height={400}
      className="w-full mb-3 rounded-full border border-gray-500"
       />
    </div>
      <div className="p-4 pt-2">
        <div className="mb-8 text-center">
      
          
          <a href="#" className={`${color} font-bold text-lg mb-2 hover:text-indigo-600 inline-block text-center`}>
            {title}
          </a>
          <h3>{date}</h3>
          <p className="text-gray-700 text-sm text-center">{content}</p>
        </div>
        
      </div>
    </div>
  );
};

interface CardListProps {
  data: CardProps[];
}

const CardList: React.FC<CardListProps> = ({ data }) => {
  return (
    <div className="max-w-screen-xl mx-auto p-4 md:p-2 mb-12">
      <h1 className='text-3xl md:text-5xl font-extrabold text-blue-600 md:p-12 text-center mb-12'>
        Past Events
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-16">
        {data.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>
    </div>
  );
};




const PastEvent: React.FC = () => {
  return <CardList data={PastData} />;
};

export default PastEvent;
