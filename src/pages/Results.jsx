import React from "react";

const results = [
  { year: "2024-25", summary: "98% pass rate; 35% students scored above 85%." },
  { year: "2023-24", summary: "96% pass rate; 30% students scored above 85%." },
  { year: "2022-23", summary: "95% pass rate; 28% students scored above 85%." },
];

const Results = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-emerald-500 to-teal-500 py-10 px-5 flex justify-center">
      <div className="max-w-4xl w-full bg-white p-8 rounded-2xl shadow-2xl">
        <h1 className="text-4xl font-bold text-center text-emerald-700 mb-8">📈 Academic Results</h1>
        <div className="space-y-4">
          {results.map((r) => (
            <div key={r.year} className="bg-gray-50 border rounded-xl p-6 shadow flex items-center justify-between">
              <div className="text-xl font-semibold text-gray-800">{r.year}</div>
              <div className="text-gray-700">{r.summary}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Results;

