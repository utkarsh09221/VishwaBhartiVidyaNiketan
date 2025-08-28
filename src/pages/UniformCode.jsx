import React from "react";
import { FaTshirt } from "react-icons/fa";
import { motion } from "framer-motion";

const uniformRules = [
  {
    title: "Boys' Uniform",
    items: [
      "White full-sleeve/half-sleeve shirt with the school emblem.",
      "Navy blue trousers, properly fitted.",
      "Black formal shoes with white socks.",
      "Hair must be neatly trimmed and well-groomed.",
      "No excessive jewelry or accessories allowed."
    ],
    image: "/images/boys-uniform.png"
  },
  {
    title: "Girls' Uniform",
    items: [
      "White blouse with the school emblem.",
      "Navy blue skirt or salwar-kameez as per school guidelines.",
      "Black formal shoes with white socks.",
      "Hair must be neatly tied back with simple accessories.",
      "Minimal jewelry and no makeup allowed."
    ],
    image: "/images/girls-uniform.png"
  },
  {
    title: "Sports Uniform",
    items: [
      "School house T-shirt with track pants.",
      "White sports shoes with matching socks.",
      "Hair must be tied back neatly.",
      "Wearing the correct sports uniform is mandatory on PE days."
    ],
    image: "/images/sports-uniform.png"
  }
];

const UniformCode = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 to-purple-600 py-10 px-5 flex justify-center">
      <div className="max-w-4xl w-full bg-white p-8 rounded-2xl shadow-2xl">
        <h1 className="text-4xl font-bold text-center text-indigo-700 mb-8">👔 School Uniform Code</h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          {uniformRules.map((rule, index) => (
            <div key={index} className="border-l-4 border-indigo-500 p-6 flex items-center gap-6 flex-row-reverse">
              <img src={rule.image} alt={rule.title} className="w-28 h-28 object-contain" />
              <div className="flex flex-col">
                <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
                  <FaTshirt className="text-indigo-500" /> {rule.title}
                </h2>
                <ul className="list-disc list-inside text-gray-700 mt-3 space-y-1">
                  {rule.items.map((item, i) => (
                    <li key={i} className="pl-4 relative before:absolute before:left-0 before:top-1/2 before:h-2 before:w-2 before:bg-indigo-500 before:rounded-full before:-translate-y-1/2">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default UniformCode;
