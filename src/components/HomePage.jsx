import React from 'react';
import './HomePage.css';
import headerImage from '../assets/headerImage.jpg'; // Corrected import
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import headerImage1 from "../assets/headerImage1.jpg";
import headerImage2 from "../assets/headerImage2.jpg";
import headerImage3 from "../assets/headerImage3.jpg";
import NoticeScroller from './NoticeScroller';
import n1 from "../assets/n1.png";
import n2 from "../assets/n2.png";
import n3 from "../assets/n3.png";
import n4 from "../assets/n4.png";
import nanaji from "../assets/nanaji.jpg";
import mami from "../assets/mami.jpg"; 
import mama from "../assets/mama.jpg";

const HomePage = () => {
  return (
    <>
      {/* Header Image */}
      <img
        src={headerImage}
        alt="School Header"
        style={{
          width: '100%',
          height: 'auto',
        }}
      />


<div
  style={{
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginTop: '30px',
    padding: '10px',
    gap: '20px',
  }}
>
  <div
    style={{
      display: 'flex',
      flexWrap: 'wrap',
      border: '1px solid #ddd',
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
      width: '100%',
      maxWidth: '900px',
      backgroundColor: '#ffffff',
      alignItems: 'center',
      margin: 'auto',
      padding: '20px',
      gap: '20px',
      flexDirection: 'row',
    }}
  >
    {/* Image Section */}
    <div style={{ flex: '1 1 300px', textAlign: 'center' }}>
      <img
        src={nanaji}
        alt="Dr. Mahavir Singh"
        style={{
          width: '100%',
          maxWidth: '300px',
          height: 'auto',
          borderRadius: '8px',
          objectFit: 'cover',
        }}
      />
      <div
        style={{
          marginTop: '10px',
          fontWeight: '600',
          fontSize: '18px',
          color: '#333',
        }}
      >
        Dr. Mahavir Singh
      </div>
    </div>

    {/* Text Section */}
    <div style={{ flex: '2 1 500px', textAlign: 'center' }}>
      <h3
        style={{
          marginBottom: '12px',
          fontSize: '22px',
          color: '#333',
          fontWeight: '700',
          borderBottom: '2px solid #007bff',
          paddingBottom: '5px',
          display: 'inline-block',
        }}
      >
        Founder’s Message
      </h3>
      <p
        style={{
          fontSize: '16px',
          lineHeight: '1.7',
          color: '#555',
          textAlign: 'justify',
        }}
      >
        Education is the foundation of a brighter future. At
        <strong style={{ color: '#007bff' }}> Vishwa Bharti Vidya Niketan</strong>,
        we strive to nurture young minds with knowledge, values, and innovation.
        Our mission is to create a learning environment that inspires curiosity
        and excellence. With dedicated educators and a strong vision, we prepare
        students for success in life. Together, let’s shape a world of wisdom and
        opportunity.
      </p>
    </div>
  </div>

  {/* Right Side - NoticeScroller Section */}
  <div
    style={{
      width: '28%',
      minWidth: '300px',
      marginTop: '20px',
      textAlign: 'center',
    }}
  >
    <h3 style={{ fontSize: '28px' }}>Important Notices</h3>
    <NoticeScroller />
  </div>
</div>



      {/* Cards Section */}
      <div className="card-container">
        {/* First Card */}
        <div className="card-wrapper">
          <div className="card1">
            <img src={mama} alt="Card Image" />

            <div className="card-content1">
              <p className="card-body1">Education shapes futures; we strive for excellence.</p>
            </div>
          </div>
          {/* Title Below the Image */}
          <h6 className="card-title1">Mr. Avnish Kumar Singh</h6>
          <p>(Chairman)</p>
        </div>

        {/* Second Card */}
        <div className="card-wrapper">
          <div className="card1">
            <img src={mami} alt="Second Image" />

            <div className="card-content1">
              <p className="card-body1">Learning today, leading tomorrow.</p>
            </div>
          </div>
          <h6 className="card-title1">Mrs. Charu Singh</h6>
          <p>(Principal)</p>
        </div>
      </div>

      {/* Hero Section with Cards */}
      <section
        style={{
          textAlign: 'center',
          padding: '50px',
          backgroundColor: '#006666',
          color: '#d1f2eb',
          borderRadius: '8px',
          marginBottom: '30px',
        }}
      >
        {/* Cards Section */}
        <section style={{ padding: '30px' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '30px', color: '#fae5d3 '}}>Why Choose Us?</h2>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '20px',
              maxWidth: '1200px',
              margin: '0 auto',
            }}
          >
            {/* Card 1 */}
            <div
              style={{
                border: '1px solid #ddd',
                borderRadius: '8px',
                padding: '20px',
                width: '300px',
                textAlign: 'center',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              }}
            >
              <h3>Qualified Teachers</h3>
              <p>
                Our faculty members are highly experienced and dedicated to helping students achieve their potential.
              </p>
            </div>

            {/* Card 2 */}
            <div
              style={{
                border: '1px solid #ddd',
                borderRadius: '8px',
                padding: '20px',
                width: '300px',
                textAlign: 'center',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              }}
            >
              <h3>Modern Facilities</h3>
              <p>
                We offer state-of-the-art classrooms, labs, and libraries to provide an excellent learning environment.
              </p>
            </div>

            {/* Card 3 */}
            <div
              style={{
                border: '1px solid #ddd',
                borderRadius: '8px',
                padding: '20px',
                width: '300px',
                textAlign: 'center',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              }}
            >
              <h3>Extracurricular Activities</h3>
              <p>
                Students can explore a variety of sports, arts, and cultural activities for holistic development.
              </p>
            </div>
          </div>
        </section>
      </section>

      {/* Carousel Section */}
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={headerImage1}
            alt="First slide"
            style={{ height: "400px", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h3>First Slide Label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={headerImage2}
            alt="Second slide"
            style={{ height: "400px", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h3>Second Slide Label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={headerImage3}
            alt="Third slide"
            style={{ height: "400px", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h3>Third Slide Label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* News and Event Section */}
      <div style={{ marginTop: '50px', padding: '0 20px' }}>
        <h2 style={{ textAlign: 'center', fontSize: '32px', fontWeight: 'bold' }}>News and Events</h2>

        {/* First Row: YouTube Video and Upcoming Event */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', marginTop: '30px' }}>
  {/* YouTube Video */}
  <iframe 
    width="100%" 
    height="315"
    src="https://www.youtube.com/embed/ClzPF3mlQPc?si=Xw1-gYQhDNAUf4Fe"
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerPolicy="strict-origin-when-cross-origin"
    allowFullScreen
    style={{ 
      flex: '1 1 48%', 
      maxWidth: '500px', 
      borderRadius: '10px', 
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      minWidth: '280px'
    }}
  />

  {/* Upcoming Event Box */}
  <div 
    style={{ 
      flex: '1 1 48%', 
      maxWidth: '500px', 
      padding: '20px', 
      backgroundColor: '#f5f5f5', 
      borderRadius: '10px', 
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      minWidth: '280px',
      textAlign: 'center'
    }}
  >
    <h3 style={{ marginBottom: '10px', fontSize: '22px', fontWeight: 'bold', color: '#333' }}>📅 Upcoming Event</h3>
    <p style={{ fontSize: '16px', color: '#555' }}>Join us for an exciting event filled with learning and networking opportunities.</p>
  </div>
</div>

        {/* Second Row: Remaining News Items */}
        <div
           style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px',
            marginTop: '30px',
            padding: '20px',
          }}
        >
          {[
            { imgSrc: n1},
            { imgSrc: n2},
            { imgSrc: n4},
            { imgSrc: n3},
          ].map((newsItem, index) => (
            <div
      key={index}
      style={{
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden',
        width: '100%',
        height: 'auto', // Allow height to adjust dynamically
      }}
    >
      <img
        src={newsItem.imgSrc}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain', // Ensures the full image is visible without cropping
          borderRadius: '10px',
          display: 'block', // Prevents unwanted spacing
        }}
      />
    </div>
  ))}
</div>
      </div>
    </>
  );
};

export default HomePage;
