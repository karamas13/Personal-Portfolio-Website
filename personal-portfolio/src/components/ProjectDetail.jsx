import { useParams } from 'react-router-dom';
import { PROJECTS } from '../constants'; 
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const ProjectDetail = () => {
  const { title } = useParams(); 
  const project = PROJECTS.find((p) => p.title === title); 
  const nav = useNavigate();

  if (!project) {
    return <div>Project not found!</div>; 
  }

  return (
    <div className="min-h-screen scrollbar-thin scrollbar-thumb-purple-900 scrollbar-track-stone-800 h-32 overflow-y-scroll overflow-x-hidden">
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900 flex justify-center">
      <div className="fixed top-0 -z-10 h-full w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
    <div className="lg:p-4 mt-10">
      <motion.h2 
        animate={{opacity:1, y:0}}
        initial={{opacity:0, y:-100}}
        transition={{duration: 0.8}}
       className="lg:text-5xl text-3xl font-bold text-neutral-100 text-center">
       {project.title}
      </motion.h2>
      <div className='flex items-center lg:flex-col flex-col'>
       <motion.img 
        animate={{opacity:1, y:0}}
        initial={{opacity:0, y:-100}}
        transition={{duration: 0.8}}
        src={project.image} alt={project.title} className="my-10 lg:h-[25rem] h-[15rem] w-auto object-cover rounded-xl mr-5" 
       />
     <motion.div 
       animate={{opacity:1, y:0}}
       initial={{opacity:0, y:100}}
       transition={{duration: 0.8}}
      className="flex flex-col items-center w-full p-2">
       <p className='lg:w-[30rem] w-1.5/2 text-center'>{project.description}</p>
      <a href={project.link} target="_blank" className=""> 
       <motion.button 
        whileHover={{
            scale: 1.1,
            textShadow: "0px 0px 8px rgb(138,43,226)",
            boxShadow: "0px 0px 8px rgb(138,43,226)",
        }}
        className='text-2xl mt-20 border lg:w-[100%] lg:p-1 lg:px-5 p-2 rounded-2xl border-purple-600 text-purple-600 text-bold'
       >
        Visit
       </motion.button>
       </a>
     </motion.div>
      </div>
      
      <motion.div 
        animate={{opacity:1, y:0}}
        initial={{opacity:0, y:100}}
        transition={{duration: 0.8}}
       className='w-full flex flex-col items-center justify-center my-5 border-b border-t p-5 border-neutral-800'>
      <h3 className="mx-auto text-3xl mb-5"> Details</h3>
      <p className='lg:w-[45rem] w-1.5/2 text-center'>{project.details}</p>
      </motion.div>
     
      <h3 className="mt-4 text-xl text-center mb-2">Technologies Used:</h3>
      <div className='text-center p-5 lg:w-full flex flex-wrap items-center justify-center'>
        {project.technologies.map((tech, index) => (
          <span key={index} className="mr-2 rounded bg-neutral-900 px-2 py-1 m-1 text-sm font-medium text-purple-900">
            {tech}
          </span>
        ))}
      </div>      
    </div>
  </div>
  </div>
  );
};

export default ProjectDetail;
