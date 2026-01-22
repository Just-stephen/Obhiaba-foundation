import { useState, useEffect } from "react";
import { sponsors } from "../data/sponsors";
import { Link } from 'react-router-dom';
import SponsorCard from "../components/SponsorCard";

const teamImages = [
  '/images/Teams/ALMIGHTY FC.jpeg',
  '/images/Teams/Dominion FC.jpeg',
  '/images/Teams/KIZA FC.jpeg',
  '/images/Teams/MAKANAKI FC.jpeg',
  '/images/Teams/YOUNG HEROES FC.jpeg'
];

const teams = [
  { id: 1, name: 'ALMIGHTY FC', image: '/images/Teams/ALMIGHTY FC.jpeg' },
  { id: 2, name: 'Dominion FC', image: '/images/Teams/Dominion FC.jpeg' },
  { id: 3, name: 'KIZA FC', image: '/images/Teams/KIZA FC.jpeg' },
  { id: 4, name: 'MAKANAKI FC', image: '/images/Teams/MAKANAKI FC.jpeg' },
  { id: 5, name: 'YOUNG HEROES FC', image: '/images/Teams/YOUNG HEROES FC.jpeg' }
];

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % teamImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentImageIndex(index);
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + teamImages.length) % teamImages.length);
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % teamImages.length);
  };

  return (
    <>
      <div 
        className="mainImage"
        style={{ 
          position: 'relative',
          width: '100%',
          height: '500px',
          overflow: 'hidden'
        }}
      >
        {teamImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Team ${index + 1}`}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: index === currentImageIndex ? 1 : 0,
              transition: 'opacity 0.5s ease-in-out'
            }}
          />
        ))}

        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0, 0, 0, 0.4)' }}></div>

        <div className="position-absolute top-50 start-50 translate-middle text-center text-white" style={{ zIndex: 10 }}>
          <h1 className="display-6 fw-bold mb-2">Obhiaba Foundation</h1>
          <p className="lead text-white fw-normal">Welcome to the official site. Meet the squad and explore player profiles.</p>
          <Link to="/players" className="btn btn-dark">View Full Gallery</Link>
        </div>

        <button 
          onClick={goToPrevious}
          className="btn btn-light"
          style={{
            position: 'absolute',
            left: '15px',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 10,
            borderRadius: '50%',
            width: '45px',
            height: '45px',
            padding: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          &#10094;
        </button>

        <button 
          onClick={goToNext}
          className="btn btn-light"
          style={{
            position: 'absolute',
            right: '15px',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 10,
            borderRadius: '50%',
            width: '45px',
            height: '45px',
            padding: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          &#10095;
        </button>

        <div style={{ position: 'absolute', bottom: '15px', left: '50%', transform: 'translateX(-50%)', zIndex: 10, display: 'flex', gap: '8px' }}>
          {teamImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                border: 'none',
                backgroundColor: index === currentImageIndex ? 'white' : 'rgba(255, 255, 255, 0.5)',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            />
          ))}
        </div>
      </div>

      <div className="container py-4">
        <section>
          <h2 className="mb-3">Football Teams</h2>
          <div className="row">
            {teams.map(team => (
              <div className="col-md-4 mb-3" key={team.id}>
                <div className="card h-100 shadow-sm" style={{ overflow: 'hidden', borderRadius: '10px', border: 'none' }}>
                  <div style={{ position: 'relative', overflow: 'hidden', paddingBottom: '100%', height: '0' }}>
                    <img 
                      src={team.image} 
                      alt={team.name} 
                      className="img-fluid" 
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.3s ease'
                      }}
                      onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                      onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title text-center fw-bold">{team.name}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-4">
          <h2 className="mb-3">Sponsors</h2>
          <div className="row">
            {sponsors.map(s => (
              <div className="col-md-4 mb-3" key={s.id}>
                <SponsorCard sponsor={s} />
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
