import React from 'react';
import { motion } from 'framer-motion';

const categories = ['Science & Technology', 'Literature & Fiction', 'History & Geography', 'Biographies', 'Reference & Research', 'Children’s Corner'];
const facilities = ['Quiet reading zones', 'Digital catalog & e-books', 'Wi‑Fi enabled space', 'Discussion rooms', 'Borrow & return desk', 'New arrivals & journals'];

const Library = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <section className="px-6 py-16 text-center bg-gradient-to-b from-white to-gray-100">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">Library</h1>
        <p className="mt-4 max-w-3xl mx-auto text-gray-700">A calm, resource-rich space curated to nurture curiosity and lifelong learning.</p>
      </section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="px-6 pb-12 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow text-gray-900">
          <h2 className="text-2xl font-semibold">Book Categories</h2>
          <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 list-disc list-inside text-gray-800">
            {categories.map((c) => <li key={c} className="marker:text-[#0b2239]">{c}</li>)}
          </ul>
        </div>
        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow text-gray-900">
          <h2 className="text-2xl font-semibold">Facilities</h2>
          <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 list-disc list-inside text-gray-800">
            {facilities.map((f) => <li key={f} className="marker:text-[#0b2239]">{f}</li>)}
          </ul>
        </div>
      </motion.section>

      <section className="px-6 pb-16 max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl text-gray-900 p-8 shadow-lg border border-gray-200">
          <h2 className="text-2xl font-bold">Membership & Access</h2>
          <p className="mt-3">All students have scheduled library periods. Members can borrow books using their ID card. New arrivals are highlighted weekly.</p>
        </div>
      </section>
    </div>
  );
};

export default Library;