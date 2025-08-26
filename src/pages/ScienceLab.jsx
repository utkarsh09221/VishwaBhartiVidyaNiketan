import React from 'react';
import { motion } from 'framer-motion';

const labAreas = [
  { title: 'Physics Bench', desc: 'Mechanics, optics, electricity experiments with precise instruments.' },
  { title: 'Chemistry Station', desc: 'Titrations, reactions, and safety-first wet lab practices.' },
  { title: 'Biology Corner', desc: 'Microscopy, models, and dissections for life sciences.' },
  { title: 'Safety & Storage', desc: 'PPE, fume hood, labeled reagents, and proper waste handling.' },
];

const ScienceLab = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <section className="px-6 py-16 text-center bg-gradient-to-b from-white to-gray-100">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">Science Lab</h1>
        <p className="mt-4 max-w-3xl mx-auto text-gray-700">Hands-on exploration across Physics, Chemistry, and Biology to spark discovery.</p>
      </section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="px-6 pb-12 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {labAreas.map((a) => (
          <div key={a.title} className="bg-white rounded-xl p-6 border border-gray-200 shadow">
            <h3 className="text-xl font-semibold text-gray-900">{a.title}</h3>
            <p className="text-gray-700 mt-2">{a.desc}</p>
          </div>
        ))}
      </motion.section>

      <section className="px-6 pb-16 max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl text-gray-900 p-8 shadow-lg border border-gray-200">
          <h2 className="text-2xl font-bold">Lab Etiquette & Safety</h2>
          <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3 list-disc list-inside">
            <li>Always wear lab coats and safety goggles</li>
            <li>Handle chemicals and glassware with care</li>
            <li>Follow teacher instructions and signage</li>
            <li>Keep workspace clean; label everything</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default ScienceLab;