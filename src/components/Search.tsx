import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import logo from '../../public/google-developers-seeklogo.svg';
import { motion } from 'framer-motion';
import mic from '../../public/mic.png';
import cam from '../../public/cam.png';
import { FaSearch } from 'react-icons/fa';
import Whatwedo from './Whatwedo';
import Loader from './loader/Loader';

const Search = () => {
  const [showWhatWeDo, setShowWhatWeDo] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [typedText, setTypedText] = useState('');

  const textToType = "What We Do?";
  const typingInterval = 100; 

  useEffect(() => {
    let index = 0;
    const typingTimeout = setTimeout(() => {
      const typingIntervalId = setInterval(() => {
        if (index <= textToType.length) {
          setTypedText(textToType.substring(0, index));
          index++;
        } else {
          clearInterval(typingIntervalId);
        }
      }, typingInterval);

      return () => clearInterval(typingIntervalId);
    }, 500); 

    return () => clearTimeout(typingTimeout);
  }, [textToType, typingInterval]);

  const handleSearchButtonClick = () => {
    setShowLoader(true);
    setTimeout(() => {
      setShowWhatWeDo(true);
      setShowLoader(false);
    }, 900);
  };

  return (
    <div>
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
          <div className="md:w-[50rem] w-80 p-2 md:p-4 pl-10 pr-20 bg-white border border-gray-400 rounded-full text-gray-900 focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500">
            <h3 className="text-l font-semibold md:mx-10 mx-4">{typedText}</h3>
          </div>
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
            <FaSearch className="w-5 h-5 font-light text-gray-500 m-2" />
          </span>
          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 flex gap-2">
            <div className="md:flex gap-2 items-center hidden">
              <Image src={cam} alt="Camera" width={20} height={24} className="w-6 h-6" loading="lazy" />
              <Image src={mic} alt="Mic" width={24} height={24} className="w-8 h-8" loading="lazy" />
            </div>
          </span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex items-center justify-center gap-6"
        >
          <button
            onClick={handleSearchButtonClick}
            className="bg-[#F8F9FA] text-black px-4 py-2 rounded-xl shadow hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Google Search
          </button>
          <a href="https://gdsc.community.dev/chameli-devi-group-of-institutions-indore-india/">
            <button className="bg-[#F8F9FA] text-black px-4 py-2 rounded-xl shadow hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              I'm Feeling Lucky
            </button>
          </a>
        </motion.div>
      </motion.div>
      <div className={showLoader ? 'flex items-center justify-center' : 'hidden'}>
        <div className='flex items-center justify-center'>
          <svg aria-hidden="true" className="w-12 h-12 text-gray-200 animate-spin dark:text-gray-600 fill-red-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
      <div className={showWhatWeDo ? 'block' : 'hidden'}>
        <Whatwedo />
      </div>
    </div>
  );
};

export default Search;
