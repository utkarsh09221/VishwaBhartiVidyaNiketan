import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-hero__overlay" />
        <div className="about-hero__content">
          <h1 className="about-title">Vishwa Bharti Vidya Niketan</h1>
          <p className="about-subtitle">Founded in 1993 • 30+ years of nurturing minds and values</p>
        </div>
      </section>

      <section className="about-intro container">
        <div className="about-intro__grid">
          <div className="about-intro__text">
            <h2>About Us</h2>
            <p>
              Since 1993, Vishwa Bharti Vidya Niketan has stood as a pillar of quality education.
              We provide a caring, future-ready learning environment that balances academic excellence
              with character-building and holistic development. Our students grow into confident,
              compassionate, and responsible citizens.
            </p>
          </div>
          <div className="about-intro__card">
            <ul>
              <li>Experienced and dedicated faculty</li>
              <li>Modern infrastructure and smart classrooms</li>
              <li>Strong focus on academics and co-curriculars</li>
              <li>Safe and supportive environment</li>
              <li>Active parent–teacher collaboration</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="about-stats">
        <div className="container stats-grid">
          <div className="stat">
            <div className="stat-number">30+</div>
            <div className="stat-label">Years of Excellence</div>
          </div>
          <div className="stat">
            <div className="stat-number">1000+</div>
            <div className="stat-label">Alumni</div>
          </div>
          <div className="stat">
            <div className="stat-number">100%</div>
            <div className="stat-label">Board Results (recent batches)</div>
          </div>
          <div className="stat">
            <div className="stat-number">25+</div>
            <div className="stat-label">Clubs & Activities</div>
          </div>
        </div>
      </section>

      <section className="about-mission-vision container">
        <div className="mv-grid">
          <div className="mv-card">
            <h3>Our Mission</h3>
            <p>
              To deliver high-quality education that prepares students for the challenges of
              tomorrow while instilling strong values, leadership skills, and a lifelong love for learning.
            </p>
          </div>
          <div className="mv-card">
            <h3>Our Vision</h3>
            <p>
              To shape responsible, skilled, and innovative individuals who contribute positively to society.
              We focus on academic excellence, personal growth, and social responsibility.
            </p>
          </div>
        </div>
      </section>

      <section className="about-values">
        <div className="container">
          <h3 className="section-title">What We Value</h3>
          <div className="values-grid">
            <div className="value-item">
              <h4>Excellence</h4>
              <p>High standards in teaching, learning, and achievement.</p>
            </div>
            <div className="value-item">
              <h4>Integrity</h4>
              <p>Honesty, respect, and responsibility in everything we do.</p>
            </div>
            <div className="value-item">
              <h4>Innovation</h4>
              <p>Modern methods, smart classrooms, and experiential learning.</p>
            </div>
            <div className="value-item">
              <h4>Care</h4>
              <p>A safe, inclusive, and supportive environment for every child.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
