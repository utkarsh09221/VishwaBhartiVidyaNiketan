import React from 'react';
import { motion } from 'framer-motion';

const resources = [
  { title: 'High-speed Internet', desc: 'Reliable connectivity for research and projects.' },
  { title: 'Modern Systems', desc: 'Updated hardware for smooth performance.' },
  { title: 'Learning Suites', desc: 'Office tools, IDEs, and creative software.' },
  { title: 'Guided Sessions', desc: 'Mentored coding and digital literacy.' },
];

const ComputerLab = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <section className="px-6 py-16 text-center bg-gradient-to-b from-white to-gray-100">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">Computer Lab</h1>
        <p className="mt-4 max-w-3xl mx-auto text-gray-700">A future-ready lab empowering students with practical computing and coding skills.</p>
      </section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="px-6 pb-12 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {resources.map((r) => (
          <div key={r.title} className="bg-white rounded-xl p-6 border border-gray-200 shadow">
            <h3 className="text-xl font-semibold text-gray-900">{r.title}</h3>
            <p className="text-gray-700 mt-2">{r.desc}</p>
          </div>
        ))}
      </motion.section>

      <section className="px-6 pb-16 max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl text-gray-900 p-8 shadow-lg border border-gray-200">
          <h2 className="text-2xl font-bold">What Students Learn</h2>
          <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3 list-disc list-inside">
            <li>Typing, documents, and presentations</li>
            <li>Basics of programming and web design</li>
            <li>Safe internet and digital citizenship</li>
            <li>Creative tools: drawing, audio, and video</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default ComputerLab;
