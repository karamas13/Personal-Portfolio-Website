import React from "react";
import { Helmet } from "react-helmet";
import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2 
        whileInView={{opacity: 1, y: 0}}
        initial={{opacity: 0, y: -100}}
        transition={{duration: 0.7}} 
        className="my-20 text-center text-4xl">Experience</motion.h2>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="mb-8 flex flex-wrap justify-center">
            <motion.div 
              whileInView={{opacity: 1, x: 0}}
              initial={{opacity: 0, x: -100}}
              transition={{duration: 0.8}} 
              className="w-full sm:w-1/3 md:w-1/4">
              <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
            </motion.div>
            <motion.div 
              whileInView={{opacity: 1, x: 0}}
              initial={{opacity: 0, x: 100}}
              transition={{duration: 1}} 
              className="w-full sm:w-2/3 md:w-3/4 max-w-xl">
              <h3 className="mb-2 font-semibold">
                {experience.role} -{" "}
                <span className="text-sm text-purple-100">{experience.company}</span>
              </h3>
              <p className="mb-4 text-neutral-400">{experience.description}</p>
              <div className="flex flex-wrap">
                {experience.technologies.map((tech, index) => (
                  <span
                    className="mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 font-medium text-purple-800"
                    key={index}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
