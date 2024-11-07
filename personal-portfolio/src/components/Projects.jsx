import React from "react";
import { Helmet } from "react-helmet";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom'; 

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2 
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0, y:-100}}
        transition={{duration: 0.7}}
        className="my-20 text-center text-4xl">Projects</motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div 
              whileInView={{opacity:1, x:0}}
              initial={{opacity:0, x:-100}}
              transition={{duration: 0.8}}
              className="w-full lg:w-1/4 mr-10">
              <img className="mb-6 rounded object-cover" src={project.image} width={450} height={450} alt={project.title} />
            </motion.div>
            <motion.div 
                whileInView={{opacity:1, x:0}}
                initial={{opacity:0, x:100}}
                transition={{duration: 1}}
                className="w-full max-w-xl lg:w-3/4">
                <h6 className="mb-2 font-semibold">{project.title}</h6>
                <p className="mb-4 text-neutral-400">{project.description}</p>
                {project.technologies.map((tech, index) => (
                  <span key={index} className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">{tech}</span>
                ))}          
                <Link to={`/project/${project.title}`} className="ml-2 inline-block text-bold text-lg text-pink-800 hover:underline ">
                  View Details
                </Link>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
