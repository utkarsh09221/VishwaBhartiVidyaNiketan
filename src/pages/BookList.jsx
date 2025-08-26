import React from "react";

const books = [
  { grade: "LKG - UKG", list: ["Alphabet Primer", "Number Book", "Picture Dictionary"] },
  { grade: "1st - 3rd", list: ["Marigold English", "Math Magic", "Looking Around (EVS)"] },
  { grade: "4th - 6th", list: ["Honeydew English", "Vasant Hindi", "NCERT Math", "Science", "Social Science"] },
  { grade: "7th - 8th", list: ["It So Happened", "Vasant", "Mathematics", "Science", "Our Pasts/Geography/Civics"] },
  { grade: "9th - 10th", list: ["Beehive/Moments", "Kshitij/Kritika", "Mathematics", "Science", "Social Science"] },
];

const BookList = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 py-10 px-5 flex justify-center">
      <div className="max-w-5xl w-full bg-white p-8 rounded-2xl shadow-2xl">
        <h1 className="text-4xl font-bold text-center text-purple-700 mb-8">📖 Book Lists</h1>
        <div className="space-y-6">
          {books.map((b) => (
            <div key={b.grade} className="bg-gray-50 border rounded-xl p-6 shadow">
              <h2 className="text-xl font-semibold text-gray-800 mb-3">{b.grade}</h2>
              <ul className="list-disc list-inside text-gray-700 grid grid-cols-1 sm:grid-cols-2 gap-x-8">
                {b.list.map((name) => (
                  <li key={name}>{name}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookList;
    