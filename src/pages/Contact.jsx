import React, { useState } from "react";
import { motion } from "framer-motion"; // Ensure framer-motion is installed
import contactImage from "../assets/contact.png"; // Import the contact image

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phoneNumber: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        padding: "40px",
        maxWidth: "1200px",
        margin: "auto",
        flexWrap: "wrap"
      }}
    >
      {/* Left Image Section */}
      <motion.div
        style={{
          flex: 1,
          maxWidth: "45%",
          textAlign: "center",
          marginBottom: "20px"
        }}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <img
          src={contactImage}
          alt="Contact Illustration"
          style={{
            width: "100%",
            maxWidth: "400px",
            height: "auto",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.15)"
          }}
        />
      </motion.div>

      {/* Right Form Section */}
      <motion.div
        style={{
          flex: 1,
          maxWidth: "45%",
          background: "#f9f9f9",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
        }}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "10px" }}>Contact Us</h1>
        <p style={{ marginBottom: "20px" }}>
          Not sure what you need? The team at Square Events will be happy to
          listen to you and suggest event ideas you hadn't considered.
        </p>

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="fullName" style={{ display: "block", fontWeight: "bold", marginBottom: "5px" }}>
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ddd",
                borderRadius: "5px",
                fontSize: "14px"
              }}
            />
          </div>

          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="companyName" style={{ display: "block", fontWeight: "bold", marginBottom: "5px" }}>
              Company Name
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ddd",
                borderRadius: "5px",
                fontSize: "14px"
              }}
            />
          </div>

          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="email" style={{ display: "block", fontWeight: "bold", marginBottom: "5px" }}>
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ddd",
                borderRadius: "5px",
                fontSize: "14px"
              }}
            />
          </div>

          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="phoneNumber" style={{ display: "block", fontWeight: "bold", marginBottom: "5px" }}>
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ddd",
                borderRadius: "5px",
                fontSize: "14px"
              }}
            />
          </div>

          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="message" style={{ display: "block", fontWeight: "bold", marginBottom: "5px" }}>
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ddd",
                borderRadius: "5px",
                fontSize: "14px",
                height: "100px"
              }}
            ></textarea>
          </div>

          <button
            type="submit"
            style={{
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              padding: "12px",
              borderRadius: "5px",
              cursor: "pointer",
              transition: "background-color 0.3s"
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
          >
            Get In Touch
          </button>
        </form>
      </motion.div>

      {/* Responsive Design */}
      <style>{`
        @media only screen and (max-width: 600px) {
          div[style*="display: flex"] {
            flex-direction: column;
          }
          img {
            max-width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default ContactForm;
