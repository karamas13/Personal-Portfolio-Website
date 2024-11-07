import React from "react";
import { Helmet } from "react-helmet";
import { HERO_CONTENT } from "../constants";
import pfp from "../assets/pfp.jpg";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: {x: -100, opacity: 0},
  visible: {
    x: 0,
    opacity: 1,
    transition: {duration: 0.8, delay: delay}
  }
})

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0.3)}
              initial="hidden"
              animate="visible" 
              className="pb-8 text-3xl font-thin tracking-tight lg:mt-16 lg:text-5xl xl:text-7xl">
              Nick Karamaroudis
            </motion.h1>
            <motion.span 
              variants={container(0.6)}
              initial="hidden"
              animate="visible" 
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={container(0.9)}
              initial="hidden"
              animate="visible"  
              className="my-2 max-w-xl py-6 font-light tracking-tighter text-center lg:text-left">
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img 
              initial={{x: 100, opacity: 0}}
              animate={{x: 0, opacity: 1}}
              transition={{duration: 0.8, delay: 1.2}} 
              className="h-[37rem] max-w-full rounded-xl object-cover" src={pfp} alt="Nick Karamaroudis - Full Stack Developer" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
