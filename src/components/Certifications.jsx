import React from 'react';
import { motion } from 'framer-motion';

export default function Certifications() {
  const handleRedirect = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className='border-b border-neutral-800 pb-24'>
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className='my-20 text-center text-4xl'>Certifications</motion.h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <motion.div
          className="flex flex-col items-center"
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 1.5 }}
          onClick={() => handleRedirect("https://www.credly.com/badges/f3954a69-646f-412b-bb74-ea8fa6832bec/public_url")}
          style={{ cursor: "pointer" }}
        >
          <img className="h-auto max-w-full rounded-lg mb-10" style={{ maxWidth: '60%', height: 'auto' }} src="/public/databases.png" alt="" />
          <p className="text-center text-lg">IT Specialist - Databases Certiport</p>
        </motion.div>
        <motion.div
          className="flex flex-col items-center"
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          onClick={() => handleRedirect("https://www.credly.com/badges/dfd5592b-c1c7-4c9e-b066-08c7c350af09/public_url")}
          style={{ cursor: "pointer" }}
        >
          <img className="h-auto max-w-full rounded-lg mb-10" style={{ maxWidth: '60%', height: 'auto' }} src="/public/CCNA1.png" alt="" />
          <p className="text-center text-lg">CCNA: Switching, Routing, and Wireless Essentials</p>
        </motion.div>
        <motion.div
          className="flex flex-col items-center"
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          onClick={() => handleRedirect("https://www.credly.com/badges/f46265bb-0e41-410c-83a7-48edaba8a8fb/public_url")}
          style={{ cursor: "pointer" }}
        >
          <img className="h-auto max-w-full rounded-lg mb-10" style={{ maxWidth: '60%', height: 'auto' }} src="/public/CCNA.png" alt="" />
          <p className="text-center text-lg">CCNA: Introduction to Networks</p>
        </motion.div>
      </div>
    </div>
  );
}
