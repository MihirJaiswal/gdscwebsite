import Image from 'next/image';
import React from 'react';
import logo from '../../public/google-developers-seeklogo.svg';
import { motion } from 'framer-motion';
import mic from '../../public/mic.png';
import cam from '../../public/cam.png';
import { FaSearch } from 'react-icons/fa';

const Search = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center gap-4 md:gap-12 my-28 relative"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="mb-6"
      >
        <Image
          alt="logo"
          src={logo}
          width={500}
          height={500}
          className="md:h-32 w-auto h-24"
          loading="lazy"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="mb-4 relative"
      >
        <div className='md:w-[50rem] w-80 p-2 md:p-4 pl-10 pr-20 bg-white border border-gray-400 rounded-full text-gray-900 focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500'>
        <h3 className='text-l md:mx-10 mx-4'>
            What we do?
        </h3>
        </div>
        <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
          <FaSearch className='w-5 h-5 font-light text-gray-500 m-2'/>
        </span>
        <span className="absolute right-3 top-1/2 transform -translate-y-1/2 flex gap-2">
          <div className='md:flex gap-2 items-center hidden'>
          <Image 
          src={cam}
           alt="Camera"
            width={20} 
            height={24} 
            className='w-6 h-6'
            loading="lazy"
            />
          <Image 
          src={mic} 
          alt="Mic" 
          width={24} 
          height={24}
          className='w-8 h-8' 
          loading='lazy'
           />
          </div>
        </span>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="flex items-center justify-center gap-6"
      >
        <button className="bg-[#F8F9FA] text-black px-4 py-2 rounded-xl shadow hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          Google Search
        </button>
        <button className="bg-[#F8F9FA] text-black px-4 py-2 rounded-xl shadow hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          I'm Feeling Lucky
        </button>
      </motion.div>
    </motion.div>
  );
};

export default Search;
