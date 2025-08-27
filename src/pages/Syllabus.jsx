import React from "react";

const syllabusData = [
  { grade: "LKG - UKG", subjects: ["English", "Math", "EVS", "Rhymes"] },
  { grade: "1st - 3rd", subjects: ["English", "Hindi", "Math", "EVS", "Computer"] },
  { grade: "4th - 6th", subjects: ["English", "Hindi", "Math", "Science", "Social Science", "Computer"] },
  { grade: "7th - 8th", subjects: ["English", "Hindi", "Math", "Science", "Social Science", "Computer"] },
  { grade: "9th - 10th", subjects: ["English", "Hindi/Sanskrit", "Math", "Science", "Social Science", "IT"] },
];

const Syllabus = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 to-blue-500 py-10 px-5 flex justify-center">
      <div className="max-w-5xl w-full bg-white p-8 rounded-2xl shadow-2xl">
        <h1 className="text-4xl font-bold text-center text-indigo-700 mb-8">📚 Syllabus Overview</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {syllabusData.map((item) => (
            <div key={item.grade} className="bg-gray-50 border rounded-xl p-6 shadow">
              <h2 className="text-xl font-semibold text-gray-800 mb-3">{item.grade}</h2>
              <ul className="list-disc list-inside text-gray-700">
                {item.subjects.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Syllabus;

