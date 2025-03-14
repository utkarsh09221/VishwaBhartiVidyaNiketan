import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Importing all images from Gassets
import activity from '../Gassets/activity.jpg'; // Ensure this path is correct

import activity1 from '../Gassets/activity1.jpg'; // Ensure this path is correct

import activity2 from '../Gassets/activity2.jpg'; // Ensure this path is correct

import award from '../Gassets/award.jpg'; // Ensure this path is correct

import certificate from '../Gassets/certificate.jpg'; // Ensure this path is correct

import choteRadhaKrish from '../Gassets/chote radha krish.jpg'; // Ensure this path is correct

import computerlab from '../Gassets/computerlab.jpg'; // Ensure this path is correct

import dance from '../Gassets/dance.jpg'; // Ensure this path is correct

import fire from '../Gassets/fire.jpg'; // Ensure this path is correct

import schoolFunction from '../Gassets/function.jpg'; // Ensure this path is correct


import function1 from '../Gassets/function1.jpg'; // Ensure this path is correct

import function2 from '../Gassets/function2.jpg'; // Ensure this path is correct

import function3 from '../Gassets/function3.jpg'; // Ensure this path is correct

import function4 from '../Gassets/function4.jpg'; // Ensure this path is correct

import havan from '../Gassets/havan.jpg'; // Ensure this path is correct

import meditation from '../Gassets/meditation.jpg'; // Ensure this path is correct

import mehandi from '../Gassets/mehandi.jpg'; // Ensure this path is correct

import radhaKrishan from '../Gassets/radha krishan.jpg'; // Ensure this path is correct

import ramsita from '../Gassets/ramsita.jpg'; // Ensure this path is correct

import reception from '../Gassets/reception.jpg'; // Ensure this path is correct

import schoolFlagCertificate from '../Gassets/school flag certicicate.jpg'; // Ensure this path is correct


import science from '../Gassets/science.jpg'; // Ensure this path is correct

import science1 from '../Gassets/science1.jpg'; // Ensure this path is correct

import science2 from '../Gassets/science2.jpg'; // Ensure this path is correct

import science3 from '../Gassets/science3.jpg'; // Ensure this path is correct

import science4 from '../Gassets/science4.jpg'; // Ensure this path is correct


const Gallery = () => {
  const galleryItems = [
    { img: activity, title: 'Activity', desc: 'Various school activities' },
    { img: activity1, title: 'Activity 1', desc: 'Description for activity 1' },
    { img: activity2, title: 'Activity 2', desc: 'Description for activity 2' },
    { img: award, title: 'Award Ceremony', desc: 'Award distribution event' },
    { img: certificate, title: 'Certificate Distribution', desc: 'Students receiving certificates' },
    { img: choteRadhaKrish, title: 'Radha Krishna', desc: 'Cultural performance of Radha Krishna' },
    { img: computerlab, title: 'Computer Lab', desc: 'State-of-the-art computer lab' },
    { img: dance, title: 'Dance Performance', desc: 'Annual dance performance' },
    { img: fire, title: 'Fire Drill', desc: 'School safety fire drill' },
    { img: schoolFunction, title: 'School Function', desc: 'Annual school function celebration' },

    { img: function1, title: 'Annual Day', desc: 'Annual day cultural program' },
    { img: function2, title: 'Function 2', desc: 'Description for function 2' },
    { img: function3, title: 'Sports Day', desc: 'Annual sports day event' },
    { img: function4, title: 'Function 4', desc: 'Description for function 4' },
    { img: havan, title: 'Havan Ceremony', desc: 'Traditional havan ceremony' },
    { img: meditation, title: 'Meditation Session', desc: 'Students participating in meditation' },
    { img: mehandi, title: 'Mehandi Event', desc: 'Mehandi application event' },
    { img: radhaKrishan, title: 'Radha Krishna Act', desc: 'Cultural drama performance' },
    { img: ramsita, title: 'Ram Sita Play', desc: 'Mythological drama event' },
    { img: reception, title: 'Reception', desc: 'School reception area' },
    { img: schoolFlagCertificate, title: 'Flag Certificate', desc: 'School flag certificate ceremony' },
    { img: science, title: 'Science Exhibit', desc: 'Science exhibit showcasing projects' },
    { img: science1, title: 'Science Fair', desc: 'Students showcasing science projects' },
    { img: science2, title: 'Lab Work', desc: 'Students performing experiments' },
    { img: science3, title: 'Science Project', desc: 'Student science project display' },
    { img: science4, title: 'Biology Lab', desc: 'Biology experiments in school lab' },
  ];

  return (
    <div>
      <Header />
      <div style={{ padding: '20px' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Gallery</h1>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '20px',
          padding: '0 20px'
        }}>
          {galleryItems.map((item, index) => (
            <div key={index} style={{ textAlign: 'center' }}>
              <img 
                src={item.img} 
                alt={item.title} 
                style={{ 
                  width: '100%', 
                  height: '200px', 
                  objectFit: 'cover',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                }}
              />
              <h3 style={{ margin: '10px 0', fontSize: '18px' }}>{item.title}</h3>
              <p style={{ marginTop: '5px', color: '#666' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
