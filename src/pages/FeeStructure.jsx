import React from "react";



const feeStructure = [
  { grade: "LKG - UKG", admissionFee: 5000, tuitionFee: 2000, annualCharges: 3000 },
  { grade: "1st - 3rd", admissionFee: 6000, tuitionFee: 2500, annualCharges: 3500 },
  { grade: "4th - 6th", admissionFee: 7000, tuitionFee: 3000, annualCharges: 4000 },
  { grade: "7th - 8th", admissionFee: 8000, tuitionFee: 3500, annualCharges: 4500 },
  { grade: "9th - 10th", admissionFee: 10000, tuitionFee: 4000, annualCharges: 5000 }
];

const FeeStructure = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 to-blue-500 py-10 px-5 flex justify-center">
      <div className="max-w-4xl w-full bg-white p-8 rounded-2xl shadow-2xl">
        <h1 className="text-4xl font-bold text-center text-green-700 mb-8">💰 School Fee Structure</h1>
        <table className="w-full border-collapse border border-gray-300 text-center">
          <thead>
            <tr className="bg-green-600 text-black">
              <th className="p-3 border">Class</th>
              <th className="p-3 border">Admission Fee (₹)</th>
              <th className="p-3 border">Monthly Tuition Fee (₹)</th>
              <th className="p-3 border">Annual Charges (₹)</th>
            </tr>
          </thead>
          <tbody>
            {feeStructure.map((fee, index) => (
              <tr key={index} className="bg-gray-100 border">
                <td className="p-3 border">{fee.grade}</td>
                <td className="p-3 border">{fee.admissionFee}</td>
                <td className="p-3 border">{fee.tuitionFee}</td>
                <td className="p-3 border">{fee.annualCharges}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FeeStructure;
