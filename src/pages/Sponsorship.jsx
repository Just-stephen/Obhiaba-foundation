import React, { useState } from 'react';
import { sponsors } from '../data/sponsors';
import SponsorCard from '../components/SponsorCard';

export default function Sponsorship() {
  const [donationAmount, setDonationAmount] = useState(50);

  const handleDonationSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for your donation of $${donationAmount}! Your support means the world to us.`);
    setDonationAmount(50);
  };

  return (
    <div className="container my-4">
      {/* Hero Section */}
      <section className="mb-5">
        <div className="p-5 rounded" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white' }}>
          <h1 className="display-5 fw-bold mb-3">Support Our Mission</h1>
          <p className="lead">Help us empower athletes and communities through football. Your contribution makes a difference.</p>
        </div>
      </section>

      {/* Donation Section */}
      <section className="mb-5">
        <h2 className="mb-4">Make a Donation</h2>
        <div className="row">
          <div className="col-md-6">
            <div className="card shadow-sm p-4">
              <h4 className="card-title mb-4">Donate Now</h4>
              <form onSubmit={handleDonationSubmit}>
                <div className="mb-3">
                  <label htmlFor="amount" className="form-label">Donation Amount</label>
                  <div className="input-group">
                    <span className="input-group-text">$</span>
                    <input 
                      type="number" 
                      className="form-control" 
                      id="amount" 
                      value={donationAmount}
                      onChange={(e) => setDonationAmount(e.target.value)}
                      min="1"
                      step="5"
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label">Quick Select</label>
                  <div className="btn-group w-100" role="group">
                    {[25, 50, 100, 250].map(amount => (
                      <button 
                        key={amount}
                        type="button" 
                        className={`btn ${donationAmount === amount ? 'btn-primary' : 'btn-outline-primary'}`}
                        onClick={() => setDonationAmount(amount)}
                      >
                        ${amount}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" placeholder="your@email.com" required />
                </div>

                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message (Optional)</label>
                  <textarea className="form-control" id="message" rows="3" placeholder="Tell us why you support us..."></textarea>
                </div>

                <button type="submit" className="btn btn-primary w-100 btn-lg">
                  Donate ${donationAmount}
                </button>
              </form>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card shadow-sm p-4 bg-light">
              <h4 className="card-title mb-4">Why Support Us?</h4>
              <ul className="list-unstyled">
                <li className="mb-3">
                  <h5 className="text-primary">🎯 Community Impact</h5>
                  <p className="text-muted">Your donation directly supports grassroots football programs and youth development.</p>
                </li>
                <li className="mb-3">
                  <h5 className="text-primary">⚽ Player Development</h5>
                  <p className="text-muted">Help us train and nurture the next generation of football talents.</p>
                </li>
                <li className="mb-3">
                  <h5 className="text-primary">📈 Growth & Expansion</h5>
                  <p className="text-muted">Expand our reach to more communities and create more opportunities.</p>
                </li>
                <li className="mb-3">
                  <h5 className="text-primary">🏆 Excellence</h5>
                  <p className="text-muted">Support high-quality training facilities and coaching programs.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsorship Section */}
      <section className="mb-5">
        <h2 className="mb-3">Our Sponsors & Partners</h2>
        <p className="text-muted lead mb-4">Thank you to our partners who help us grow and achieve our mission.</p>
        <div className="row mt-3">
          {sponsors.map(s => (
            <div className="col-md-4 mb-3" key={s.id}>
              <SponsorCard sponsor={s} />
            </div>
          ))}
        </div>
      </section>

      {/* Partnership Opportunities */}
      <section className="mb-5">
        <div className="row">
          <div className="col-md-6">
            <h3 className="mb-3">Become a Partner</h3>
            <p>Are you interested in partnering with Obhiaba Foundation? We offer various sponsorship packages and collaboration opportunities.</p>
            <ul className="list-group list-group-flush">
              <li className="list-group-item"><strong>Title Sponsorship</strong> - Premium branding and visibility</li>
              <li className="list-group-item"><strong>Event Sponsorship</strong> - Support specific tournaments and events</li>
              <li className="list-group-item"><strong>Program Sponsorship</strong> - Fund specific development programs</li>
              <li className="list-group-item"><strong>In-Kind Donations</strong> - Contribute equipment or services</li>
            </ul>
          </div>
          <div className="col-md-6">
            <h3 className="mb-3">Contact Us for Partnerships</h3>
            <div className="card shadow-sm p-4">
              <form>
                <div className="mb-3">
                  <label htmlFor="pName" className="form-label">Organization Name</label>
                  <input type="text" className="form-control" id="pName" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="pContact" className="form-label">Contact Person</label>
                  <input type="text" className="form-control" id="pContact" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="pEmail" className="form-label">Email</label>
                  <input type="email" className="form-control" id="pEmail" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="pMessage" className="form-label">Partnership Interest</label>
                  <textarea className="form-control" id="pMessage" rows="3" required></textarea>
                </div>
                <button type="submit" className="btn btn-success w-100">Send Inquiry</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="mb-5">
        <h2 className="mb-4 text-center">Our Impact</h2>
        <div className="row">
          <div className="col-md-3 text-center mb-3">
            <div className="card shadow-sm p-4">
              <h3 className="text-primary fw-bold">500+</h3>
              <p className="text-muted">Players Trained</p>
            </div>
          </div>
          <div className="col-md-3 text-center mb-3">
            <div className="card shadow-sm p-4">
              <h3 className="text-primary fw-bold">5</h3>
              <p className="text-muted">Football Teams</p>
            </div>
          </div>
          <div className="col-md-3 text-center mb-3">
            <div className="card shadow-sm p-4">
              <h3 className="text-primary fw-bold">20+</h3>
              <p className="text-muted">Events Hosted</p>
            </div>
          </div>
          <div className="col-md-3 text-center mb-3">
            <div className="card shadow-sm p-4">
              <h3 className="text-primary fw-bold">10</h3>
              <p className="text-muted">Communities Reached</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
