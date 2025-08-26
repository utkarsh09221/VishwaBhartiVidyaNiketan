import React from "react";

const projects = [
  { title: "Science Fair", desc: "Hands-on models and experiments by students." },
  { title: "Math Expo", desc: "Applied mathematics through games and puzzles." },
  { title: "Art & Culture", desc: "Student-led art, music and drama showcases." },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500 py-10 px-5 flex justify-center">
      <div className="max-w-4xl w-full bg-white p-8 rounded-2xl shadow-2xl">
        <h1 className="text-4xl font-bold text-center text-cyan-700 mb-8">🎓 Student Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <div key={p.title} className="bg-gray-50 border rounded-xl p-6 shadow">
              <h2 className="text-xl font-semibold text-gray-800">{p.title}</h2>
              <p className="text-gray-700 mt-2">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

