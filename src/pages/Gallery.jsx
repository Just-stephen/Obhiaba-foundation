import React, { useState } from 'react';

const categories = {
  'Season 1': [
    '/images/season 1/banner.jpg',
    '/images/season 1/471549557_10232921222686182_739173836218548572_n.jpg',
    '/images/season 1/471551838_10232921206605780_4421052278077894405_n.jpg',
    '/images/season 1/81039916_10219578779853450_7329702968725340160_n.jpg',
    '/images/season 1/81192295_10219578973778298_4391166007855546368_n.jpg',
    '/images/season 1/81556669_10219578969338187_8478219816866414592_n.jpg',
    '/images/season 1/81562336_10219578970618219_609851374250754048_n.jpg',
    '/images/season 1/81705001_10219578781253485_5767389704064335872_n.jpg',
    '/images/season 1/81715382_10219578776693371_9004660662781083648_n.jpg',
    '/images/season 1/81749961_10219578970178208_6664077505651015680_n.jpg',
    '/images/season 1/81854029_10219578974938327_3711949309751590912_n.jpg',
    '/images/season 1/81898575_10219578777693396_779925980318793728_n.jpg',
    '/images/season 1/81969423_10219578967698146_3650482529539981312_n.jpg',
    '/images/season 1/82000285_10219578971498241_8007639822409662464_n.jpg',
    '/images/season 1/82053210_10219578974578318_7577883131324137472_n.jpg',
    '/images/season 1/82057388_10219578777173383_6923399298746941440_n.jpg',
    '/images/season 1/82207907_10219578974058305_5159689408349208576_n.jpg'
  ],
  'Season 2': [
    '/images/season 2/banner.jpeg',
    '/images/season 2/WhatsApp Image 2026-01-23 at 06.24.50 (1).jpeg',
    '/images/season 2/WhatsApp Image 2026-01-23 at 06.24.51 (1).jpeg',
    '/images/season 2/WhatsApp Image 2026-01-23 at 06.24.52 (1).jpeg',
    '/images/season 2/WhatsApp Image 2026-01-23 at 06.24.52 (2).jpeg',
    '/images/season 2/WhatsApp Image 2026-01-23 at 06.24.53 (1).jpeg',
    '/images/season 2/WhatsApp Image 2026-01-23 at 06.24.53.jpeg',
    '/images/season 2/WhatsApp Image 2026-01-23 at 06.24.54 (2).jpeg',
    '/images/season 2/WhatsApp Image 2026-01-23 at 06.24.54.jpeg',
    '/images/season 2/WhatsApp Image 2026-01-23 at 06.24.56 (1).jpeg',
    '/images/season 2/WhatsApp Image 2026-01-23 at 06.24.56 (2).jpeg',
    '/images/season 2/WhatsApp Image 2026-01-23 at 06.24.57 (1).jpeg',
    '/images/season 2/WhatsApp Image 2026-01-23 at 06.24.57.jpeg',
    '/images/season 2/WhatsApp Image 2026-01-23 at 06.24.58.jpeg',
    '/images/season 2/WhatsApp Image 2026-01-23 at 06.25.00 (1).jpeg',
    '/images/season 2/WhatsApp Image 2026-01-23 at 06.25.01 (2).jpeg',
    '/images/season 2/WhatsApp Image 2026-01-23 at 06.25.02 (2).jpeg',
    '/images/season 2/WhatsApp Image 2026-01-23 at 06.25.02.jpeg',
    '/images/season 2/WhatsApp Image 2026-01-23 at 06.25.03 (1).jpeg',
    '/images/season 2/WhatsApp Image 2026-01-23 at 06.25.03.jpeg',
    '/images/season 2/WhatsApp Image 2026-01-23 at 06.25.04 (1).jpeg',
    '/images/season 2/WhatsApp Image 2026-01-23 at 06.25.04.jpeg',
    '/images/season 2/WhatsApp Image 2026-01-23 at 06.25.06 (1).jpeg',
    '/images/season 2/WhatsApp Image 2026-01-23 at 06.25.07 (2).jpeg',
    '/images/season 2/WhatsApp Image 2026-01-23 at 06.25.07 (3).jpeg',
    '/images/season 2/WhatsApp Image 2026-01-23 at 06.25.07.jpeg',
    '/images/season 2/WhatsApp Image 2026-01-23 at 06.25.08 (1).jpeg',
    '/images/season 2/WhatsApp Image 2026-01-23 at 06.25.08 (2).jpeg',
    '/images/season 2/WhatsApp Image 2026-01-23 at 06.25.08.jpeg',
    '/images/season 2/WhatsApp Image 2026-01-23 at 06.25.09 (1).jpeg',
    '/images/season 2/WhatsApp Image 2026-01-23 at 06.25.09 (2).jpeg',
    '/images/season 2/WhatsApp Image 2026-01-23 at 06.25.09.jpeg',
    '/images/season 2/WhatsApp Image 2026-01-23 at 06.25.10 (3).jpeg',
    '/images/season 2/WhatsApp Image 2026-01-23 at 06.25.11 (1).jpeg',
    '/images/season 2/WhatsApp Image 2026-01-23 at 06.25.11 (2).jpeg',
    '/images/season 2/WhatsApp Image 2026-01-23 at 06.25.11.jpeg'
  ],
  'Season 3': [
    '/images/season 3/banner.jpeg',
    '/images/season 3/WhatsApp Image 2026-01-23 at 06.28.32 (1).jpeg',
    '/images/season 3/WhatsApp Image 2026-01-23 at 06.28.32 (2).jpeg',
    '/images/season 3/WhatsApp Image 2026-01-23 at 06.28.32.jpeg',
    '/images/season 3/WhatsApp Image 2026-01-23 at 06.28.35.jpeg',
    '/images/season 3/WhatsApp Image 2026-01-23 at 06.28.36 (1).jpeg',
    '/images/season 3/WhatsApp Image 2026-01-23 at 06.28.36 (2).jpeg',
    '/images/season 3/WhatsApp Image 2026-01-23 at 06.28.37 (1).jpeg',
    '/images/season 3/WhatsApp Image 2026-01-23 at 06.28.37.jpeg',
    '/images/season 3/WhatsApp Image 2026-01-23 at 06.28.38 (1).jpeg',
    '/images/season 3/WhatsApp Image 2026-01-23 at 06.28.39 (1).jpeg'
  ],
  'Season 4': [
    '/images/season 4/banner.jpeg',
    '/images/season 4/WhatsApp Image 2026-01-23 at 06.29.08 (1).jpeg',
    '/images/season 4/WhatsApp Image 2026-01-23 at 06.29.08.jpeg',
    '/images/season 4/WhatsApp Image 2026-01-23 at 06.29.09 (1).jpeg',
    '/images/season 4/WhatsApp Image 2026-01-23 at 06.29.09 (2).jpeg',
    '/images/season 4/WhatsApp Image 2026-01-23 at 06.29.09.jpeg',
    '/images/season 4/WhatsApp Image 2026-01-23 at 06.29.11.jpeg',
    '/images/season 4/WhatsApp Image 2026-01-23 at 06.29.12.jpeg',
    '/images/season 4/WhatsApp Image 2026-01-23 at 06.29.13.jpeg',
    '/images/season 4/WhatsApp Image 2026-01-23 at 06.29.14 (2).jpeg',
    '/images/season 4/WhatsApp Image 2026-01-23 at 06.29.15.jpeg',
    '/images/season 4/WhatsApp Image 2026-01-23 at 06.29.16 (1).jpeg',
    '/images/season 4/WhatsApp Image 2026-01-23 at 06.29.16 (2).jpeg',
    '/images/season 4/WhatsApp Image 2026-01-23 at 06.29.16.jpeg',
    '/images/season 4/WhatsApp Image 2026-01-23 at 06.29.17 (1).jpeg',
    '/images/season 4/WhatsApp Image 2026-01-23 at 06.29.17.jpeg',
    '/images/season 4/WhatsApp Image 2026-01-23 at 06.29.18 (1).jpeg',
    '/images/season 4/WhatsApp Image 2026-01-23 at 06.29.18 (2).jpeg',
    '/images/season 4/WhatsApp Image 2026-01-23 at 06.29.18.jpeg',
    '/images/season 4/WhatsApp Image 2026-01-23 at 06.29.19 (1).jpeg',
    '/images/season 4/WhatsApp Image 2026-01-23 at 06.29.19.jpeg',
    '/images/season 4/WhatsApp Image 2026-01-23 at 06.29.20 (1).jpeg',
    '/images/season 4/WhatsApp Image 2026-01-23 at 06.29.20.jpeg'
  ],
  'Season 5': [
    '/images/season 5/banner.jpeg',
    '/images/season 5/WhatsApp Image 2026-01-23 at 06.30.05.jpeg',
    '/images/season 5/WhatsApp Image 2026-01-23 at 06.30.06.jpeg',
    '/images/season 5/WhatsApp Image 2026-01-23 at 06.30.07.jpeg',
    '/images/season 5/WhatsApp Image 2026-01-23 at 06.30.10.jpeg',
    '/images/season 5/WhatsApp Image 2026-01-23 at 06.30.11.jpeg',
    '/images/season 5/WhatsApp Image 2026-01-23 at 06.30.13.jpeg',
    '/images/season 5/WhatsApp Image 2026-01-23 at 06.34.30.jpeg',
    '/images/season 5/WhatsApp Image 2026-01-23 at 06.34.34.jpeg',
    '/images/season 5/WhatsApp Image 2026-01-23 at 06.34.36.jpeg'
  ],
  'Season 6': [
    '/images/season 6/banner.jpeg',
    '/images/season 6/WhatsApp Image 2026-01-23 at 06.46.24.jpeg'
  ],
  'Season 7': [
    '/images/season 7/banner.jpeg',
    '/images/season 7/WhatsApp Image 2026-01-23 at 06.34.59 (1).jpeg',
    '/images/season 7/WhatsApp Image 2026-01-23 at 06.35.00 (4).jpeg',
    '/images/season 7/WhatsApp Image 2026-01-23 at 06.35.02 (1).jpeg',
    '/images/season 7/WhatsApp Image 2026-01-23 at 06.35.02 (4).jpeg',
    '/images/season 7/WhatsApp Image 2026-01-23 at 06.35.03 (1).jpeg',
    '/images/season 7/WhatsApp Image 2026-01-23 at 06.35.08 (4).jpeg',
    '/images/season 7/WhatsApp Image 2026-01-23 at 06.35.08.jpeg',
    '/images/season 7/WhatsApp Image 2026-01-23 at 06.35.09.jpeg',
    '/images/season 7/WhatsApp Image 2026-01-23 at 06.35.10 (1).jpeg',
    '/images/season 7/WhatsApp Image 2026-01-23 at 06.35.10 (3).jpeg',
    '/images/season 7/WhatsApp Image 2026-01-23 at 06.35.10.jpeg',
    '/images/season 7/WhatsApp Image 2026-01-23 at 06.35.11 (1).jpeg',
    '/images/season 7/WhatsApp Image 2026-01-23 at 06.35.11.jpeg',
    '/images/season 7/WhatsApp Image 2026-01-23 at 06.35.12.jpeg'
  ]
};

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('Season 1');

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

      {activeCategory === 'Season 5' && (
        <div className="alert alert-info mb-4" style={{ textAlign: 'center', fontSize: '1.1rem', borderRadius: '10px' }}>
          <h5 style={{ marginBottom: '0.5rem' }}>Impact Story</h5>
          <p style={{ marginBottom: 0 }}>
            Over <strong>85 widows</strong> were empowered through this initiative, providing them with support, resources, and hope for a better future.
          </p>
        </div>
      )}

      <div className="row mt-4 g-3">
        {categories[activeCategory].map((src, i) => (
          <div key={i} className="col-sm-6 col-md-4 col-lg-3">
            <div className="card h-100 shadow-sm" style={{ overflow: 'hidden', borderRadius: '10px', border: 'none', backgroundColor: '#f5f5f5' }}>
              <div style={{ position: 'relative', overflow: 'hidden', paddingBottom: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
                    objectFit: 'contain',
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
