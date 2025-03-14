import React from "react";
import { FaClipboardCheck } from "react-icons/fa";
import { motion } from "framer-motion";

const admissionCriteria = [
  {
    title: "Eligibility Requirements",
    items: [
      "Students must meet the age criteria as per the school's regulations.",
      "Previous academic records should meet the required standards.",
      "A basic entrance test may be required for certain grades.",
      "Birth certificate and previous school leaving certificate must be submitted."
    ]
  },
  {
    title: "Required Documents",
    items: [
      "Duly filled admission form.",
      "Two recent passport-size photographs.",
      "Copy of birth certificate.",
      "Previous school report card.",
      "Medical certificate (if applicable)."
    ]
  },
  {
    title: "Admission Process",
    items: [
      "Fill out the online or offline admission form.",
      "Submit the required documents at the school office.",
      "Appear for the entrance test (if applicable).",
      "Attend the parent-student interview session.",
      "Complete the fee payment process to confirm admission."
    ]
  }
];

const AdmissionCriteria = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-green-500 py-10 px-5 flex justify-center">
      <div className="max-w-4xl w-full bg-white p-8 rounded-2xl shadow-2xl">
        <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">📋 Admission Criteria</h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          {admissionCriteria.map((criteria, index) => (
            <div key={index} className="border-l-4 border-blue-500 p-6 flex items-start gap-6">
              <FaClipboardCheck className="text-blue-500 text-3xl mt-1" />
              <div>
                <h2 className="text-2xl font-semibold text-gray-800">{criteria.title}</h2>
                <ul className="list-disc list-inside text-gray-700 mt-3 space-y-1">
                  {criteria.items.map((item, i) => (
                    <li key={i} className="pl-4 relative before:absolute before:left-0 before:top-1/2 before:h-2 before:w-2 before:bg-blue-500 before:rounded-full before:-translate-y-1/2">
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

export default AdmissionCriteria;
