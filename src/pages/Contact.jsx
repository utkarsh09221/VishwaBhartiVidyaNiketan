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
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
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
    <div
      style={{
        background:
          "linear-gradient(135deg, #e0f0ff 0%, #ffffff 100%)",
        minHeight: "100vh",
        padding: "60px 20px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: "#333",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Contact Info Cards */}
      <CardGroup
        style={{
          maxWidth: "1080px",
          width: "100%",
          marginBottom: "60px",
          display: "flex",
          gap: "24px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {[{
          icon: <FaEnvelope style={{ color: "#007BFF", fontSize: 48, marginBottom: 12 }} />,
          title: "Email Address",
          details: "vbvnpnp@gmail.com",
        }, {
          icon: <FaPhoneAlt style={{ color: "#28a745", fontSize: 48, marginBottom: 12 }} />,
          title: "Phone Number",
          details: "01804050046\n07404466117",
        }, {
          icon: <FaMapMarkerAlt style={{ color: "#dc3545", fontSize: 48, marginBottom: 12 }} />,
          title: "Our Address",
          details: "Vishwa Bharti Vidya Niketan School Street number 6, Desraj Colony, Panipat ",
        }].map(({ icon, title, details }, idx) => (
          <Card
            key={idx}
            style={{
              flex: "1 1 280px",
              borderRadius: "16px",
              boxShadow: "0 4px 15px rgb(0 0 0 / 0.1)",
              padding: "32px 24px",
              textAlign: "center",
              backgroundColor: "#fff",
              cursor: "default",
              userSelect: "none",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)";
              e.currentTarget.style.boxShadow = "0 10px 25px rgb(0 0 0 / 0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 15px rgb(0 0 0 / 0.1)";
            }}
          >
            {icon}
            <Card.Title style={{ fontSize: "1.5rem", fontWeight: "700", marginBottom: 8 }}>
              {title}
            </Card.Title>
            <Card.Text
              style={{
                whiteSpace: "pre-line",
                fontSize: "1rem",
                color: "#555",
                lineHeight: 1.5,
              }}
            >
              {details}
            </Card.Text>
          </Card>
        ))}
      </CardGroup>

      {/* Contact Form */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        style={{
          backgroundColor: "#fff",
          borderRadius: "24px",
          padding: "40px 36px",
          maxWidth: "700px",
          width: "100%",
          boxShadow: "0 10px 30px rgb(0 0 0 / 0.1)",
        }}
      >
        <header style={{ marginBottom: 24, textAlign: "center" }}>
          <h2
            style={{
              color: "#007BFF",
              fontWeight: 700,
              fontSize: "1.1rem",
              letterSpacing: "2px",
              marginBottom: 6,
              textTransform: "uppercase",
            }}
          >
            Contact Us
          </h2>
          <h1
            style={{
              fontSize: "2.8rem",
              fontWeight: "800",
              color: "#222",
              margin: 0,
            }}
          >
            How Can We Help You?
          </h1>
        </header>

        <form
          onSubmit={handleSubmit}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
          }}
        >
          <input
            type="text"
            name="firstName"
            placeholder="* First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <input
            type="text"
            name="lastName"
            placeholder="* Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <input
            type="email"
            name="email"
            placeholder="* Email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ ...inputStyle, gridColumn: "1 / -1" }}
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number (optional)"
            value={formData.phone}
            onChange={handleChange}
            style={{ ...inputStyle, gridColumn: "1 / -1" }}
          />
          <select
            name="topic"
            value={formData.topic}
            onChange={handleChange}
            required
            style={inputStyle}
          >
            <option value="">* Select your topic</option>
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
            style={inputStyle}
          />
          <input
            type="text"
            name="salonName"
            placeholder="Salon Name (if applicable)"
            value={formData.salonName}
            onChange={handleChange}
            style={inputStyle}
          />
          <textarea
            name="message"
            placeholder="* Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            style={{ ...inputStyle, gridColumn: "1 / -1", resize: "vertical" }}
          ></textarea>

          <button
            type="submit"
            style={{
              gridColumn: "1 / -1",
              background:
                "linear-gradient(90deg, #005bea 0%, #00c6fb 100%)",
              color: "white",
              fontWeight: "700",
              fontSize: "1.2rem",
              padding: "14px 0",
              border: "none",
              borderRadius: "12px",
              cursor: "pointer",
              boxShadow: "0 6px 15px rgb(0 86 234 / 0.5)",
              transition: "background 0.3s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background =
                "linear-gradient(90deg, #0041c4 0%, #009ecf 100%)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background =
                "linear-gradient(90deg, #005bea 0%, #00c6fb 100%)")
            }
          >
            Submit
          </button>
        </form>
      </motion.div>
    </div>
  );
};

const inputStyle = {
  padding: "14px 16px",
  fontSize: "1rem",
  borderRadius: "10px",
  border: "1.8px solid #ccc",
  outline: "none",
  boxShadow: "inset 0 2px 6px rgb(0 0 0 / 0.05)",
  transition: "border-color 0.25s ease",
};

export default ContactPage;
