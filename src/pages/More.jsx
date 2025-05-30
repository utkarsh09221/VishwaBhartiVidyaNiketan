import React from 'react';
import { motion } from 'framer-motion';

const More = () => {
  const sections = [
    { title: "Library", description: "A well-organized library with a vast collection of books and reading resources." },
    { title: "Smart Classes", description: "Interactive smart classes equipped with modern digital learning tools." },
    { title: "Computer Lab", description: "State-of-the-art computer lab with the latest software and high-speed internet." },
    { title: "Science Lab", description: "Well-equipped science lab for hands-on experiments in Physics, Chemistry, and Biology." },
    { title: "Sports Facilities", description: "Extensive sports facilities promoting physical fitness and teamwork." },
    { title: "Music & Arts", description: "Dedicated spaces for music, arts, and creative expression." }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="p-6 bg-gradient-to-r from-gray-900 to-gray-700 min-h-screen text-gray-200"
    >
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-yellow-500">More Facilities</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((section, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-600 text-center">
              <h2 className="text-2xl font-semibold mb-2 text-blue-300">{section.title}</h2>
              <p className="text-gray-300">{section.description}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default More;
