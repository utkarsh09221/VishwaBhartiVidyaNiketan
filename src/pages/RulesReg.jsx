import React from "react";
import './RulesReg.css'; // Importing the CSS file for styling

const rules = [
  {
    title: "General Conduct",
    items: [
      "Students must be punctual and attend school regularly.",
      "Respect for teachers, staff, and fellow students is expected at all times.",
      "The use of foul language, bullying, and any form of harassment is strictly prohibited.",
      "Students must maintain discipline and follow instructions given by teachers and school authorities."
    ]
  },
  {
    title: "Attendance and Punctuality",
    items: [
      "Students must arrive at school on time and attend all scheduled classes.",
      "A minimum attendance of 75% is required to be eligible for examinations.",
      "Absence due to illness must be justified with a medical certificate.",
      "Late arrivals must report to the school office before entering class."
    ]
  },
  {
    title: "Uniform and Appearance",
    items: [
      "Students must wear the prescribed school uniform at all times.",
      "Uniforms must be clean, well-maintained, and worn properly.",
      "Excessive jewelry, makeup, and inappropriate hairstyles are not allowed.",
      "Footwear must be according to school regulations."
    ]
  },
  {
    title: "Classroom Behavior",
    items: [
      "Students must be attentive and participate actively in lessons.",
      "Disruptive behavior during class is not tolerated.",
      "Use of mobile phones or other electronic devices is prohibited unless permitted by a teacher.",
      "Homework and assignments must be submitted on time."
    ]
  },
  {
    title: "Use of School Property",
    items: [
      "Students must take care of school property and maintain cleanliness.",
      "Any damage to school property must be reported immediately and may be subject to penalties.",
      "Littering is strictly prohibited."
    ]
  },
  {
    title: "Library and Laboratory Rules",
    items: [
      "Students must maintain silence in the library and handle books with care.",
      "Books must be returned within the due date; late returns may incur penalties.",
      "Laboratory equipment must be handled responsibly, and safety guidelines must be followed."
    ]
  },
  {
    title: "Discipline and Behavior",
    items: [
      "Fighting, vandalism, or any form of misconduct is strictly forbidden.",
      "Students must not leave the school premises without permission.",
      "Any serious violation of rules may result in suspension or expulsion."
    ]
  },
  {
    title: "Extracurricular Activities",
    items: [
      "Participation in extracurricular activities is encouraged but must not interfere with academics.",
      "Students must maintain discipline during school events and competitions."
    ]
  },
  {
    title: "Communication and Parent Involvement",
    items: [
      "Parents should regularly check student progress and attend parent-teacher meetings.",
      "Any concerns should be communicated through the proper school channels."
    ]
  },
  {
    title: "Safety and Security",
    items: [
      "Students must follow all safety guidelines provided by the school.",
      "Emergency drills must be taken seriously.",
      "Any suspicious activities or safety concerns must be reported immediately."
    ]
  }
];


const SchoolRules = () => {
  console.log("Rendering School Rules Component");

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">School Rules and Regulations</h1>
        <div className="space-y-6">
          {rules.map((rule, index) => (
            <div key={index} className="border-b pb-4">
              <h2 className="text-xl font-semibold text-gray-800">{rule.title}</h2>
              <ul className="list-disc list-inside text-gray-600 mt-2">
                {rule.items.map((item, i) => (
                  <li key={i} className="mt-1">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SchoolRules;
