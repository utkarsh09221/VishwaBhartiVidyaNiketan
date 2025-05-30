import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { Card, CardGroup } from "react-bootstrap";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    topic: "",
    orderNumber: "",
    salonName: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }
    console.log("Form submitted", formData);
    alert("Thank you for your message! We will get back to you soon.");
  };

  return (
    <div className="flex flex-col items-center bg-gray-100 py-10 px-5">
      {/* Contact Info Section */}
      <CardGroup className="mb-10">
        <Card className="text-center p-4 shadow-lg">
          <Card.Body>
            <FaEnvelope className="text-blue-600 text-3xl mb-3" />
            <Card.Title className="text-lg font-semibold">Email Address</Card.Title>
            <Card.Text>info@example.com<br />support@example.com</Card.Text>
          </Card.Body>
        </Card>
        <Card className="text-center p-4 shadow-lg">
          <Card.Body>
            <FaPhoneAlt className="text-green-600 text-3xl mb-3" />
            <Card.Title className="text-lg font-semibold">Phone Number</Card.Title>
            <Card.Text>+88 (800) 123 4567<br />+99 094 5445 433</Card.Text>
          </Card.Body>
        </Card>
        <Card className="text-center p-4 shadow-lg">
          <Card.Body>
            <FaMapMarkerAlt className="text-red-600 text-3xl mb-3" />
            <Card.Title className="text-lg font-semibold">Our Address</Card.Title>
            <Card.Text>82 12th Street, Office 14<br />Edinburgh, UK</Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>

      {/* Contact Form */}
      <motion.div
        className="w-full max-w-3xl bg-white p-8 rounded-lg shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-center text-blue-600 text-sm font-semibold">Contact Us</h2>
        <h1 className="text-center text-2xl font-bold mb-4">How Can We Help You?</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="*First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="text"
              name="lastName"
              placeholder="*Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="email"
              name="email"
              placeholder="*Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone Number (optional)"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <select
              name="topic"
              value={formData.topic}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">*Select your topic</option>
              <option value="General Inquiry">General Inquiry</option>
              <option value="Support">Support</option>
              <option value="Feedback">Feedback</option>
              <option value="Other">Other</option>
            </select>

            <input
              type="text"
              name="orderNumber"
              placeholder="Order Number (optional)"
              value={formData.orderNumber}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="text"
              name="salonName"
              placeholder="Salon Name (if applicable)"
              value={formData.salonName}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <textarea
              name="message"
              placeholder="*Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded h-24 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-black text-white p-3 rounded hover:bg-gray-900 transition text-lg font-semibold"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default ContactPage;
