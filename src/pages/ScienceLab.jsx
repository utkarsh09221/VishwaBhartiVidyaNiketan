import React from 'react';
import { motion } from 'framer-motion';

const ScienceLab = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="p-6 bg-gradient-to-r from-gray-900 to-gray-700 min-h-screen flex items-center justify-center text-gray-200"
    >
      <div className="max-w-3xl bg-gray-700 text-gray-200 p-8 rounded-xl shadow-xl border-2 border-gray-500 text-center">
        <h1 className="text-4xl font-bold mb-4 text-yellow-500">Science Lab</h1>
        <p className="text-lg mb-6 text-gray-300">
          Our school is equipped with a modern science lab that provides students with hands-on experience in Physics, Chemistry, and Biology. The lab is furnished with advanced equipment and safety measures to facilitate experimental learning.
        </p>
        <p className="text-lg mb-6 text-gray-300">
          Students are encouraged to explore scientific concepts through practical experiments, fostering curiosity and critical thinking. Our lab ensures an engaging and interactive learning experience under expert supervision.
        </p>
      </div>
    </motion.div>
  );
};

export default ScienceLab;