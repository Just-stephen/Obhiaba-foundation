import React, { useState } from 'react';

const categories = {
  'First Edition': [
    '/images/first edition/first edit 1.jpeg',
    '/images/first edition/first edit 2.jpeg',
    '/images/first edition/first edit 3.jpeg',
    '/images/first edition/first edit 4.jpeg',
    '/images/first edition/first edit 5.jpeg',
    '/images/first edition/first edit 6.jpeg',
    '/images/first edition/first edit 7.jpeg',
    '/images/first edition/first edit 8.jpeg',
    '/images/first edition/first edit 9.jpeg',
    '/images/first edition/first edit 10.jpeg',
    '/images/first edition/first edit 11.jpeg'
  ],
  'Second Edition': [
    '/images/second edition/one.jpeg',
    '/images/second edition/two.jpeg',
    '/images/second edition/three.jpeg',
    '/images/second edition/four.jpeg',
    '/images/second edition/five.jpeg',
    '/images/second edition/six.jpeg'
  ],
  'Third Edition': [
    '/images/third edition/1.jpeg',
    '/images/third edition/2.jpeg',
    '/images/third edition/3.jpeg',
    '/images/third edition/4.jpeg',
    '/images/third edition/5.jpeg',
    '/images/third edition/6.jpeg',
    '/images/third edition/7.jpeg'
  ],
  'Fourth Edition': [
    '/images/fourth edition/WhatsApp Image 2026-01-20 at 15.22.33 (1).jpeg',
    '/images/fourth edition/WhatsApp Image 2026-01-20 at 15.22.33.jpeg',
    '/images/fourth edition/WhatsApp Image 2026-01-20 at 15.22.34 (1).jpeg',
    '/images/fourth edition/WhatsApp Image 2026-01-20 at 15.22.34 (2).jpeg',
    '/images/fourth edition/WhatsApp Image 2026-01-20 at 15.22.34.jpeg',
    '/images/fourth edition/WhatsApp Image 2026-01-20 at 15.22.35 (1).jpeg',
    '/images/fourth edition/WhatsApp Image 2026-01-20 at 15.22.35 (2).jpeg',
    '/images/fourth edition/WhatsApp Image 2026-01-20 at 15.22.35.jpeg',
    '/images/fourth edition/WhatsApp Image 2026-01-20 at 15.22.36.jpeg'
  ],
  'Fifth Edition': [
    '/images/fifth edition/1.jpeg',
    '/images/fifth edition/2.jpeg',
    '/images/fifth edition/3.jpeg',
    '/images/fifth edition/4.jpeg',
    '/images/fifth edition/5.jpeg',
    '/images/fifth edition/6.jpeg',
    '/images/fifth edition/7.jpeg',
    '/images/fifth edition/8.jpeg'
  ],
  'Empowerment': [
    '/images/empowerment/WhatsApp Image 2026-01-20 at 15.33.56.jpeg',
    '/images/empowerment/WhatsApp Image 2026-01-20 at 15.41.27.jpeg',
    '/images/empowerment/WhatsApp Image 2026-01-20 at 15.41.30.jpeg',
    '/images/empowerment/WhatsApp Image 2026-01-20 at 15.43.59.jpeg',
    '/images/empowerment/WhatsApp Image 2026-01-20 at 15.44.02.jpeg',
    '/images/empowerment/WhatsApp Image 2026-01-20 at 15.44.06.jpeg',
    '/images/empowerment/WhatsApp Image 2026-01-20 at 15.44.08.jpeg',
    '/images/empowerment/WhatsApp Image 2026-01-20 at 15.44.20.jpeg'
  ]
};

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('First Edition');

  return (
    <div className="container my-4">
      <h2 className="mb-4 text-center">Gallery</h2>
      
      <div className="mb-5 d-flex justify-content-center flex-wrap gap-2">
        {Object.keys(categories).map(category => (
          <button
            key={category}
            className={`btn btn-lg ${activeCategory === category ? 'btn-primary' : 'btn-outline-secondary'}`}
            onClick={() => setActiveCategory(category)}
            style={{
              borderRadius: '25px',
              fontWeight: activeCategory === category ? '600' : '500',
              padding: '0.5rem 1.5rem',
              transition: 'all 0.3s ease',
              boxShadow: activeCategory === category ? '0 4px 12px rgba(0, 0, 0, 0.15)' : 'none'
            }}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="row mt-4 g-3">
        {categories[activeCategory].map((src, i) => (
          <div key={i} className="col-sm-6 col-md-4 col-lg-3">
            <div className="card h-100 shadow-sm" style={{ overflow: 'hidden', borderRadius: '10px', border: 'none' }}>
              <div style={{ position: 'relative', overflow: 'hidden', paddingBottom: '100%' }}>
                <img 
                  src={src} 
                  alt={`${activeCategory}-${i}`} 
                  className="img-fluid" 
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
