import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { partnersData } from '../../constant/index';

function Partners() {
  return (
    <section className="bg-white">
      <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
        <h2 className="mb-12 text-3xl font-extrabold tracking-tight leading-tight text-center text-google-red md:text-4xl">
          Our Partners and collaborators
        </h2>
        <motion.div
          className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-4 dark:text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          {partnersData.map((partner) => (
            <motion.div
              key={partner.id}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center justify-center"
            >
              <a href="#" className="flex justify-center items-center">
                <Image
                  src={partner.image}
                  width={150}
                  height={150}
                  alt={partner.alt}
                />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Partners;
