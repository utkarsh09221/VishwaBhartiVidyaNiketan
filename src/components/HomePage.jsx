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

      {/* Container for Image/Text and NoticeScroller Section */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginTop: '30px' }}>
        {/* Left Side - Card and Text Section */}
        <div
          style={{
            display: 'flex',
            border: '1px solid #ddd',
            borderRadius: '10px',
            overflow: 'hidden',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            width: '70%',
            margin: '100px ',
          }}
        >
          {/* Image Section */}
          <div style={{ flex: 1 }}>
            <img
              src={nanaji}
              alt="Image"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                objectFit: 'cover',
                maxHeight: '300px',
              }}
            />
            {/* Text Below Image */}
            <div style={{ textAlign: 'center', marginTop: '10px', fontWeight: 'bold' }}>
              Mahavir Singh
            </div>
          </div>

          {/* Text Section */}
          <div style={{ flex: 2, padding: '20px' }}>
            <h4 style={{ marginBottom: '15px' }}>Founder Message</h4>
            <p style={{ fontSize: '16px', lineHeight: '1.6' }}>
              Education is the foundation of a brighter future. At <strong>Vishwa Bharti Vidya Niketan</strong>, we strive to nurture young minds with knowledge,
              values, and innovation. Our mission is to create a learning environment that inspires curiosity and excellence. With 
              dedicated educators and a strong vision, we prepare students for success in life. Together, let’s shape a world of wisdom and opportunity.
            </p>
          </div>
        </div>

        {/* Right Side - NoticeScroller Section */}
        <div style={{ width: '28%', marginTop: '20px' }}>
          <h3 style={{ textAlign: 'center' }}>Important Notices</h3>
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
          <h6 className="card-title1">Avnish Kumar Singh</h6>
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
          <h6 className="card-title1">Charu Singh</h6>
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
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '30px' }}>
          <iframe 
            width="48%" 
            height="315"
            src="https://www.youtube.com/embed/ClzPF3mlQPc?si=Xw1-gYQhDNAUf4Fe"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            style={{ borderRadius: '10px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}
          />


          <div style={{ width: '48%', padding: '15px', backgroundColor: '#f5f5f5', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>


            <h3 style={{ margin: '10px 0', fontSize: '20px', textAlign: 'center' }}><strong>Upcoming Event</strong></h3>
            <p>Some brief description of the upcoming event.</p>
          </div>
        </div>

        {/* Second Row: Remaining News Items */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px',
            marginTop: '30px',
          }}
        >
          {[ 
            { imgSrc: n1, title: 'News Title 1', desc: 'Another great event description to capture interest.'},
            { imgSrc: n2, title: 'News Title 3', desc: 'Quick highlights of another significant news event.' },
            { imgSrc: n3, title: 'News Title 4', desc: 'A brief description highlighting the significance of this event.' },
            // Removed n4 reference as it was undefined
          ].map((newsItem, index) => (
            <div key={index} style={{ padding: '15px', backgroundColor: '#f5f5f5', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
              <img
                src={newsItem.imgSrc}
                alt={newsItem.title}
                style={{ width: '100%', height: '150px', objectFit: 'container', borderRadius: '8px' }}
              />
              <h3 style={{ margin: '10px 0', fontSize: '20px', textAlign: 'center' }}><strong>{newsItem.title}</strong></h3>
              <p>{newsItem.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
