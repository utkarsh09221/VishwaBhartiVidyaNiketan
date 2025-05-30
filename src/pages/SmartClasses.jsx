import React from 'react';
import { motion } from 'framer-motion';

const SmartClasses = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="p-6 bg-gradient-to-r from-gray-900 to-gray-700 min-h-screen flex items-center justify-center text-gray-200"
    >
      <div className="max-w-3xl bg-gray-700 text-gray-200 p-8 rounded-xl shadow-xl border-2 border-gray-500 text-center">
        <h1 className="text-4xl font-bold mb-4 text-yellow-500">Smart Classes</h1>
        <p className="text-lg mb-6 text-gray-300">
          Our school integrates smart class technology to make learning interactive and engaging. Equipped with state-of-the-art digital boards, projectors, and e-learning content, our smart classes provide an enhanced educational experience. Teachers use multimedia presentations, animations, and real-world applications to improve concept understanding and retention.
        </p>
        <p className="text-lg mb-6 text-gray-300">
          The smart classrooms foster an interactive and engaging environment, allowing students to visualize complex concepts in subjects like Science, Mathematics, and History. Our technology-driven learning approach ensures that students stay ahead with modern education trends.
        </p>
      </div>
    </motion.div>
  );
};

export default SmartClasses;
