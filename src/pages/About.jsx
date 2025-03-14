import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <motion.div
        style={styles.heroSection}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
      >
<h1 style={styles.heroTitle}>Welcome to Vishwa Bharti Vidya Niketan</h1>

        <p style={styles.heroSubtitle}>Empowering Young Minds for a Brighter Future</p>
      </motion.div>

      {/* About Us Section */}
      <motion.section
        style={styles.section}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 style={styles.sectionTitle}>About Us</h2>
<p style={styles.sectionContent}>
          Established in 1993, Vishwa Bharti Vidya Niketan has consistently delivered excellence in education for over 30 years.

          Our commitment to nurturing young minds has earned us a reputation as one of the leading institutions in the region.
        </p>
        <p style={styles.sectionContent}>
          We pride ourselves on fostering a holistic learning environment where students can thrive academically, socially,
          and emotionally. Our dedicated faculty and state-of-the-art facilities create an atmosphere of innovation and inspiration.
        </p>
      </motion.section>

      {/* Mission Section */}
      <motion.section
        style={styles.section}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 style={styles.sectionTitle}>Our Mission</h2>
        <p style={styles.sectionContent}>
          To empower students with knowledge, skills, and values that prepare them for future success in a rapidly evolving world.
          We strive to create a nurturing environment that fosters curiosity, creativity, and lifelong learning.
        </p>
      </motion.section>

      {/* Vision Section */}
      <motion.section
        style={styles.section}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 style={styles.sectionTitle}>Our Vision</h2>
        <p style={styles.sectionContent}>
          We envision a future where every student emerges as a confident, compassionate, and capable individual,
          ready to contribute positively to society. Our focus is on holistic development and character building.
        </p>
      </motion.section>

      {/* Why Choose Us Section */}
      <motion.section
        style={styles.section}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 style={styles.sectionTitle}>Why Choose Us?</h2>
        <ul style={styles.listContent}>
          <li>Highly Qualified and Experienced Faculty</li>
          <li>State-of-the-Art Infrastructure and Facilities</li>
          <li>Focus on Academic Excellence and Extracurricular Activities</li>
          <li>Safe and Inclusive Learning Environment</li>
          <li>Strong Parent-Teacher Collaboration</li>
        </ul>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        style={styles.contactSection}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 style={styles.contactTitle}>Contact Us</h2>
        <p style={styles.contactContent}>We would love to hear from you. Reach out to us for any inquiries or information:</p>
        <ul style={styles.contactList}>
          <li>Email: info@vishabharti.com</li>
          <li>Phone: +123-456-7890</li>
<li>Address: 123 School Lane, Vidya City</li>

        </ul>
      </motion.section>
    </div>
  );
};

const styles = {
  container: {
    padding: '40px',
    maxWidth: '1200px',
    margin: 'auto',
    textAlign: 'center',
  },
  heroSection: {
    background: 'linear-gradient(135deg, #007bff, #6a11cb)',
    color: '#fff',
    padding: '60px 20px',
    borderRadius: '12px',
  },
  heroTitle: {
    fontSize: '3em',
    fontWeight: 'bold',
  },
  heroSubtitle: {
    fontSize: '1.5em',
    marginTop: '10px',
  },
  section: {
    background: '#f9f9f9',
    padding: '30px',
    margin: '20px 0',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  sectionTitle: {
    fontSize: '2em',
    color: '#007bff',
    marginBottom: '10px',
  },
  sectionContent: {
    fontSize: '1.2em',
    color: '#333',
  },
  listContent: {
    textAlign: 'left',
    fontSize: '1.1em',
    color: '#555',
    paddingLeft: '40px',
  },
  contactSection: {
    background: '#007bff',
    color: '#fff',
    padding: '30px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  },
  contactTitle: {
    fontSize: '2em',
    color: '#fff',
  },
  contactContent: {
    fontSize: '1.2em',
    marginBottom: '10px',
  },
  contactList: {
    listStyleType: 'none',
    padding: 0,
  },
};

export default About;
