import React from 'react';
import { motion } from 'framer-motion';
import './Library.css'; // Assuming a CSS file for styles

const Library = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{ padding: '20px' }}
    >
      <h1>Welcome to the Library</h1>
      <p>Explore our collection of books and resources.</p>
      {/* Add more content and animations as needed */}
    </motion.div>
  );
};

export default Library;
