import React from 'react';

import activity from '../Gassets/activity.jpg';
import activity1 from '../Gassets/activity1.jpg';
import activity2 from '../Gassets/activity2.jpg';
import award from '../Gassets/award.jpg';
import certificate from '../Gassets/certificate.jpg';
import choteRadhaKrish from '../Gassets/chote radha krish.jpg';
import computerlab from '../Gassets/computerlab.jpg';
import dance from '../Gassets/dance.jpg';
import fire from '../Gassets/fire.jpg';
import functionCover from '../Gassets/function.jpg';
import function1 from '../Gassets/function1.jpg';
import function2 from '../Gassets/function2.jpg';
import function3 from '../Gassets/function3.jpg';
import function4 from '../Gassets/function4.jpg';
import havan from '../Gassets/havan.jpg';
import meditation from '../Gassets/meditation.jpg';
import mehandi from '../Gassets/mehandi.jpg';
import radhaKrishan from '../Gassets/radha krishan.jpg';
import ramsita from '../Gassets/ramsita.jpg';
import reception from '../Gassets/reception.jpg';
import schoolFlagCertificate from '../Gassets/school flag certicicate.jpg';
import science from '../Gassets/science.jpg';
import science1 from '../Gassets/science1.jpg';
import science2 from '../Gassets/science2.jpg';
import science3 from '../Gassets/science3.jpg';
import science4 from '../Gassets/science4.jpg';

const galleryItems = [
  { img: activity, title: 'Activity', desc: 'Various school activities' },
  { img: activity1, title: 'Activity 1', desc: 'Students engaged in learning' },
  { img: activity2, title: 'Activity 2', desc: 'Creative classroom moments' },
  { img: award, title: 'Award Ceremony', desc: 'Celebrating achievements' },
  { img: certificate, title: 'Certificate Distribution', desc: 'Honoring excellence' },
  { img: choteRadhaKrish, title: 'Radha Krishna', desc: 'Cultural performance' },
  { img: computerlab, title: 'Computer Lab', desc: 'Hands-on digital learning' },
  { img: dance, title: 'Dance Performance', desc: 'Annual day dance' },
  { img: fire, title: 'Fire Drill', desc: 'Safety training at school' },
  { img: functionCover, title: 'School Function', desc: 'Annual celebration' },
  { img: function1, title: 'Annual Day', desc: 'Cultural program' },
  { img: function2, title: 'Function 2', desc: 'Stage activities' },
  { img: function3, title: 'Sports Day', desc: 'Track and field events' },
  { img: function4, title: 'Function 4', desc: 'Student talents' },
  { img: havan, title: 'Havan Ceremony', desc: 'Traditional ceremony' },
  { img: meditation, title: 'Meditation Session', desc: 'Mindfulness at school' },
  { img: mehandi, title: 'Mehandi Event', desc: 'Cultural art' },
  { img: radhaKrishan, title: 'Radha Krishna Act', desc: 'Dramatic performance' },
  { img: ramsita, title: 'Ram Sita Play', desc: 'Mythological drama' },
  { img: reception, title: 'Reception', desc: 'School reception area' },
  { img: schoolFlagCertificate, title: 'Flag Certificate', desc: 'Ceremony highlights' },
  { img: science, title: 'Science Exhibit', desc: 'Showcasing projects' },
  { img: science1, title: 'Science Fair', desc: 'Student experiments' },
  { img: science2, title: 'Lab Work', desc: 'Practical learning' },
  { img: science3, title: 'Science Project', desc: 'Innovative ideas' },
  { img: science4, title: 'Biology Lab', desc: 'Experiments in biology' },
];

const Gallery = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Gallery</h1>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '20px',
        padding: '0 10px'
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
  );
};

export default Gallery;
