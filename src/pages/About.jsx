import React from 'react';

const About = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-3xl bg-white p-10 rounded-lg shadow-lg border-t-4 border-blue-600 text-center">
        
        {/* About Us */}
        <Section 
          title="About Us" 
          content="Founded in 1993, Vishwa Bharti Vidya Niketan has been a pillar of quality education for over three decades. We provide a nurturing environment that fosters academic excellence, moral values, and holistic development."
        />

        {/* Mission */}
        <Section 
          title="Our Mission" 
          content="To provide students with a high-quality education that prepares them for the challenges of the future while instilling strong ethical values, leadership skills, and a lifelong love for learning."
        />

        {/* Vision */}
        <Section 
          title="Our Vision" 
          content="We envision creating responsible, skilled, and innovative individuals who contribute positively to society. Our education system focuses on academic excellence, personal growth, and social responsibility."
        />

        {/* Why Choose Us */}
        <SectionList
          title="Why Choose Us?"
          items={[
            "Highly Experienced and Qualified Faculty",
            "Modern Infrastructure with Smart Classrooms",
            "Focus on Academics, Sports, and Extracurricular Activities",
            "Safe and Supportive Learning Environment",
            "Strong Parent-Teacher Collaboration",
          ]}
        />

        {/* Contact */}
        <div className="mt-6 p-6 bg-blue-700 text-white rounded-md text-center">
          <h2 className="text-2xl font-semibold">Contact Us</h2>
          <p className="mt-2">We are always available to assist you. Reach out to us for inquiries.</p>
          <ul className="mt-3 space-y-2">
            <li>Email: info@vishabharti.com</li>
            <li>Phone: +123-456-7890</li>
            <li>Address: 123 School Lane, Vidya City</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

// Reusable Section Component
const Section = ({ title, content }) => (
  <div className="mt-6 text-left">
    <h2 className="text-2xl font-semibold text-blue-700">{title}</h2>
    <p className="text-gray-700 mt-2">{content}</p>
  </div>
);

// Reusable List Component (Fix for Bullet Points Alignment)
const SectionList = ({ title, items }) => (
  <div className="mt-6 text-center">
    <h2 className="text-2xl font-semibold text-blue-700">{title}</h2>
    <ul className="list-disc list-inside text-gray-700 mt-2 mx-auto inline-block text-left space-y-1">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

export default About;
