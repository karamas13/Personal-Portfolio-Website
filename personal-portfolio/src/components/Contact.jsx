import React from "react";
import { Helmet } from "react-helmet";
import { CONTACT } from "../constants";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { motion, useTime, useTransform } from "framer-motion";

const Contact = () => {
  const time = useTime();
  const rotate = useTransform(time, [0, 10000], [0, 360], { clamp: false });

  return (
    <div className="border-b border-neutral-900 pb-16 overflow-y-hidden">
      <motion.h2 
        whileInView={{opacity: 1, y: 0}}
        initial={{opacity: 0, y: -100}}
        transition={{duration: 0.7}}
        className="my-20 text-center text-4xl">Get in Touch</motion.h2>
      <motion.div 
        whileInView={{opacity: 1, y: 0}}
        initial={{opacity: 0, y: 100}}
        transition={{duration: 0.8}}
        className="text-center tracking-tighter">
        <p className="my-4 text-2xl">{CONTACT.address}</p>
        <a href="mailto:nickkaramas@gmail.com" className="underline text-xl" title="Connect with me via Email">Email: {CONTACT.email}</a>
      </motion.div>
      <div className="text-center tracking-tighter my-20">
        <motion.h2 
          whileInView={{opacity: 1, y: 0}}
          initial={{opacity: 0, y: 100}}
          transition={{duration: 0.8}}
          className="text-2xl">
          Find Me In
        </motion.h2>
        <div className="flex justify-center items-center gap-20 text-9xl mt-10 flex-col lg:flex-row">
          <motion.a
            whileInView={{opacity: 1, x: 0}}
            initial={{opacity: 0, x: -200}}
            transition={{duration: 0.8}} 
            style={{rotate}}  
            href="https://www.linkedin.com/in/nikos-karamaroudis-06676a233/" target="_blank" rel="noopener noreferrer" title="Connect with me on LinkedIn">
            <FaLinkedin className="hover:bg-blue-700 ease-in-out duration-[0.7s] rounded-xl"/>
          </motion.a>
          <motion.a 
            whileInView={{opacity: 1, y: 0}}
            initial={{opacity: 0, y: 200}}
            transition={{duration: 0.8}}           
            style={{rotate}}
            href="https://github.com/karamas13" target="_blank" rel="noopener noreferrer" title="Connect with me on GitHub">
            <FaGithub className="hover:bg-purple-900 ease-in-out duration-[0.7s] rounded-full p-2"/>
          </motion.a>
          <motion.a 
            whileInView={{opacity: 1, x: 0}}
            initial={{opacity: 0, x: 200}}
            transition={{duration: 0.8}}             
            style={{rotate}}
            href="https://www.instagram.com/nikos_krms/" target="_blank" rel="noopener noreferrer" title="Connect with me on Instagram">
            <FaInstagram className="hover:bg-orange-600 ease-in-out duration-[0.7s] rounded-3xl"/>
          </motion.a>
        </div>             
      </div>
    </div>
  );
}

export default Contact;
