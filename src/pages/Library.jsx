import React from 'react';
import { motion } from 'framer-motion';

const Library = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="p-6 bg-gradient-to-r from-gray-900 to-gray-700 min-h-screen flex items-center justify-center text-gray-200"
    >
      <div className="max-w-3xl bg-gray-700 text-gray-200 p-8 rounded-xl shadow-xl border-2 border-gray-500 text-center">
        <h1 className="text-4xl font-bold mb-4 text-yellow-500">Library</h1>
        <p className="text-lg mb-6 text-gray-300">
          The School provides an excellent library and reading room facilities. A well-organized and maintained library with an excellent variety of titles and a devoted and helpful staff is one of the distinctive features of the School. The school library has a huge collection of wonderful and exciting books well-suited to the needs and tastes of growing children, covering all spheres of activity and catering to their varied tastes. Besides, the younger classes also have a class library.
        </p>
        <p className="text-lg mb-6 text-gray-300">
          Reading room facilities are provided within the library and students are encouraged to utilize this facility. Students have compulsory library periods. The reading room is regularly updated with the very best journals, magazines & newspapers, catering to all ages, aptitudes, and intelligence from a collection of approximately 5500 books.
        </p>
        
        <div className="text-left">
          <h2 className="text-2xl font-semibold text-blue-300 mb-2">Available Book Categories:</h2>
          <ul className="list-disc list-inside mb-4 text-gray-400">
            <li>Science & Technology</li>
            <li>Literature & Fiction</li>
            <li>History & Geography</li>
            <li>Philosophy & Psychology</li>
            <li>Biographies & Autobiographies</li>
            <li>Reference & Research</li>
          </ul>
          
          <h2 className="text-2xl font-semibold text-blue-300 mb-2">Library Facilities:</h2>
          <ul className="list-disc list-inside mb-4 text-gray-400">
            <li>Comfortable reading zones</li>
            <li>Digital book collection</li>
            <li>Free Wi-Fi access</li>
            <li>Discussion & study rooms</li>
            <li>Book borrowing & return services</li>
            <li>24/7 online catalog access</li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Library;