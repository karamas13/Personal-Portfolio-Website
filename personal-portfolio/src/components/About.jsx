import aboutme from "../assets/aboutme.jpg"
import { ABOUT_TEXT } from "../constants"
import { motion } from "framer-motion"
import { Helmet } from 'react-helmet'; 

const About = () => {
  return (
    <div className="border-b border-neutral-800 pb-4">
        <h2 className="my-20 text-center text-4xl text-white">
          About
          <span className="text-purple-800"> Me</span>
        </h2>   
        <div className="flex flex-wrap">
          <motion.div 
           whileInView={{opacity: 1, x:0}}
           initial={{opacity:0, x:-100}}
           transition={{duration: 0.7}}
           className="w-full lg:w-1/2 lg:p-8">
            <div className="flex items-center justify-center">
              <img className="h-[38rem] w-auto object-cover rounded-xl" src={ aboutme } alt="A professional photo of Nick Karamaroudis"/>
            </div>
            </motion.div>
       
          <motion.div
           whileInView={{opacity: 1, x:0}}
           initial={{opacity:0, x:100}}
           transition={{duration: 0.7}}
           className="w-full lg:w-1/2">
              <div className="flex justify-center lg:justify-start">
                <p className="my-2 max-w-xl py-6">{ ABOUT_TEXT }</p>
              </div>
          </motion.div>
        </div>
    </div>
  )
}

export default About