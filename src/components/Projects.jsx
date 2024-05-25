import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { motion } from "framer-motion";

function Projects() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h1
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:0.5}}
        className='my-20 text-center text-4xl'>
        Projects
      </motion.h1>
      <div className='flex flex-wrap justify-center'>
        {PROJECTS.map((project, index) => (
          <div key={index} className='mb-8 flex flex-wrap justify-center'>
            <motion.div
              whileInView={{opacity:1,x:0}}
              initial={{opacity:0,x:-100}}
              transition={{duration:1}}
              className='w-full lg:w-1/4 mb-4 lg:mb-0 lg:mr-8'
            >
              <img
                src={project.image}
                alt={project.title}
                className='mb-6 rounded cursor-pointer max-w-full max-h-full'
                onClick={() => openImage(project.image)}
              />
            </motion.div>
            <motion.div
              whileInView={{opacity:1,x:0}}
              initial={{opacity:0,x:100}}
              transition={{duration:1}}
              className='w-full max-w-xl lg:w-3/4'
            >
              <h6 className='mb-2 font-semibold'>{project.title}</h6>
              <p className='mb-4 text-neutral-400'>{project.description}</p>
              {project.technologies.map((tech,index)=>(
                <span key ={index} className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'> 
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
      {/* Modal to display selected image */}
      {selectedImage && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="max-w-screen-lg mx-auto">
            <img
              src={selectedImage}
              alt="Selected Project"
              className="max-w-full max-h-full"
            />
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 focus:outline-none"
              onClick={closeImage}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;
