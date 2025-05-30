import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import SmartClasses from './pages/SmartClasses'; // Importing SmartClasses component

import Contact from './pages/Contact'; // Contact page will be shown on /contact route
import About from './pages/About'; // About page will be shown on /about route
import Gallery from './pages/Gallery';
import Library from './pages/Library'; // Library page will be shown on /library route
import UniformCode from './pages/UniformCode'; // Importing UniformCode component
import Criteria from './pages/Criteria'; // Importing Criteria component
import FeeStructure from './pages/FeeStructure'; // Importing FeeStructure component
import FeePayment from './pages/FeePayment'; // Importing FeePayment component
import Navbar from './components/Header.jsx'; // Explicitly referencing the Header.jsx file
import Footer from './components/Footer';
import RulesReg from './pages/RulesReg'; // Importing RulesReg component
import './App.css';
import admissionImage from './assets/admission.png';
import headerImage from './assets/headerImage.jpg'; // Importing the header image

import ComputerLab from './pages/ComputerLab';
import ScienceLab from './pages/ScienceLab';
import More from './pages/More.jsx';

function App() {
  const [showPreloader, setShowPreloader] = useState(true);
  const [showPopup, setShowPopup] = useState(true); // New state for popup visibility

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPreloader(false);
      document.body.classList.add('loaded');  // Allow scrolling and hide preloader
    }, 3000); // 2.5s for logo fade-in + fade-out

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setShowPopup(false); // Close the popup
  };

  return (
    <BrowserRouter>  {/* Wrap your app in BrowserRouter */}
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        {/* Preloader */}
        {showPreloader ? (
          <div id="preloader" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div className="title">
              <div className="title-inner">
                <div className="cafe">
                  <div className="cafe-inner">Vishwa</div>
                </div>
                <div className="mozart">
                  <div className="mozart-inner">Bharti Vidhya Niketan</div>
                  <div className="mozart-inner" style={{ fontSize: "25px", color: "#2471a3  " }}>30+ years of Excellence</div>
                </div>
              </div>
            </div>
            <img src={headerImage} alt="Header" style={{ width: '70%', height: '100%' }} /> {/* Image on the right */}
          </div>
        ) : (
          <>
            <Navbar />
          </>
        )}

        {/* Popup Overlay for Admission Open */}
        {showPopup && (
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.5)', // Transparent background
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 1000,
            }}
          >
            <div
              style={{
                backgroundColor: '#fff',
                padding: '30px',
                borderRadius: '8px',
                textAlign: 'center',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                position: 'relative',
                maxWidth: '400px', // Limit the width for a better layout
                width: '100%',
              }}
            >
              <h2>Admissions Open!</h2>
              <p>Join us today for a brighter future.</p>

              {/* Close Button */}
              <button
                onClick={closePopup}
                style={{
                  position: 'absolute',
                  top: '10px',
                  right: '10px',
                  backgroundColor: 'transparent',
                  border: 'none',
                  fontSize: '20px',
                  cursor: 'pointer',
                  color: '#333',
                }}
              >
                X
              </button>

              {/* Image Instead of Scroll Down Button */}
              <div style={{ marginTop: '20px' }}>
                <img
                  src={admissionImage}
                  alt="admission"
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '8px',
                    objectFit: 'cover',
                    }}
                />
              </div>
            </div>
          </div>
        )}

        {/* Main Content Area with Routing */}
        <div style={{ flex: 1, paddingTop: '80px' }}>
          <Routes>
            {/* The Home route, this is your homepage */}
            <Route path="/" element={<HomePage />} />
            
            {/* The Contact page is shown when the user visits /contact */}
            <Route path="/contact" element={<Contact />} />
            
            {/* The About page is shown when the user visits /about */}
            <Route path="/library" element={<Library />} /> {/* The Library page is shown when the user visits /library */}
            <Route path="/about" element={<About />} />
            <Route path="/uniform" element={<UniformCode />} /> {/* Route for Uniform Code */}
            <Route path="/criteria" element={<Criteria />} /> {/* Route for Admission Criteria */}
            <Route path="/fee-structure" element={<FeeStructure />} /> {/* Route for Fee Structure */}
            <Route path="/fee-payment" element={<FeePayment />} /> {/* Route for Fee Payment */}
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/rules" element={<RulesReg />} />
            <Route path="/smart-classes" element={<SmartClasses />} /> 
            <Route path="/computer-lab" element={<ComputerLab />} /> 
            <Route path="/science-lab" element={<ScienceLab />} />
            <Route path="/facilities-more" element={<More/>} />
          </Routes>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
