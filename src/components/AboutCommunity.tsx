import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import logo from '../../public/google-developers-seeklogo.svg';
import cdgi from '../../public/cdgi.jpg';
import { Link } from 'lucide-react';

const AboutCommunity = () => {
  return (
    <div className="mt-4 md:mt-12">
      <div className="flex flex-col mx-12 my-4 md:flex-row">
        <motion.div
          className="md:order-1 md:mr-4 flex flex-col items-center"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Image 
          src={cdgi}
          alt="College Image" 
          width={600}
          height={1000}
          className="mt-6"
          loading='lazy'
          />
        </motion.div>

        <motion.div
          className="md:order-2 md:ml-4"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h1 className="text-2xl font-bold text-center md:text-3xl md:text-left md:px-6 md:font-semibold mb-4 pt-6">
            About <span className="inline-block"><Image src={logo} width={40} className="h-6 hidden md:block" alt="LOGO" /></span> GDSC CDGI
          </h1>
          <p className="mb-4 text-gray-700 font-medium pt-2 md:px-6">
            The GDSC CDGI (Google Developer Student Clubs) is a vibrant and inclusive community for students passionate about technology and development. Sponsored by Google, GDSC provides a platform for students to collaborate, learn, explore and create together.
          </p>
          <p className="mb-4 text-gray-700 font-medium pt-2 md:px-6">
            Through a combination of <span className="text-blue-600">workshops</span>, <span className="text-green-600">hackathons</span>, <span className="text-red-600">speaker sessions</span>, and <span className="text-yellow-500">hands-on projects</span>, GDSC members have the opportunity to enhance their technical skills, explore innovative ideas, and connect with like-minded peers.
          </p>

          <div
           className="flex md:flex-row md:ml-6 justify-between items-center mt-8"
           >
             <a
                href="https://gdsc.community.dev/chameli-devi-group-of-institutions-indore-india/"
                className="bg-google-red rounded-lg shadow-xl text-white cursor-pointer font-medium py-2 px-6 mb-2 md:mb-0 max-w-max flex-shrink-0"
              >
                Know More!
              </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutCommunity;
