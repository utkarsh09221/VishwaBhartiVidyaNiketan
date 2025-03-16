import React, { useState } from "react";


const feeStructure = {
  "LKG": 2000,
  "UKG": 2000,
  "1st": 2500,
  "2nd": 2500,
  "3rd": 2500,
  "4th": 3000,
  "5th": 3000,
  "6th": 3000,
  "7th": 3500,
  "8th": 3500,
  "9th": 4000,
  "10th": 4000,
};

const FeePayment = () => {
  const [studentName, setStudentName] = useState("");
  const [classGrade, setClassGrade] = useState("LKG");
  const [amount, setAmount] = useState(feeStructure["LKG"]);
  const [qrCodeValue, setQrCodeValue] = useState("");

  const handleClassChange = (e) => {
    const selectedClass = e.target.value;
    setClassGrade(selectedClass);
    setAmount(feeStructure[selectedClass]);
  };

  const generateQRCode = () => {
    if (studentName && classGrade && amount) {
      const upiId = "schoolupi@bank"; // Replace with actual UPI ID
      const upiLink = `upi://pay?pa=${upiId}&pn=School%20Fee&mc=1234&tid=123456&tr=987654&tn=Fee%20Payment&am=${amount}&cu=INR`;
      setQrCodeValue(upiLink);
    } else {
      alert("Please fill all fields to generate QR code.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-400 to-purple-500 py-10">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md text-center">
        <h1 className="text-3xl font-bold text-blue-700 mb-6">💳 Online Fee Payment</h1>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Student Name"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            className="w-full p-2 border rounded-lg text-center"
          />
          <select
            value={classGrade}
            onChange={handleClassChange}
            className="w-full p-2 border rounded-lg text-center"
          >
            {Object.keys(feeStructure).map((grade) => (
              <option key={grade} value={grade}>{grade}</option>
            ))}
          </select>
          <input
            type="number"
            value={amount}
            readOnly
            className="w-full p-2 border rounded-lg text-center bg-gray-100 cursor-not-allowed"
          />
          <button
            onClick={generateQRCode}
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
          >
            Generate QR Code
          </button>
          {qrCodeValue && (
            <div className="mt-6">
              <h2 className="text-lg font-semibold text-gray-700">Scan to Pay</h2>
              <QRCode value={qrCodeValue} size={200} className="mt-3 mx-auto" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeePayment;
