import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";


function Collab() {
  return (
    <motion.div
    initial={{ opacity: 0, y: -50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    >
       <div
      id="project-container"
      className="border-2 border-google-red rounded-2xl md:p-5 m-1 md:m-10"
    >
      <div id="projects" className="relative bottom-32"></div>
      <motion.div
        className="bg-center p-10 md:p-20 flex flex-col items-center mx-auto "
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <h1 className="text-xl md:text-3xl font-bold md:font-semibold text-google-yellow">
          Wants to collab? Let&apos;s Get Started
        </h1>
        <p className="text-md mt-3 text-google-black font-mulish">
          Are you looking for a collaboration for some kind of event that you have in
          your mind.
        </p>
        <p className="text-md text-google-black">
          Connect with us to make your work easier.
        </p>
        <div>
          <Link href="/contact">
          <motion.button
            className="mt-4 px-6 py-3 bg-google-blue text-white text-md rounded-xl flex items-center active:ring-2  hover:bg-blue-500 transition-all ease-in-out font-mulish font-bold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}

          >
            Get Started!
          </motion.button>
          </Link>
        </div>
      </motion.div>
      <style jsx>{`
        #project-container {
          background-image: url("/projectbg.svg"); /* Check the path to the image */
          background-size: cover;
          background-position: center;
          loading: lazy
        }
        @media (max-width: 640px) {
          #projects {
            background-size: contain;
            background-position: top;
            background-image: none; /* hide the background image */
          }
        }
      `}</style>
    </div>
    </motion.div>
   
  );
}

export default Collab;
