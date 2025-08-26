import React from 'react';
import { motion } from 'framer-motion';

const features = [
  { title: 'Interactive Panels', desc: 'Touch-enabled smart boards for immersive teaching.' },
  { title: 'Rich Content', desc: 'Animations, simulations, and videos to enhance concepts.' },
  { title: 'Assessment Tools', desc: 'Live quizzes and polls to gauge understanding.' },
  { title: 'Lesson Recording', desc: 'Sessions recorded for revision and absentees.' },
];

const SmartClasses = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <section className="px-6 py-16 text-center bg-gradient-to-b from-white to-gray-100">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">Smart Classes</h1>
        <p className="mt-4 max-w-3xl mx-auto text-gray-700">
          Interactive, technology-driven classrooms that turn learning into an engaging experience.
        </p>
      </section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="px-6 pb-12 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {features.map((f) => (
          <div key={f.title} className="bg-white rounded-xl p-6 border border-gray-200 shadow">
            <h3 className="text-xl font-semibold text-gray-900">{f.title}</h3>
            <p className="text-gray-700 mt-2">{f.desc}</p>
          </div>
        ))}
      </motion.section>

      <section className="px-6 pb-16 max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl text-gray-900 p-8 shadow-lg border border-gray-200">
          <h2 className="text-2xl font-bold">Benefits</h2>
          <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3 list-disc list-inside">
            <li>Improved concept clarity and retention</li>
            <li>Higher classroom engagement</li>
            <li>Personalized learning pace</li>
            <li>Easy revision via recorded content</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default SmartClasses;
