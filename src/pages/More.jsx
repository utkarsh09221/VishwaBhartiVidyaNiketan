import React from 'react';
import { motion } from 'framer-motion';

const items = [
  { title: 'Sports Facilities', description: 'Playgrounds, courts, and track for holistic development.' },
  { title: 'Music & Arts', description: 'Dedicated rooms for music, dance, and fine arts.' },
  { title: 'Transportation', description: 'Safe and reliable bus routes across the city.' },
  { title: 'Medical Room', description: 'On-campus first-aid and tie-ups for emergencies.' },
  { title: 'Cafeteria', description: 'Hygienic snacks and balanced meals for students.' },
  { title: 'Counselling', description: 'Academic and personal guidance for students.' },
];

const More = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <section className="px-6 py-16 text-center bg-gradient-to-b from-white to-gray-100">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">More Facilities</h1>
        <p className="mt-4 max-w-3xl mx-auto text-gray-700">A complete ecosystem to support learning beyond classrooms.</p>
      </section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="px-6 pb-16 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {items.map((it) => (
          <div key={it.title} className="bg-white rounded-xl p-6 border border-gray-200 shadow text-gray-900">
            <h3 className="text-xl font-semibold">{it.title}</h3>
            <p className="text-gray-700 mt-2">{it.description}</p>
          </div>
        ))}
      </motion.section>
    </div>
  );
};

export default More;
