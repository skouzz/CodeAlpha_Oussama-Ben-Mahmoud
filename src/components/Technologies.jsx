import React from 'react';
import { RiReactjsLine } from "react-icons/ri";
import { FaNodeJs, FaAngular } from "react-icons/fa";
import { SiMongodb, SiExpress, SiPhpmyadmin, SiMicrosoftazure } from "react-icons/si"; 
import { motion } from "framer-motion"

const iconVariants= (duration)=>({
  initial:{y:-10},
  animate:{
    y:[10,-10],
    transition:{
      duration: duration,
      ease:"linear",
      repeat:Infinity,
      repeatType:"reverse",
    },
  },
});

export const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
      <motion.h1
      whileInView={{opacity:1,y:0}}
      initial={{opacity:0,y:-100}}
      transition={{duration:1.5}}
      className='my-20 text-center text-4xl'>Technologies</motion.h1>
      <motion.div
      whileInView={{opacity:1,x:0}}
      initial={{opacity:0,x:-100}}  
      transition={{duration:1.5}}    
      className='flex flex-wrap items-center justify-center gap-4'>
        <motion.div
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
         className='rounded-2xl border border-neutral-800 p-4'>
          <SiMongodb className='text-7xl text-green-400'/> 
        </motion.div>
        <motion.div
        variants={iconVariants(3)}
        initial="initial"
        animate="animate"
        className='rounded-2xl border border-neutral-800 p-4'>
          <SiExpress className='text-7xl text-red-400'/> 
        </motion.div>
        <motion.div
        variants={iconVariants(5)}
        initial="initial"
        animate="animate"
         className='rounded-2xl border border-neutral-800 p-4'>
          <RiReactjsLine className='text-7xl text-cyan-400'/>
        </motion.div>
        <motion.div
        variants={iconVariants(2)}
        initial="initial"
        animate="animate"
        className='rounded-2xl border border-neutral-800 p-4'>
          <FaNodeJs className='text-7xl text-green-400'/> 
        </motion.div>
       
        <motion.div
        variants={iconVariants(6)}
        initial="initial"
        animate="animate"
        className='rounded-2xl border border-neutral-800 p-4'>
          <SiPhpmyadmin className='text-7xl text-blue-600'/> 
        </motion.div>
        <motion.div
        variants={iconVariants(4)}
        initial="initial"
        animate="animate" 
        className='rounded-2xl border border-neutral-800 p-4'>
          <FaAngular className='text-7xl text-red-600'/> 
        </motion.div>
        <motion.div
        variants={iconVariants(6)}
        initial="initial"
        animate="animate"
         className='rounded-2xl border border-neutral-800 p-4'>
          <SiMicrosoftazure className='text-7xl text-blue-700'/> 
        </motion.div>
      </motion.div>
    </div>
  );
};
