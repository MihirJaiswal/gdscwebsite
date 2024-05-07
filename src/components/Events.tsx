'use client'
import { motion } from "framer-motion";
import React from 'react';
import { cardData } from '../../constant/index';
import Link from 'next/link';
import Image from 'next/image';
import img from '../../public/noevent.jpg'

interface CardProps {
  imageSrc: string;
  title: string;
  content: string;
  authorName: string;
  authorDate: string;
  authorAvatar: string;
  membersOnly?: boolean;
  color?: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, title, content, authorName, authorDate, authorAvatar, membersOnly, color }) => {
  return (
    <motion.div 
      className="border border-gray-400 bg-white rounded-xl flex flex-col justify-between hover:scale-105 duration-300"
      whileHover={{ scale: 1.05 }}
    >
      <Image 
        src={imageSrc} 
        alt="Card" 
        width={500}
        height={500}
        className="w-full mb-3 rounded-xl"
        loading="lazy"
      />
      <div className="p-4 pt-2">
        <div className="mb-8">
          {
            membersOnly && (
              <p className="text-sm text-gray-600 flex items-center">
                <svg
                  className="fill-current text-gray-500 w-3 h-3 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z"
                  ></path>
                </svg>
                Members only
              </p>
            )
          }
          
          <a href="#" className={`${color} font-bold text-lg mb-2 hover:text-indigo-600 inline-block`}>
            {title}
          </a>
          <p className="text-gray-700 text-sm">{content}</p>
        </div>
        <div className="flex items-center">
          <a href="#">
            <img
              className="w-10 h-10 rounded-full mr-4 " 
              src={authorAvatar} 
              alt={`Avatar of ${authorName}`} 
            />
          </a>
          <div className="text-sm">
            <a href="#" className="text-gray-900 font-semibold leading-none hover:text-indigo-600">
              {authorName}
            </a>
            <p className="text-gray-600">{authorDate}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

interface CardListProps {
  data: CardProps[];
  buttonRender : boolean
}

const CardList: React.FC<CardListProps> = ({ data, buttonRender }) => {
  if (data.length === 0) {
    return (
      <motion.div
       initial={{ opacity: 0, y: 50 }}
       whileInView={{ opacity: 1, y: 0 }}
       transition={{ duration: 0.5, delay: 0.6 }}
       className="max-w-screen-xl mx-auto p-5 sm:p-10 md:pt-16 md:mt-4 mt-20 text-center bg-white bg-opacity-50">
        <h1 className='text-5xl font-extrabold text-google-green bg-white md:pt-12 mb-12'>
         Events
        </h1>
        <div className="flex flex-col items-center gap-8 justify-center">
          <Image
            src={img}
            alt="No Event"
            width={300}
            height={300}
            className="w-44 md:w-52 rounded-xl"
            loading="lazy"
          />
          <h3 className="text-2xl text-gray-600 bg-white">No Upcoming Event</h3>
        </div>
        {buttonRender && (
          <div className="flex justify-center mt-12">
            <Link href="/events">
              <motion.button
                className="bg-google-blue text-white font-bold py-2 px-4 rounded mb-6 hover:bg-blue-700"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
              >
                View all
              </motion.button>
            </Link>
          </div>
        )}
      </motion.div>
    );
  }

  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 md:mt-4 mt-20">
      <h1 className='text-3xl md:text-4xl font-extrabold text-google-green md:p-12 text-center mb-12'>
        Upcoming Events
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
        {data.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>
      {buttonRender && (
        <div className="flex justify-center mt-12">
          <Link href="/events">
            <motion.button
              className="bg-google-blue text-white font-bold py-2 px-4 rounded mb-6 hover:bg-blue-700"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
            >
              View all
            </motion.button>
          </Link>
        </div>
      )}
    </div>
  );
};


const Event: React.FC = () => {
  return <CardList data={cardData} buttonRender={true} />;
};

export default Event;

const Event2 : React.FC = () => {
  return <CardList data={cardData} buttonRender={false} />;
};

export { Event2 };
