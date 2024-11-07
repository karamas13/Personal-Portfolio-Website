import React from "react";
import { Helmet } from "react-helmet";
import { RiReactjsLine, RiFireLine, RiNodejsLine, RiTailwindCssFill } from "react-icons/ri";
import { BsBootstrap, BsFiletypeSql } from "react-icons/bs";
import { SiMongodb } from "react-icons/si";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: { 
        y: [10, -10],
        transition: { 
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2 
        whileInView={{opacity: 1, y: 0}}
        initial={{opacity: 0, y: -100}}
        transition={{duration: 1.7}}
        className="my-20 text-center text-4xl bg-gradient-to-r from-cyan-400 via-orange-600 to-green-500 bg-clip-text tracking-tight text-transparent w-fit mx-auto">
        Technologies
      </motion.h2>
      <motion.div 
        whileInView={{opacity: 1, x: 0}}
        initial={{opacity: 0, x: -100}}
        transition={{duration: 1.8}}
        className="flex flex-wrap items-center justify-center gap-4">
        <motion.div 
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 text-cyan-400 text-6xl">
          <RiReactjsLine/>
        </motion.div>
        <motion.div 
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 text-orange-500 text-6xl">
          <RiFireLine/>
        </motion.div>
        <motion.div 
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 text-green-600 text-6xl">
          <RiNodejsLine />
        </motion.div>
        <motion.div 
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 text-cyan-400 text-6xl">
          <RiTailwindCssFill />
        </motion.div>
        <motion.div 
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 text-purple-500 text-6xl">
          <BsBootstrap />
        </motion.div>
        <motion.div 
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 text-neutral-200 text-6xl">
          <BsFiletypeSql />
        </motion.div>
        <motion.div 
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 text-green-600 text-6xl">
          <SiMongodb />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Technologies;
