import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg header-gradient sticky-top">
      <div className="container">
        <Link className="navbar-brand fw-bold text-white" to="/">Obhiaba Foundation</Link>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={() => setNavOpen(!navOpen)}
          aria-controls="navbarNav"
          aria-expanded={navOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${navOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link text-white" to="/" onClick={() => setNavOpen(false)}>Home</Link></li>
            <li className="nav-item"><Link className="nav-link text-white" to="/players" onClick={() => setNavOpen(false)}>Players</Link></li>
            <li className="nav-item"><Link className="nav-link text-white" to="/sponsorship" onClick={() => setNavOpen(false)}>Sponsorship</Link></li>
            <li className="nav-item"><Link className="nav-link text-white" to="/about" onClick={() => setNavOpen(false)}>About</Link></li>
            <li className="nav-item"><Link className="nav-link text-white" to="/events" onClick={() => setNavOpen(false)}>Events</Link></li>
            <li className="nav-item"><Link className="nav-link text-white" to="/gallery" onClick={() => setNavOpen(false)}>Gallery</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
