import React from 'react';

const images = [
  '/images/players/portrait-man-with-soccer-ball.jpg',
  '/images/players/medium-shot-man-holding-football.jpg',
  '/images/players/view-adult-male-soccer-player.jpg',
  '/images/players/close-up-business-man-holding-soccer-ball.jpg'
];

export default function Gallery() {
  return (
    <div className="container my-4">
      <h2>Gallery</h2>
      <div className="row mt-3">
        {images.map((src, i) => (
          <div key={i} className="col-sm-6 col-md-3 mb-3">
            <div className="card">
              <img src={src} alt={`gallery-${i}`} className="img-fluid" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
