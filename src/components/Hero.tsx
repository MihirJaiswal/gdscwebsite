import { motion } from "framer-motion";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/GDSC Logo.jpg";
import heroImage from "../../public/hero.gif";

function Hero() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-around mt-20">
      <div id="about" className="relative bottom-64"></div>
      <div className="grid w-full p-10 text-justify md:p-0 md:w-1/2 place-items-start place-content-center">
        <motion.div
          className="flex items-center justify-center p-10 md:justify-around"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Image
            className="sm:hidden"
            src={logo}
            width={500}
            height={500}
            alt="heroImage"
          />
        </motion.div>
        <motion.p
          className="text-base font-normal leading-7 tracking-wide sm:text-lg md:text-xl lg:text-2xl sm:leading-8 md:leading-9"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          At
          <span className="text-base font-semibold text-google-blue sm:text-lg md:text-xl lg:text-2xl">
            {" "}
            Google
          </span>
          <span className="text-base font-semibold text-google-green sm:text-lg md:text-xl lg:text-2xl">
            {" "}
            Developer
          </span>
          <span className="text-base font-semibold text-google-red sm:text-lg md:text-xl lg:text-2xl">
            {" "}
            Student
          </span>
          <span className="text-base font-semibold text-google-yellow sm:text-lg md:text-xl lg:text-2xl">
            {" "}
            Clubs{" "}
          </span>
          CDGI, we as a university based community functioning with an aim to
          promote peer-to-peer learning with an active usage of tools and
          technologies offered by Google. Here in the community, we learn and
          further our developers skills with an intent to abide by the idea of
          putting knowledge to practical use.
        </motion.p>

        <Link
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.button
            className="flex items-center px-10 py-2 mt-3 font-semibold text-white bg-blue-500 border rounded-lg hover:bg-blue-600 focus:outline-none md:mt-5 border-google-black"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Join Us
          </motion.button>
        </Link>
      </div>
      <motion.div
        className="w-full md:w-1/3 right md:block"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Image src={heroImage} alt={"hero image"} className="w-full h-full" />
      </motion.div>
    </div>
  );
}

export default Hero;
