import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

function Boxes() {
  return (
    <div className="p-8 grid grid-rows-3 grid-cols-1 md:grid-rows-2 md:grid-cols-2 md:w-3/4 mx-auto gap-x-6 gap-y-8 w-full font-open-sans text-black">
      <motion.div
        className="Box1 flex  bg-google-green justify-between items-center rounded-xl px-4 border border-google-black"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <div className="stats">
          <p className=" text-4xl text-white font-semibold">40+</p>
          <p className="text-base md:text-2xl tracking-wider mt-2 font-semibold">
            Events Conducted
          </p>
        </div>
        <div className="line py-2">
          <Image
            src="/event.svg"
            width={150}
            height={150}
            alt="line"
            className="scale-150"
          />
        </div>
      </motion.div>
      <motion.div
        className="Box2 bg-google-yellow rounded-xl grid grid-cols-1 sm:grid-cols-2 p-6 place-items-center row-span-2 border border-google-black"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <p className="font-bold  text-white text-2xl md:text-4xl lg:text-5xl tracking-wide">
          Love to chat about anything
        </p>
        <Image
          className="hidden sm:block scale-125"
          src="/chat.svg"
          width={450}
          height={450}
          alt="line"
        />
        <p className="md:hidden lg:block font-bold underline text-base md:text-xl mx-auto cursor-pointer">
          <a href="mailto:">mihirjaiswal69@gmail.com</a>
        </p>
        <div className="flex">
          <div className="circle rounded-lg [40px] h-[40px] flex items-center justify-center mr-1 cursor-pointer">
            <a href="">
              <Image src="/instagram.svg" alt="fb" width={30} height={30} />
            </a>
          </div>
          <div className="circle rounded-lg w-[40px] h-[40px] flex items-center justify-center mr-1 cursor-pointer">
            <a href="">
              <Image src="/twitter.svg" alt="twitter" width={30} height={30} />
            </a>
          </div>

          <div className="circle rounded-lg bg-yellow w-[40px] h-[40px] flex items-center justify-center mr-1 cursor-pointer">
            <a href="">
              <Image src="/linkedin.svg" alt="fb" width={30} height={30} />
            </a>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="Box1 flex bg-google-blue justify-between items-center rounded-xl px-4 border border-google-black"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div className="stats">
          <p className=" text-4xl text-white font-semibold">2000+</p>
          <p className="text-2xl tracking-wider mt-2 font-semibold">Students</p>
        </div>
        <div className="line py-2">
          <Image
            src="/students.svg"
            width={150}
            height={150}
            alt="student"
            className="scale-125"
          />
        </div>
      </motion.div>
    </div>
  );
}

export default Boxes;
