import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { Card, CardGroup } from "react-bootstrap";
import "../styles/Contact.css";

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
    <div className="contact-page">
      <section className="contact-section">
        <div className="contact-container">
          <CardGroup className="contact-cards">
            {[{
              icon: <FaEnvelope className="contact-card__icon email" />,
              title: "Email Address",
              details: "vbvnpnp@gmail.com",
            }, {
              icon: <FaPhoneAlt className="contact-card__icon phone" />,
              title: "Phone Number",
              details: "01804050046\n07404466117",
            }, {
              icon: <FaMapMarkerAlt className="contact-card__icon address" />,
              title: "Our Address",
              details: "Vishwa Bharti Vidya Niketan School Street number 6, Desraj Colony, Panipat ",
            }].map(({ icon, title, details }, idx) => (
              <Card key={idx} className="contact-card">
                {icon}
                <h3 className="contact-card__title">{title}</h3>
                <p className="contact-card__text">{details}</p>
              </Card>
            ))}
          </CardGroup>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="contact-form"
          >
            <header className="contact-header">
              <h2 className="contact-ribbon">Contact Us</h2>
              <h1 className="contact-headline">How Can We Help You?</h1>
            </header>

            <form onSubmit={handleSubmit} className="contact-form__grid">
              <input
                type="text"
                name="firstName"
                placeholder="* First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="input"
              />
              <input
                type="text"
                name="lastName"
                placeholder="* Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="input"
              />
              <input
                type="email"
                name="email"
                placeholder="* Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="input input--full"
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number (optional)"
                value={formData.phone}
                onChange={handleChange}
                className="input input--full"
              />
              <select
                name="topic"
                value={formData.topic}
                onChange={handleChange}
                required
                className="input"
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
                className="input"
              />
              <input
                type="text"
                name="salonName"
                placeholder="Salon Name (if applicable)"
                value={formData.salonName}
                onChange={handleChange}
                className="input"
              />
              <textarea
                name="message"
                placeholder="* Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="input input--full textarea"
              />

              <button type="submit" className="submit-btn enhanced">
                Submit
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      <section className="contact-map-section">
        <div className="contact-container">
          <h3 className="map-title">Find Us on the Map</h3>
          <div className="map-wrapper">
            <iframe
              title="School Location"
              src="https://www.google.com/maps?q=Panipat%2C%20Desraj%20Colony&output=embed"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="contact-map"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
