import React from 'react';
import { motion } from 'framer-motion';

const ComputerLab = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="p-6 bg-gradient-to-r from-gray-900 to-gray-700 min-h-screen flex items-center justify-center text-gray-200"
    >
      <div className="max-w-3xl bg-gray-700 text-gray-200 p-8 rounded-xl shadow-xl border-2 border-gray-500 text-center">
        <h1 className="text-4xl font-bold mb-4 text-yellow-500">Computer Lab</h1>
        <p className="text-lg mb-6 text-gray-300">
          Our school offers a state-of-the-art computer lab equipped with modern computers, high-speed internet, and the latest software to enhance digital learning. Students get hands-on experience in coding, designing, and technology-driven projects.
        </p>
        <p className="text-lg mb-6 text-gray-300">
          The lab is designed to provide practical exposure to programming, multimedia, and IT-related fields. Our expert instructors guide students in developing essential digital skills required for the future.
        </p>
      </div>
    </motion.div>
  );
};

export default ComputerLab;
